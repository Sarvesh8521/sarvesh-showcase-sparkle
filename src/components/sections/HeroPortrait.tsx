import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { BrainCircuit, Boxes, Cloud, FileCode2, GitBranch } from "lucide-react";
import smilePortrait from "@/assets/sarvesh-smile.jpg";
import playfulPortrait from "@/assets/sarvesh-playful.jpg";

const skillMarks = [
  { label: "Python", Icon: FileCode2, depth: 0.75, position: "skill-python" },
  { label: "Docker", Icon: Boxes, depth: 1.15, position: "skill-docker" },
  { label: "AWS", Icon: Cloud, depth: 0.9, position: "skill-aws" },
  { label: "OpenAI", Icon: BrainCircuit, depth: 1.25, position: "skill-openai" },
  { label: "Git", Icon: GitBranch, depth: 0.65, position: "skill-git" },
];

type SkillFloatProps = {
  label: string;
  Icon: typeof FileCode2;
  depth: number;
  position: string;
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
};

const SkillFloat = ({ label, Icon, depth, position, x, y }: SkillFloatProps) => {
  const springX = useSpring(x, { stiffness: 70, damping: 22 });
  const springY = useSpring(y, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      className={`hero-skill-float ${position}`}
      style={{ x: springX, y: springY }}
      data-depth={depth}
      whileHover={{ scale: 1.12, opacity: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      aria-label={label}
    >
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </motion.div>
  );
};

type HeroPortraitProps = { imageUrl: string | null };

export const HeroPortrait = ({ imageUrl }: HeroPortraitProps) => {
  const [expression, setExpression] = useState(0);
  const resetTimer = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, []);

  const portraits = [
    { src: imageUrl ?? smilePortrait, alt: "Sarvesh Singh" },
    { src: playfulPortrait, alt: "Sarvesh Singh with a playful expression" },
    { src: smilePortrait, alt: "Sarvesh Singh smiling" },
  ];
  const currentPortrait = portraits[expression] ?? portraits[0];

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const depth = (value: number) => Math.max(-1, Math.min(1, value));
    pointerX.set(depth((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * 18);
    pointerY.set(depth((event.clientY - bounds.top - bounds.height / 2) / bounds.height) * 14);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="hero-portrait-scene" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="terminal-window hero-portrait-window">
        <div className="terminal-window-bar"><span /><span /><span /><span className="mono ml-auto text-xs text-muted-foreground">sarvesh.jpg</span></div>
        <div className="hero-portrait-frame">
          <motion.img
            src={currentPortrait.src}
            alt={currentPortrait.alt}
            loading="lazy"
            className="hero-portrait-image"
            drag={reduceMotion ? false : true}
            dragConstraints={{ left: -36, right: 36, top: -24, bottom: 24 }}
            dragElastic={0.78}
            dragMomentum={!reduceMotion}
            whileDrag={reduceMotion ? undefined : { scale: 1.035, rotate: 1 }}
            onDragStart={() => {
              if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
              setExpression(1);
            }}
            onDragEnd={() => {
              setExpression(2);
              resetTimer.current = window.setTimeout(() => setExpression(0), 850);
            }}
          />
          <span className="hero-portrait-hint mono">POKE &amp; PULL MY FACE</span>
        </div>
      </div>
      {skillMarks.map(({ label, Icon, depth, position }) => (
        <SkillFloat key={label} label={label} Icon={Icon} depth={depth} position={position} x={pointerX} y={pointerY} />
      ))}
    </div>
  );
};