const globalForPrisma = globalThis;

async function createClient() {
  const { PrismaClient } = await import("@prisma/client");
  if (process.env.PRISMA_CLIENT_ENGINE_TYPE === "client") {
    const { neon } = await import("@neondatabase/serverless");
    const { PrismaNeon } = await import("@prisma/adapter-neon");
    const sql = neon(process.env.DATABASE_URL);
    const adapter = new PrismaNeon(sql);
    return new PrismaClient({ adapter, log: ["error"] });
  }
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
