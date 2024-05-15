import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { Ctban, ProductOfCtban } from './entities/ctban.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateCtbanDto } from './dto/create-ctban.dto';
import { WarehouseKeeper } from '../employee/entities/employee.entity';
import { DonBanHang } from '../don-ban-hang/entities/don-ban-hang.entity';
import { UpdateCtbanDto } from './dto/update-ctban.dto';
import { OrderType, PaymentStatusType } from 'src/constants';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class CtbanRepository {
  private readonly ctbanRepository: Repository<Ctban>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.ctbanRepository = this.dataSource.getRepository(Ctban);
  }

  create(
    createCtbanDto: CreateCtbanDto,
    warehouseKeeper: WarehouseKeeper,
    donBanHang: DonBanHang,
    totalProductValue: number,
    totalDiscountValue: number,
    totalTaxValue: number,
    finalValue: number,
    productOfCtban: { product: Product; count: number; price: number }[],
  ) {
    const newCtban = this.ctbanRepository.create({
      ...createCtbanDto,
      warehouseKeeper: warehouseKeeper,
      donBanHang: donBanHang,
      totalProductValue: totalProductValue,
      totalDiscountValue: totalDiscountValue,
      totalTaxValue: totalTaxValue,
      finalValue: finalValue,
    });
    return this.dataSource.transaction(async (manager) => {
      const ctban = await manager.save(newCtban);
      await Promise.all(
        productOfCtban.map(async (each) => {
          const productOfCtban = manager.create(ProductOfCtban, {
            product: each.product,
            count: each.count,
            price: each.price,
            ctban: ctban,
          });
          return manager.save(productOfCtban);
        }),
      );
      return ctban;
    });
  }

  findAll(currentPage: number, pageSize: number, sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.ctbanRepository.findAndCount({
      relations: {
        warehouseKeeper: true,
        donBanHang: {
          customer: true,
        },
        productOfCtban: {
          product: true,
        },
        phieuThu: true,
      },
      take: pageSize,
      skip: pageSize * (currentPage - 1),
      order: sortsObject,
    });
  }

  findAllNoPage(sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.ctbanRepository.findAndCount({
      relations: {
        warehouseKeeper: true,
        donBanHang: {
          customer: true,
          salesperson: true,
        },
        productOfCtban: {
          product: {
            productGroup: true,
          },
        },
        phieuThu: true,
      },
      order: sortsObject,
    });
  }

  findByPaymentStatus(status: PaymentStatusType[]) {
    return this.ctbanRepository.find({
      where: {
        paymentStatus: In(status),
      },
    });
  }

  findOne(id: number) {
    return this.ctbanRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        warehouseKeeper: true,
        donBanHang: {
          customer: true,
          salesperson: true,
          cktm: true,
          dieuKhoan: true,
        },
        productOfCtban: {
          product: {
            productGroup: true,
          },
        },
        phieuThu: true,
      },
    });
  }

  makePayment(id: number, money: number) {
    return this.ctbanRepository.update(id, {
      paidValue: money,
    });
  }

  updatePaymentStatus(id: number, status: PaymentStatusType) {
    return this.ctbanRepository.update(id, {
      paymentStatus: status,
    });
  }

  update(id: number, updateCtbanDto: UpdateCtbanDto) {
    return this.ctbanRepository.update(id, updateCtbanDto);
  }

  remove(id: number) {
    return this.ctbanRepository.delete(id);
  }
}
