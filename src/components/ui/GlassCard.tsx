import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        hover && "hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_40px_hsl(173_80%_50%/0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
};
