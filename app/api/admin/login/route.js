import { NextResponse } from "next/server";
import { createSessionToken, getSessionCookieOptions } from "@/lib/adminAuth";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Admin credentials are not configured." },
        { status: 500 }
      );
    }

    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set("admin_session", createSessionToken(), getSessionCookieOptions());
    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
