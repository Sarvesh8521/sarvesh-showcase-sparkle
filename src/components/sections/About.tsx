import { GlassCard, TechTag } from "../ui/GlassCard";
import { Code2, Database, Server, Zap, Terminal } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable Python code following PEP8 standards",
      color: "text-primary",
    },
    {
      icon: Server,
      title: "API Design",
      description: "Building RESTful APIs with Django, DRF, FastAPI & Flask",
      color: "text-accent",
    },
    {
      icon: Database,
      title: "Databases",
      description: "Expertise in PostgreSQL, MySQL, MongoDB & SQLite",
      color: "text-[hsl(var(--cyber-blue))]",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing backend systems for speed and efficiency",
      color: "text-[hsl(var(--cyber-pink))]",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <Terminal className="h-4 w-4" />
            <span>{"// about_me"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            <span className="text-muted-foreground font-mono text-lg block mb-2">
              {"<section id=\"about\">"}
            </span>
            Crafting Digital <span className="gradient-text">Systems</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <GlassCard hover={false} className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <span className="text-primary">class</span> Developer:
              </div>
              
              <div className="pl-4 space-y-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-accent">def</span> <span className="text-primary">__init__</span>(self):
                </p>
                <div className="pl-4 space-y-2">
                  <p>
                    <span className="text-muted-foreground">self.name = </span>
                    <span className="text-[hsl(var(--cyber-blue))]">"Sarvesh Singh"</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">self.role = </span>
                    <span className="text-[hsl(var(--cyber-blue))]">"Python Developer Intern"</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">self.company = </span>
                    <span className="text-[hsl(var(--cyber-blue))]">"Auburn Digital Solutions"</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">self.location = </span>
                    <span className="text-[hsl(var(--cyber-blue))]">"Delhi, India"</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I hold an <span className="text-foreground">MCA from MIT-WPU, Pune</span> with 
                  a CGPA of 7.81. During my time there, I organized a{" "}
                  <span className="text-primary">Codeathon</span> and built the website 
                  for the college forum club.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <TechTag>Python</TechTag>
                <TechTag>Django</TechTag>
                <TechTag>FastAPI</TechTag>
                <TechTag>PostgreSQL</TechTag>
                <TechTag>Docker</TechTag>
              </div>
            </GlassCard>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-right delay-300">
            {highlights.map((item, index) => (
              <GlassCard
                key={item.title}
                className={`space-y-3 opacity-0 animate-scale-in`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded border border-current/30 flex items-center justify-center ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Closing tag */}
        <div className="text-center mt-12 text-muted-foreground font-mono text-sm opacity-50">
          {"</section>"}
        </div>
      </div>
    </section>
  );
};
