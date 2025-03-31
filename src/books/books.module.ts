// src/books/books.module.ts
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
