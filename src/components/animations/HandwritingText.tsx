import { useId } from "react";

type HandwritingTextProps = {
  text: string;
  className?: string;
};

export function HandwritingText({ text, className = "" }: HandwritingTextProps) {
  const clipId = useId().replace(/:/g, "");
  const penPathId = `handwriting-pen-${clipId}`;

  return (
    <div className={`handwriting-wrap ${className}`} aria-label={text} role="img">
      <svg
        className="handwriting-svg"
        viewBox="0 0 760 120"
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
      >
        <defs>
          <path id={penPathId} d="M18 76 C170 30 320 102 472 60 S655 38 740 68" />
        </defs>
        <text className="handwriting-text" x="12" y="82">
          {text}
        </text>
        <path className="handwriting-guide" d="M18 76 C170 30 320 102 472 60 S655 38 740 68" />
        <g className="handwriting-pen">
          <path d="M0 7 34 0 25 32Z" />
          <path d="m24 31 9 9" />
          <circle cx="0" cy="7" r="2.5" />
          <animateMotion dur="2.6s" repeatCount="1" rotate="auto" path="M18 76 C170 30 320 102 472 60 S655 38 740 68" />
        </g>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
