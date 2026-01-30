import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { verifySessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const session = request.cookies.get("admin_session")?.value;
  if (!verifySessionToken(session)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const prisma = getPrisma();
    if (!prisma) {
      return NextResponse.json(
        { error: "Database is not configured." },
        { status: 500 }
      );
    }
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error("Fetch submissions error:", error);
    const message =
      error instanceof Error ? error.message : String(error || "");
    return NextResponse.json(
      { error: message || "Failed to load submissions." },
      { status: 500 }
    );
  }
}
