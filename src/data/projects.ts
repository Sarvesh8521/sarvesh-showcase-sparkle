export type Project = {
  title: string;
  problem: string;
  stack: string[];
  metric: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
};

// Add, remove, or edit projects here. ProjectCard renders every item below.
export const projects: Project[] = [
  {
    title: "DocLens — AI Document Summarization",
    problem: "Unified document ingestion and authentication for an AI summarization platform, supporting eight file formats.",
    stack: ["Python", "Django REST Framework", "PostgreSQL", "JWT", "Docker"],
    metric: "8 formats",
    liveUrl: "",
    githubUrl: "https://github.com/Sarvesh8521",
    image: "",
  },
  {
    title: "Website Content Intelligence",
    problem: "Crawls and indexes website content for source-cited semantic answers, duplicate detection, and content-gap discovery.",
    stack: ["Python", "FastAPI", "React", "Playwright", "ChromaDB", "RAG"],
    metric: "Source-cited RAG",
    liveUrl: "",
    githubUrl: "https://github.com/Sarvesh8521",
    image: "",
  },
  {
    title: "TaskFlow — Task Management System",
    problem: "A multi-tenant task tracker with organizations, projects, sprints, a Kanban workflow, and automated token refresh.",
    stack: ["Python", "Django REST Framework", "PostgreSQL", "JWT", "Docker", "Kubernetes"],
    metric: "Multi-tenant",
    liveUrl: "",
    githubUrl: "https://github.com/Sarvesh8521/Task-management",
    image: "",
  },
];
