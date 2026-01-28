import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message, location } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const missing = [];
    if (!process.env.ZOHO_SMTP_HOST) missing.push("ZOHO_SMTP_HOST");
    if (!process.env.ZOHO_SMTP_PORT) missing.push("ZOHO_SMTP_PORT");
    if (!process.env.ZOHO_SMTP_USER) missing.push("ZOHO_SMTP_USER");
    if (!process.env.ZOHO_SMTP_PASS) missing.push("ZOHO_SMTP_PASS");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Email service is not configured.", missing },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"KNOB Studio" <${process.env.ZOHO_SMTP_USER}>`,
      to: "info@knobstud.com",
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nLocation: ${
        location || "N/A"
      }\n\nMessage:\n${message}`,
    });

    await transporter.sendMail({
      from: `"KNOB Studio" <${process.env.ZOHO_SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out. We got your message and will get back to you shortly.\n\n- KNOB Studio`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
