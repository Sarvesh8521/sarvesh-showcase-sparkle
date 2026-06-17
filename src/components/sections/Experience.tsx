import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    role: "Python Backend Developer — Intern",
    org: "Auburn Digital Solutions",
    period: "Dec 2025 — Present",
    desc: "Building ADS Finance, a financial platform with FastAPI microservices, PostgreSQL, JWT/RBAC, Docker and CI/CD.",
  },
  {
    role: "Software Developer — Intern",
    org: "Kuhoo Finance",
    period: "Feb 2025 — Nov 2025",
    desc: "Shipped Django/DRF APIs powering financial workflows. 900+ commits in Agile Scrum.",
  },
  {
    role: "Codeathon Organiser — IT Forum",
    org: "MIT WPU, Pune",
    period: "2024",
    desc: "Organised a campus-wide Codeathon and built the official event website.",
  },
  {
    role: "Master of Computer Applications (MCA)",
    org: "MIT World Peace University",
    period: "2023 — 2025",
    desc: "Systems, databases, distributed computing and software engineering.",
  },
];

export const Experience = () => (
  <section id="experience" className="py-28 md:py-40">
    <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-4">
        <Reveal>
          <p className="eyebrow mb-6">Journey</p>
          <h2 className="text-4xl md:text-5xl tracking-tight font-medium leading-tight">
            A short <span className="serif">timeline</span>.
          </h2>
        </Reveal>
      </div>
      <ul className="md:col-span-8">
        {items.map((it, i) => (
          <Reveal key={it.role} as="li" delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-4 py-8 border-b border-border">
              <div className="col-span-12 md:col-span-3 mono text-xs text-muted-foreground pt-1">{it.period}</div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-xl md:text-2xl tracking-tight">{it.role}</h3>
                <p className="text-sm text-foreground/60 mt-1">{it.org}</p>
                <p className="text-sm text-foreground/80 mt-3 max-w-xl leading-relaxed">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
