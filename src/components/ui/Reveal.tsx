import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p" | "h1" | "h2" | "h3" | "section";
};

export const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }: Props) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as any;
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.7, 0.05, 0.2, 1] as any, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};
