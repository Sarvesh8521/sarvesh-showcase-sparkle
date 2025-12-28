import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  neon?: boolean;
  style?: CSSProperties;
}

export const GlassCard = ({ children, className, hover = true, neon = false, style }: GlassCardProps) => {
  return (
    <div
      style={style}
      className={cn(
        "glass rounded-lg p-6 transition-all duration-500 relative overflow-hidden",
        hover && "hover:scale-[1.02] hover:border-primary/40",
        neon && "neon-border",
        className
      )}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50" />
      
      {children}
    </div>
  );
};

export const TechTag = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded",
        "hover:bg-primary/20 hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      {children}
    </span>
  );
};
