import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    role: "Software Engineer · via TheCodeStory",
    organization: "Omnicom Group",
    period: "May 2026 – Present",
    bullets: [
      "Built DocLens authentication and a unified document parser spanning PDF, DOCX, XLSX, CSV, TXT, JSON, XML, and HTML.",
      "Architecting a FastAPI and React website intelligence platform with ChromaDB retrieval, source citations, and content-gap detection.",
    ],
    proof: "8-format document parser",
  },
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    organization: "Auburn Digital Solutions",
    period: "December 2025 – April 2026",
    bullets: [
      "Built ADS Finance backend modules for multi-level financial approval workflows using FastAPI, PostgreSQL, JWT, and RBAC.",
      "Containerized services with Docker and added pytest coverage and structured logging for CI/CD readiness.",
    ],
    proof: "Approval workflows",
  },
  {
    icon: Briefcase,
    role: "SDE Intern",
    organization: "Kuhoo Finance Pvt Ltd",
    period: "February 2025 – November 2025",
    bullets: [
      "Raised automated test coverage to 87% across six core services, strengthening CI quality gates.",
      "Built a Django and DRF task-management system with PostgreSQL, JWT, RBAC, and Kubernetes deployment manifests.",
    ],
    proof: "87% test coverage",
  },
  {
    icon: Trophy,
    role: "Codeathon Organizer · IT Forum",
    organization: "MIT World Peace University · Pune",
    period: "MIT WPU · Pune",
    bullets: ["Organized a campus Codeathon and built the IT Forum club website end to end."],
    proof: "Event + website",
  },
  {
    icon: GraduationCap,
    role: "Master of Computer Applications",
    organization: "MIT World Peace University · Pune",
    period: "2023 – 2025",
    bullets: ["Master of Computer Applications · CGPA 7.81 · coursework in systems, databases, distributed computing, and software engineering."],
    proof: "MCA · 7.81 CGPA",
  },
];

const skillGroups = [
  { label: "Languages", skills: ["Python", "JavaScript", "C++", "SQL"] },
  { label: "Backend", skills: ["FastAPI", "Django", "DRF", "Flask", "REST APIs", "Microservices"] },
  { label: "Data & Platform", skills: ["PostgreSQL", "MySQL", "ChromaDB", "Docker", "Kubernetes", "Redis"] },
  { label: "AI & Quality", skills: ["RAG", "LLM Integration", "Prompt Engineering", "pytest", "CI/CD"] },
];

export const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="section-intro mb-10">
        <p className="section-prefix">&gt; EXPERIENCE</p>
        <h2 id="experience-title" className="section-title">Where I’ve contributed</h2>
      </div>
      <div className="experience-list">
        {roles.map((role) => (
          <article key={role.role} className="experience-row">
            <div className="experience-icon"><role.icon aria-hidden="true" className="h-5 w-5" /></div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{role.role}</h3>
                  <p className="text-sm text-muted-foreground">{role.organization}</p>
                  <p className="mono mt-1 text-xs text-muted-foreground">{role.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {role.bullets.map((bullet, bulletIndex) => <li key={bullet} className="flex gap-3"><span className="mono text-primary" aria-hidden="true">›</span><span>{bullet}{bulletIndex === 0 && <span className="proof-badge ml-2 align-middle">{role.proof}</span>}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div id="skills" className="mt-14 border-t border-border pt-8">
        <p className="mono mb-5 text-sm text-muted-foreground">&gt; TOOLKIT</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mono mb-3 text-sm font-semibold text-primary">{group.label}</h3>
              <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="tech-chip">{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
