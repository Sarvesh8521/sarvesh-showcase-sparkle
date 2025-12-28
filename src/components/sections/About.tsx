import { GlassCard } from "../ui/GlassCard";
import { Code2, Database, Server, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable Python code following best practices",
    },
    {
      icon: Server,
      title: "API Design",
      description: "Building RESTful APIs with Django, DRF, FastAPI & Flask",
    },
    {
      icon: Database,
      title: "Databases",
      description: "Expertise in PostgreSQL, MySQL, MongoDB & SQLite",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing backend systems for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <GlassCard hover={false} className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-primary">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Python Backend Developer currently working as an intern at{" "}
                <span className="text-foreground font-medium">
                  Auburn Digital Solutions, Delhi
                </span>
                . With hands-on experience in fintech and business workflow systems,
                I specialize in building robust backend solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold an MCA from MIT School of Business, MIT-WPU, Pune with a
                CGPA of 7.81. During my time there, I organized a{" "}
                <span className="text-foreground font-medium">Codeathon</span> and
                built the website for the college forum club.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans Python, Django, FastAPI, and database design. I
                thrive in agile environments and love tackling complex backend
                challenges.
              </p>
            </GlassCard>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-right delay-300">
            {highlights.map((item, index) => (
              <GlassCard
                key={item.title}
                className={`space-y-3 opacity-0 animate-scale-in delay-${(index + 3) * 100}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
