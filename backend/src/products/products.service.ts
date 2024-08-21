import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      const products = await this.prisma.product.findMany();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }
}
