import { GlassCard } from "../ui/GlassCard";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [{ name: "Python", level: 95 }],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Flask", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "RabbitMQ", level: 70 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  const concepts = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "REST API Design",
    "MVC Architecture",
    "SDLC",
    "Agile Methodology",
    "Linux Administration",
    "Test-Driven Development",
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <GlassCard
              key={category.title}
              className={`space-y-4 opacity-0 animate-fade-in-up delay-${(catIndex + 1) * 100}`}
            >
              <h3 className="text-xl font-display font-semibold text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
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
          <h3 className="text-xl font-display font-semibold text-primary mb-6">
            Core Concepts
          </h3>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <span
                key={concept}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {concept}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
