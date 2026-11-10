import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="section-band px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="section-intro mb-10">
        <p className="section-prefix">&gt; PROJECTS</p>
        <h2 id="projects-title" className="section-title">Featured work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Selected backend and AI projects, with the code behind each one.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="ghost" className="mono min-h-11 w-full text-sm text-primary lg:w-auto">
          <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);
