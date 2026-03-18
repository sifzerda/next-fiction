// lib/prisma.js
import { PrismaClient } from '../src/generated/prisma';
import { PostgresAdapter } from '@prisma/adapter-postgres';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PostgresAdapter({
      url: process.env.DATABASE_URL, // correct way
    }),
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}