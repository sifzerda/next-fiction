// lib/prisma.js
import { PrismaClient } from '../src/generated/prisma';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient(); // no datasources property

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}