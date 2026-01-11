import { NextResponse } from 'next/server';

// Simple in-memory storage for development
// In production, you should use a database (Vercel Postgres, Supabase, etc.)
const subscribers = new Set();

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed (in production, check database)
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter!' },
        { status: 200 }
      );
    }

    // Add to subscribers (in production, save to database)
    subscribers.add(email.toLowerCase());

    // TODO: Integrate with email service (Resend, SendGrid, Mailchimp, etc.)
    // Example with Resend:
    // if (process.env.RESEND_API_KEY) {
    //   await fetch('https://api.resend.com/emails', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     },
    //     body: JSON.stringify({
    //       from: 'newsletter@yourdomain.com',
    //       to: email,
    //       subject: 'Welcome to KNOB Studio Newsletter',
    //       html: '<p>Thank you for subscribing!</p>',
    //     }),
    //   });
    // }

    // Log subscription (in production, this would be in your database logs)
    if (process.env.NODE_ENV === 'development') {
      console.log(`New newsletter subscription: ${email}`);
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to our newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check subscription status
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter is required' },
      { status: 400 }
    );
  }

  const isSubscribed = subscribers.has(email.toLowerCase());
  return NextResponse.json({ subscribed: isSubscribed });
}

