import { ArrowUpRight, Github, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card card-surface flex min-w-0 flex-col p-5">
      <div className="project-visual" aria-label={project.image ? `${project.title} preview` : `${project.title} image placeholder`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} className="size-full min-h-40 object-cover" />
        ) : (
          <>
            <span className="mono project-visual-label"><ImageIcon aria-hidden="true" className="h-4 w-4" /> PROJECT SNAPSHOT</span>
            <span className="project-visual-diagram mono" aria-hidden="true">PROJECT IMAGE</span>
            <span className="mono project-visual-note">ADD IMAGE URL</span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="mono mb-2 text-xs text-muted-foreground">0{index + 1} / FEATURED PROJECT</p>
        <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 min-h-[3.25rem] text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        <div className="mt-5 border-l-2 border-primary pl-3">
          <p className="mono text-xl font-semibold text-primary">{project.metric}</p>
          <p className="mono mt-1 text-[11px] text-muted-foreground">OUTCOME METRIC</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}
        </div>
        <div className="mt-auto flex flex-col items-stretch gap-2 pt-6 lg:flex-row lg:items-center">
          {project.liveUrl ? (
            <Button asChild size="sm" className="min-h-11 w-full font-mono text-xs lg:w-auto">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          ) : (
            <Button type="button" variant="ghost" size="sm" disabled className="min-h-11 w-full font-mono text-xs lg:w-auto">Live Demo · pending</Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="min-h-11 w-full font-mono lg:ml-auto lg:w-auto">
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
