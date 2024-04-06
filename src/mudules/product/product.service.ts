import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  createGroup(createProductGroupDto: any) {
    return this.productRepository.createGroup(createProductGroupDto);
  }

  async create(createProductDto: CreateProductDto) {
    const productGroup = await this.productRepository.findOneGroup(
      createProductDto.productGroupId,
    );
    if (!productGroup) {
      throw new NotFoundException('Product group not found');
    }
    return this.productRepository.create(createProductDto, productGroup);
  }

  findAllGroup() {
    return this.productRepository.findAllGroup();
  }

  findAll() {
    return this.productRepository.findAll();
  }

  async findByIds(ids: number[]) {
    const product = await this.productRepository.findByIds(ids);
    if (product.length !== ids.length) {
      throw new NotFoundException('Some products not found');
    }
    return product;
  }

  findOneGroup(id: number) {
    return this.productRepository.findOneGroup(id);
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  updateGroup(id: number, updateProductGroupDto: any) {
    return `This action updates a #${id} product group`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  removeGroup(id: number) {
    return `This action removes a #${id} product group`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
