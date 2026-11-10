import { useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LockKeyhole,
  Network,
  ServerCog,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

const skills = [
  { label: "Python", Icon: Code2, x: "4%", y: "9%", depth: 0.22 },
  { label: "Docker", Icon: Boxes, x: "70%", y: "2%", depth: 0.36 },
  { label: "AWS", Icon: Cloud, x: "84%", y: "22%", depth: 0.52 },
  { label: "OpenAI", Icon: BrainCircuit, x: "-2%", y: "37%", depth: 0.64 },
  { label: "Git", Icon: GitBranch, x: "86%", y: "48%", depth: 0.3 },
  { label: "Postgres", Icon: Database, x: "8%", y: "63%", depth: 0.45 },
  { label: "RAG", Icon: Network, x: "73%", y: "72%", depth: 0.72 },
  { label: "FastAPI", Icon: ServerCog, x: "24%", y: "4%", depth: 0.58 },
  { label: "LLMs", Icon: Sparkles, x: "48%", y: "82%", depth: 0.26 },
  { label: "CI/CD", Icon: Workflow, x: "93%", y: "76%", depth: 0.62 },
  { label: "Linux", Icon: Terminal, x: "34%", y: "90%", depth: 0.4 },
  { label: "Security", Icon: LockKeyhole, x: "54%", y: "1%", depth: 0.78 },
] as const;

function FloatingSkill({
  skill,
  mouseX,
  mouseY,
}: {
  skill: (typeof skills)[number];
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useTransform(mouseX, (value) => value * skill.depth * 28);
  const y = useTransform(mouseY, (value) => value * skill.depth * 20);
  const { Icon } = skill;

  return (
    <motion.button
      type="button"
      className="floating-skill"
      style={{ left: skill.x, top: skill.y, x, y }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      aria-label={`${skill.label} skill`}
    >
      <Icon aria-hidden="true" />
      <span>{skill.label}</span>
    </motion.button>
  );
}

export function FloatingSkillField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const renderedSkills = useMemo(() => skills, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = fieldRef.current?.getBoundingClientRect();
    if (!bounds) return;

    mouseX.set((event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2));
    mouseY.set((event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2));
  };

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={fieldRef}
      className="floating-skill-field"
      aria-label="Floating technology skills"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {renderedSkills.map((skill) => (
        <FloatingSkill key={skill.label} skill={skill} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}
