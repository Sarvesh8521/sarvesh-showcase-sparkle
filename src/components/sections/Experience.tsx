import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    role: "Python Backend Developer — Intern",
    org: "Auburn Digital Solutions",
    period: "Dec 2025 – Present",
    desc: "Building ADS Finance — a production-grade financial platform using FastAPI, PostgreSQL, microservices, JWT/RBAC, Docker and CI/CD. Translating client SOWs into backend APIs with strong test coverage.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD", "JWT/RBAC"],
  },
  {
    icon: Briefcase,
    role: "Software Developer — Intern",
    org: "Kuhoo Finance",
    period: "Feb 2025 – Nov 2025",
    desc: "Built scalable REST APIs with Django/DRF supporting financial workflows. Optimised PostgreSQL schemas, contributed 900+ commits in Agile Scrum with strong CI/CD and code-review practices.",
    tags: ["Django", "DRF", "PostgreSQL", "Agile"],
  },
  {
    icon: Trophy,
    role: "Codeathon Organiser — IT Forum",
    org: "MIT WPU, Pune",
    period: "2024",
    desc: "Organised a campus-wide Codeathon for the IT Forum club at MIT WPU and built the official event website end-to-end.",
    tags: ["Event", "Web", "Leadership"],
  },
  {
    icon: GraduationCap,
    role: "Master of Computer Applications (MCA)",
    org: "MIT World Peace University, Pune",
    period: "2023 – 2025",
    desc: "Coursework across systems, databases, distributed computing and software engineering.",
    tags: ["MCA", "MIT WPU"],
  },
];

export const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mono text-sm text-muted-foreground mb-2">// experience in scalable backends &amp; AI systems</p>
        <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <article
            key={i}
            className="card-surface p-6 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md border border-border flex items-center justify-center accent-text shrink-0">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base">{it.role}</h3>
                <p className="text-sm text-muted-foreground">{it.org}</p>
                <p className="mono text-xs text-muted-foreground mt-0.5">{it.period}</p>
                <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{it.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {it.tags.map((t) => (
                    <span key={t} className="mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
