import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Hello from protected route!" },
    { status: 200 }
  );
}
