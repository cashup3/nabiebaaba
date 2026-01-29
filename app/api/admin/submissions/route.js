import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifySessionToken } from "@/lib/adminAuth";

export async function GET(request) {
  const session = request.cookies.get("admin_session")?.value;
  if (!verifySessionToken(session)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json(
      { error: "Failed to load submissions." },
      { status: 500 }
    );
  }
}
