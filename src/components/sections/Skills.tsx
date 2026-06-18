import { GlassCard, TechTag } from "../ui/GlassCard";
import { Cpu } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "🐍",
      skills: [{ name: "Python", level: 95 }],
    },
    {
      title: "Frameworks",
      icon: "⚡",
      skills: [
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Flask", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "RabbitMQ", level: 70 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  const concepts = [
    { name: "OOP", color: "text-primary" },
    { name: "Data Structures", color: "text-accent" },
    { name: "REST APIs", color: "text-[hsl(var(--cyber-blue))]" },
    { name: "MVC Pattern", color: "text-[hsl(var(--cyber-pink))]" },
    { name: "SDLC", color: "text-primary" },
    { name: "Agile/Scrum", color: "text-accent" },
    { name: "Linux", color: "text-[hsl(var(--cyber-blue))]" },
    { name: "TDD", color: "text-[hsl(var(--cyber-pink))]" },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <Cpu className="h-4 w-4" />
            <span>{"// tech_stack"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <GlassCard
              key={category.title}
              className={`space-y-4 opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${(catIndex + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold font-mono">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--cyber-blue)))"
                        }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Concepts */}
        <GlassCard
          hover={false}
          className="opacity-0 animate-fade-in-up delay-500"
        >
          <h3 className="text-lg font-bold font-mono text-primary mb-6 flex items-center gap-2">
            <span>{">"}</span> Core Concepts
          </h3>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <span
                key={concept.name}
                className={`px-4 py-2 glass rounded border border-current/20 text-sm font-mono ${concept.color} hover:scale-105 hover:border-current/50 transition-all duration-300 cursor-default`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {concept.name}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Projects", value: "10+", icon: "📁" },
            { label: "Technologies", value: "15+", icon: "🔧" },
            { label: "Internships", value: "2", icon: "💼" },
            { label: "Certifications", value: "4", icon: "🏆" },
          ].map((stat, index) => (
            <GlassCard 
              key={stat.label}
              className="text-center opacity-0 animate-scale-in"
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
