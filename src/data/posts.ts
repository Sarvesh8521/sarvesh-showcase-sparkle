export type Post = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
};

// Add, remove, or edit posts here. The Writing section renders every item below.
export const posts: Post[] = [
  {
    title: "Building reliable document pipelines",
    slug: "building-reliable-document-pipelines",
    date: "2026-05-18",
    summary: "Lessons from designing a document parser that stays predictable across multiple file formats.",
    content: "Write the full post here. Individual post pages will use this field later.",
  },
  {
    title: "What source-cited RAG changes",
    slug: "what-source-cited-rag-changes",
    date: "2026-04-06",
    summary: "A practical look at grounding semantic answers in sources people can inspect and trust.",
    content: "Write the full post here. Individual post pages will use this field later.",
  },
];
