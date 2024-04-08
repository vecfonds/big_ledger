import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import {
  DonBanHang,
  ProductOfDonBanHang,
} from './entities/don-ban-hang.entity';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { Salesperson } from '../employee/entities/employee.entity';
import { Customer } from '../customer/entities/customer.entity';
import { OrderType } from 'src/constants';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class DonBanHangRepository {
  private readonly donBanHangRepository: Repository<DonBanHang>;
  private readonly productOfDonBanHangRepository: Repository<ProductOfDonBanHang>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.donBanHangRepository = this.dataSource.getRepository(DonBanHang);
    this.productOfDonBanHangRepository =
      this.dataSource.getRepository(ProductOfDonBanHang);
  }

  create(
    createDonBanHangDto: CreateDonBanHangDto,
    salesperson: Salesperson,
    customer: Customer,
    products: Product[],
    counts: number[],
  ) {
    const newDonBanHang = this.donBanHangRepository.create({
      ...createDonBanHangDto,
      salesperson: salesperson,
      customer: customer,
    });
    return this.dataSource.transaction(async (manager) => {
      const donBanHang = await manager.save(newDonBanHang);
      const productOfDonBanHangs = products.map((product, index) => {
        return this.productOfDonBanHangRepository.create({
          donBanHang: donBanHang,
          product: product,
          price: product.priceDelivery,
          count: counts[index],
        });
      });
      await manager.save(productOfDonBanHangs);
      return donBanHang;
    });
  }

  findAll(take: number, skip: number, sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.donBanHangRepository.findAndCount({
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: true,
        ctban: {
          productOfCtban: true,
        },
      },
      order: sortsObject,
      take: take,
      skip: skip,
    });
  }

  findAllNoPage(sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.donBanHangRepository.findAndCount({
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: true,
        ctban: {
          productOfCtban: true,
        },
      },
      order: sortsObject,
    });
  }

  findByIds(ids: number[]) {
    return this.donBanHangRepository.find({
      where: {
        id: In(ids),
      },
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: true,
        ctban: true,
      },
    });
  }

  findOne(id: number) {
    return this.donBanHangRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: true,
        ctban: {
          productOfCtban: true,
        },
      },
    });
  }

  update(id: number, donBanHang: Partial<DonBanHang>) {
    return this.donBanHangRepository.update(id, donBanHang);
  }

  remove(id: number) {
    return this.donBanHangRepository.delete(id);
  }
}
