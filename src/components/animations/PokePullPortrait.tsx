import { motion } from "framer-motion";
import { useState } from "react";

type PortraitExpression = {
  name: string;
  src: string;
};

type PokePullPortraitProps = {
  defaultSrc: string;
  alt: string;
};

export const PokePullPortrait = ({ defaultSrc, alt }: PokePullPortraitProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [expressionIndex, setExpressionIndex] = useState(0);

  const expressions: PortraitExpression[] = [
    { name: "normal", src: defaultSrc },
    { name: "surprised", src: defaultSrc },
    { name: "happy", src: defaultSrc },
    { name: "confused", src: defaultSrc },
  ];

  const handleDragStart = () => {
    setIsDragging(true);
    setExpressionIndex((current) => (current % (expressions.length - 1)) + 1);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setExpressionIndex(0);
  };

  const expression = expressions[expressionIndex];

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.7}
        dragMomentum={false}
        whileTap={{ scale: 1.04, cursor: "grabbing" }}
        animate={{ rotate: isDragging ? -2 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="cursor-grab touch-none rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        role="button"
        tabIndex={0}
        aria-label="Drag portrait to poke and pull"
      >
        <img
          src={expression.src}
          alt={`${alt} (${expression.name} expression)`}
          loading="lazy"
          className="h-52 w-full select-none object-cover"
          draggable={false}
        />
      </motion.div>
      <span className="mono text-[10px] tracking-[0.18em] text-muted-foreground">
        {isDragging ? "LET GO..." : "POKE & PULL MY FACE"}
      </span>
    </div>
  );
};
