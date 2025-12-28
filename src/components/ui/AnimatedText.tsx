import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export const AnimatedText = ({ texts, className }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={cn("font-mono", className)}>
      <span className="text-muted-foreground">{">"}</span>{" "}
      <span className="gradient-text">{displayText}</span>
      <span className="animate-blink text-primary font-bold">_</span>
    </span>
  );
};

export const GlitchText = ({ children, className }: { children: string; className?: string }) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute top-0 left-0 -z-10 text-[hsl(var(--cyber-pink))] opacity-70"
        style={{ clipPath: "inset(0 0 50% 0)", transform: "translate(-2px, -1px)" }}
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 -z-10 text-[hsl(var(--cyber-blue))] opacity-70"
        style={{ clipPath: "inset(50% 0 0 0)", transform: "translate(2px, 1px)" }}
      >
        {children}
      </span>
    </span>
  );
};
