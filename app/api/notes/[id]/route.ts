import { NextResponse } from "next/server";
import { updateNote } from "@/server/notes";
import { deleteNote } from "@/server/notes";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, content, notebookId } = body ?? {};

    if (!id || !title || !content || !notebookId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await updateNote(id, { title, content, notebookId });
    const status = result.success ? 200 : 500;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to update note" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing note id" },
        { status: 400 }
      );
    }
    const result = await deleteNote(id);
    const status = result.success ? 200 : 500;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete note" },
      { status: 500 }
    );
  }
}


