// lib/prisma.js
import { PrismaClient } from '../src/generated/prisma';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: {
      url: process.env.DATABASE_URL, // Prisma 7 requires adapter.url instead of schema url
    },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}