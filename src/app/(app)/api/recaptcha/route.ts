import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: "Only POST requests are allowed." }, 
      { status: 405 }
    );
  }

  const data = await req.json();
  const { token } = data;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json(
      { error: "No token provided." }, 
      { status: 400 }
    );
  }

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    else {
      return NextResponse.json(response);
    }
  }
  catch (error) {
    return NextResponse.json(
      { error: (error as Error).message }, 
      { status: 500 }
    );
  }
}