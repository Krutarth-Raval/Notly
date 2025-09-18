import { CreateNoteButton } from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

export default async function NotebookPage({ params }: { params: { notebookId: string } }) {
  const { notebookId } = params;

  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${notebookId}`,
        },
      ]}
    >
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl md:text-2xl font-bold">{notebook?.name}</h1>
      <CreateNoteButton notebookId={notebookId} />

      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebook?.notes?.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
}
