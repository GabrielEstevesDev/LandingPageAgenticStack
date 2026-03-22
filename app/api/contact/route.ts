import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Placeholder for email integration (e.g., Nodemailer, Resend)
    console.log('Form submission received:', { name, email, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Protocol initiated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error initiating protocol.' },
      { status: 500 }
    );
  }
}
