import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const wordStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const wordItem: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 1, ease: [0.7, 0.05, 0.2, 1] as any } },
};

export const Hero = () => {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pb-16 md:pb-24 pt-28">
      <div className="container-x w-full">
        <motion.div
          variants={reduce ? undefined : wordStagger}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="space-y-2"
        >
          <div className="overflow-hidden">
            <motion.p variants={wordItem} className="eyebrow">
              Portfolio · v3.0 — 2026
            </motion.p>
          </div>

          <h1 className="font-medium leading-[0.95] tracking-[-0.04em] text-[14vw] md:text-[10vw] lg:text-[9rem]">
            <span className="block overflow-hidden">
              <motion.span variants={wordItem} className="block">Sarvesh</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={wordItem} className="serif block font-normal">
                Singh.
              </motion.span>
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 pt-10 md:pt-16">
            <div className="md:col-span-7 overflow-hidden">
              <motion.p variants={wordItem} className="text-xl md:text-2xl leading-snug max-w-2xl text-foreground/85">
                Python backend developer, building scalable APIs, AI systems and quiet, dependable software — <span className="serif">through detail, structure and care.</span>
              </motion.p>
            </div>
            <div className="md:col-span-5 md:text-right flex md:justify-end items-end">
              <motion.a
                variants={wordItem}
                href="#work"
                onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-ghost group"
              >
                Selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
