import { GlassCard } from "../ui/GlassCard";
import { ExternalLink, Github, Server, Bot, Database } from "lucide-react";
import { Button } from "../ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      description:
        "A scalable Jira-like task tracking system with comprehensive RESTful backend APIs. Built using Django & Django REST Framework with full CRUD operations, user authentication, and project management features.",
      icon: Server,
      tags: ["Django", "DRF", "PostgreSQL", "REST API"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Local-GPT",
      description:
        "Privacy-focused local chatbot application enabling offline inference using open-source LLMs. Ensures data privacy by running entirely on local hardware without external API calls.",
      icon: Bot,
      tags: ["Python", "LLM", "Privacy", "AI"],
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "Blockchain-Based File Storage",
      description:
        "Decentralized file storage system leveraging blockchain technology for secure, tamper-proof uploads. Implements cryptographic hashing and distributed ledger for file integrity verification.",
      icon: Database,
      tags: ["Blockchain", "Python", "Cryptography", "Decentralized"],
      gradient: "from-primary/20 to-cyan-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my backend development projects, demonstrating expertise in
            API design, system architecture, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={`group relative overflow-hidden opacity-0 animate-fade-in-up delay-${(index + 1) * 100} flex flex-col`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <project.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <a
                      href="https://github.com/Sarvesh8521"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://github.com/Sarvesh8521"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-500">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a
              href="https://github.com/Sarvesh8521"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
