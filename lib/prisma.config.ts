// lib/prisma.config.ts
import { PrismaClient } from '../src/generated/prisma'; // Prisma 7 generated client
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

// Extend the globalThis type to include the prisma singleton
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use a global variable to prevent multiple connections in dev
const globalForPrisma: typeof globalThis & { prisma?: PrismaClient } = globalThis;

export const prisma = new PrismaClient({ adapter });

 if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
