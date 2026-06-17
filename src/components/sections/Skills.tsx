import { Reveal } from "@/components/ui/Reveal";

const groups: { title: string; items: string[] }[] = [
  { title: "Backend", items: ["Python", "FastAPI", "Django", "DRF", "REST APIs", "Microservices"] },
  { title: "AI & Data", items: ["LLMs", "RAG", "ChromaDB", "HuggingFace", "Pandas", "Prompt Eng."] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Redis", "SQLAlchemy"] },
  { title: "DevOps & Tools", items: ["Docker", "CI/CD", "Git", "GitHub", "Linux", "Bash"] },
  { title: "Security", items: ["JWT", "RBAC", "OAuth2", "OWASP"] },
  { title: "Methodology", items: ["Agile", "Scrum", "Code review", "TDD"] },
];

export const Skills = () => (
  <section id="skills" className="py-28 md:py-40">
    <div className="container-x">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">Skills</p>
            <h2 className="text-4xl md:text-5xl tracking-tight font-medium leading-tight">
              Tools I reach for <span className="serif">every day</span>.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-y-10 gap-x-10">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <h3 className="text-sm font-medium mb-4 text-foreground/90">{g.title}</h3>
              <ul className="space-y-1.5 text-foreground/70">
                {g.items.map((it) => (
                  <li key={it} className="text-base">{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
