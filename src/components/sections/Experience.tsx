import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    role: "Python Developer Intern",
    organization: "Auburn Digital Solutions · Delhi",
    period: "December 2025 – Present",
    bullets: [
      "Translate client proposals and approved statements of work into scoped Python and Django backend requirements.",
      "Contribute to feature development, bug fixes, and test coverage across retainer and one-time engagements.",
    ],
    proof: "SOW-aligned delivery",
  },
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    organization: "Kuhoo Finance",
    period: "February 2025 – November 2025",
    bullets: [
      "Built REST APIs with Django and DRF for financial workflows and worked on PostgreSQL schema improvements.",
      "Collaborated in an Agile team across implementation, testing, and code review.",
    ],
    proof: "Financial REST APIs",
  },
  {
    icon: Trophy,
    role: "Codeathon Organizer · IT Forum",
    organization: "MIT World Peace University · Pune",
    period: "2024",
    bullets: ["Organized a campus Codeathon and built the IT Forum club website end to end."],
    proof: "Event + website",
  },
  {
    icon: GraduationCap,
    role: "Master of Computer Applications",
    organization: "MIT World Peace University · Pune",
    period: "2023 – 2025",
    bullets: ["Coursework in systems, databases, distributed computing, and software engineering."],
    proof: "MCA",
  },
];

const skillGroups = [
  { label: "Languages", skills: ["Python", "SQL"] },
  { label: "Frameworks", skills: ["FastAPI", "Django", "Django REST Framework"] },
  { label: "Infra & Tools", skills: ["PostgreSQL", "Docker", "Git", "CI/CD"] },
  { label: "AI", skills: ["LLMs", "RAG", "HuggingFace", "ChromaDB"] },
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
