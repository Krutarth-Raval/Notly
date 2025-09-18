import { NextResponse } from "next/server";
import { createNote } from "@/server/notes";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, notebookId } = body ?? {};
    if (!title || !content || !notebookId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    const result = await createNote({ title, content, notebookId });
    const status = result.success ? 201 : 500;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to create note" },
      { status: 500 }
    );
  }
}


