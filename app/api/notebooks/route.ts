import { NextResponse } from "next/server";
import { createNotebook } from "@/server/notebooks";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, userId } = body ?? {};
    if (!name || !userId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    const result = await createNotebook({ name, userId });
    const status = result.success ? 201 : 500;
    return NextResponse.json(result, { status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create notebook" },
      { status: 500 }
    );
  }
}


