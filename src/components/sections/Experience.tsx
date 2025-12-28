import { GlassCard } from "../ui/GlassCard";
import { Briefcase, GraduationCap, Award, GitBranch } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Python Developer Intern",
      company: "Auburn Digital Solutions",
      location: "Delhi",
      period: "Dec 2025 – Present",
      description: [
        "Developing backend financial monitoring tool",
        "Implementing proposal tracking & budgeting workflows",
        "Translating SOWs into Python/Django APIs",
        "Delivering aligned with project timelines",
      ],
      current: true,
    },
    {
      title: "Backend Developer Intern",
      company: "Kuhoo Finance Pvt. Ltd.",
      location: "Mumbai",
      period: "Feb 2025 – Nov 2025",
      description: [
        "Built Jira-like Task Management System",
        "Developed fintech backend services & REST APIs",
        "Created comprehensive test cases",
        "Improved CI/CD pipelines",
      ],
      current: false,
    },
  ];

  const education = {
    degree: "Master of Computer Applications",
    institution: "MIT-WPU, Pune",
    year: "2025",
    cgpa: "7.81",
  };

  const certifications = [
    "AI Fundamentals",
    "AI with Capstone Project",
    "Web Development Fundamentals",
    "Python (Coursera)",
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <GitBranch className="h-4 w-4" />
            <span>{"// career_history"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-mono">
                work_experience[]
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative pl-12 pb-8 opacity-0 animate-fade-in-left`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 top-2 w-5 h-5 rounded border-2 ${exp.current ? "bg-primary border-primary shadow-[0_0_15px_hsl(var(--primary))]" : "bg-background border-muted-foreground"}`} />
                  
                  <GlassCard neon={exp.current} className="relative">
                    {exp.current && (
                      <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded">
                        ACTIVE
                      </span>
                    )}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-bold font-mono text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-mono text-sm">
                          {exp.company}{" "}
                          <span className="text-muted-foreground">
                            // {exp.location}
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">{exp.period}</p>
                      </div>
                      <ul className="space-y-1">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground font-mono"
                          >
                            <span className="text-primary">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded border border-accent/30 flex items-center justify-center text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-mono">education</h3>
            </div>

            <GlassCard className="opacity-0 animate-fade-in-right delay-200 space-y-4">
              <div>
                <h4 className="font-bold font-mono text-foreground">
                  {education.degree}
                </h4>
                <p className="text-accent font-mono text-sm">{education.institution}</p>
                <p className="text-xs text-muted-foreground font-mono">
                  Graduated: {education.year}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">CGPA:</span>
                <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-mono text-primary">
                  {education.cgpa}
                </span>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary">★</span> Organized Codeathon
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary">★</span> Built forum website
                </p>
              </div>
            </GlassCard>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-6 mt-8">
              <div className="w-10 h-10 rounded border border-[hsl(var(--cyber-blue))]/30 flex items-center justify-center text-[hsl(var(--cyber-blue))]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold font-mono">certifications[]</h3>
            </div>

            <GlassCard className="opacity-0 animate-fade-in-right delay-300 space-y-2">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 transition-colors font-mono text-sm"
                >
                  <span className="text-[hsl(var(--cyber-blue))]">[{i}]</span>
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
