export const HandwrittenRole = () => (
  <div className="handwritten-role mt-5" aria-label="Python Backend Developer">
    <svg
      className="handwritten-role-svg"
      viewBox="0 0 500 76"
      role="img"
      aria-label="Python Backend Developer, drawn with a quill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text className="handwritten-role-text" x="4" y="47">Python Backend Developer</text>
      <path id="quill-track" d="M 8 61 C 96 58, 122 63, 202 60 S 332 57, 470 60" />
      <g className="quill-pen" transform="translate(-8 -17) rotate(-38 12 12)" aria-hidden="true">
        <path d="M5 19 18 6l2 7L8 23z" fill="hsl(var(--primary))" />
        <path d="m18 6 3-3 2 8-3 2z" fill="hsl(var(--foreground))" />
        <path d="m5 19-2 7 5-3" fill="hsl(var(--primary))" />
        <path d="m9 19 8-8" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="1" />
        <animateMotion dur="2.9s" begin="0s" fill="freeze" rotate="auto">
          <mpath href="#quill-track" />
        </animateMotion>
      </g>
    </svg>
  </div>
);