const globalForPrisma = globalThis;

async function createClient() {
  if (process.env.PRISMA_CLIENT_ENGINE_TYPE === "client") {
    process.env.PRISMA_CLIENT_ENGINE_TYPE = "library";
  }
  const { PrismaClient } = await import("@prisma/client");
  return new PrismaClient({
    log: ["error"],
  });
}

export async function getPrisma() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = await createClient();
  }

  return globalForPrisma.prisma;
}
