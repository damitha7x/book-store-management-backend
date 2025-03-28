// src/books/books.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.book.create({ data });
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, data: any) {
    await this.findOne(id); // Check if exists
    return this.prisma.book.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists
    return this.prisma.book.delete({ where: { id } });
  }
}