import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Project = {
  title: string;
  year: string;
  tag: string;
  stack: string;
  url: string;
};

const projects: Project[] = [
  { title: "ADS Finance Platform", year: "2025", tag: "Backend · Microservices", stack: "FastAPI · PostgreSQL · Docker", url: "https://github.com/Sarvesh8521" },
  { title: "LocalGPT", year: "2025", tag: "Generative AI · RAG", stack: "Python · ChromaDB · HuggingFace", url: "https://github.com/Sarvesh8521/LOCAL_GPT" },
  { title: "AI Resume Tailor Agent", year: "2025", tag: "LLM Agent", stack: "Python · LLM · Prompting", url: "https://github.com/Sarvesh8521/AI-Resume-Tailor-Agent" },
  { title: "Stock Data Intelligence", year: "2024", tag: "Data · Analytics", stack: "Python · Pandas", url: "https://github.com/Sarvesh8521/Stock-Data-Intelligence-Dashboard" },
  { title: "Task Management System", year: "2024", tag: "REST APIs", stack: "Django · DRF · PostgreSQL", url: "https://github.com/Sarvesh8521/Task-management" },
  { title: "Blockchain File Storage", year: "2024", tag: "Decentralised Storage", stack: "Python · Blockchain", url: "https://github.com/Sarvesh8521/Blockchain-based-File-Storage" },
  { title: "Financial Dashboard", year: "2023", tag: "Web Application", stack: "HTML · CSS · JavaScript", url: "https://github.com/Sarvesh8521/Financial-Dashboard" },
  { title: "NeetCode Submissions", year: "2024", tag: "DSA Practice", stack: "Python", url: "https://github.com/Sarvesh8521/neetcode-submissions-aongit9n" },
];

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="container-x">
        <div className="flex items-end justify-between mb-14 md:mb-20 gap-6">
          <Reveal>
            <div>
              <p className="eyebrow mb-3">Selected Work</p>
              <h2 className="text-4xl md:text-6xl tracking-tight font-medium leading-[1.05]">
                Things I've <span className="serif">built</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" className="btn-ghost text-xs hidden md:inline-flex">
              <Github className="h-4 w-4" /> All on GitHub
            </a>
          </Reveal>
        </div>

        <ul className="hairline">
          {projects.map((p, i) => (
            <Reveal key={p.title} as="li" delay={i * 0.04}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative block border-b border-border py-8 md:py-10"
              >
                <div className="grid grid-cols-12 items-baseline gap-4">
                  <span className="col-span-1 mono text-xs text-muted-foreground">0{i + 1}</span>
                  <div className="col-span-11 md:col-span-6">
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                      {p.title}
                    </h3>
                  </div>
                  <div className="hidden md:block md:col-span-3 text-sm text-foreground/70">{p.stack}</div>
                  <div className="hidden md:flex md:col-span-2 items-baseline justify-end gap-3">
                    <span className="mono text-xs text-muted-foreground">{p.year}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
                <p className="mt-2 md:hidden text-sm text-foreground/60">{p.tag} · {p.year}</p>
                <p className="mt-2 hidden md:block text-xs eyebrow opacity-0 group-hover:opacity-100 transition-opacity ml-[8.333%]">
                  {p.tag}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* Floating tag pill following hover */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none fixed bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:block"
            >
              <div className="btn-solid text-xs">View project →</div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="md:hidden mt-10 text-center">
          <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" className="btn-ghost text-xs">
            <Github className="h-4 w-4" /> All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
