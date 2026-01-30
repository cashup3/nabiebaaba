import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

function createClient() {
  if (process.env.PRISMA_CLIENT_ENGINE_TYPE === "client") {
    process.env.PRISMA_CLIENT_ENGINE_TYPE = "library";
  }
  return new PrismaClient({
    log: ["error"],
  });
}

export function getPrisma() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createClient();
  }

  return globalForPrisma.prisma;
}
