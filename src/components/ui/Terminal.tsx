import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const Terminal = ({ children, title = "terminal", className }: TerminalProps) => {
  return (
    <div className={cn("terminal rounded-lg overflow-hidden neon-border", className)}>
      {/* Terminal Header */}
      <div className="terminal-header px-4 py-2 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

interface CodeLineProps {
  prompt?: string;
  command?: string;
  output?: string;
  className?: string;
}

export const CodeLine = ({ prompt = "$", command, output, className }: CodeLineProps) => {
  return (
    <div className={cn("mb-1", className)}>
      {command && (
        <div className="flex items-center gap-2">
          <span className="text-primary">{prompt}</span>
          <span className="text-foreground">{command}</span>
          <span className="animate-blink text-primary">▌</span>
        </div>
      )}
      {output && (
        <div className="text-muted-foreground pl-4">{output}</div>
      )}
    </div>
  );
};
