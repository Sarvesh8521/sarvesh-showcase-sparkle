import { useEffect, useRef } from "react";

export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Cyber grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20"
        style={{
          background: `
            linear-gradient(to top, hsl(var(--primary) / 0.1), transparent),
            repeating-linear-gradient(90deg, hsl(var(--primary) / 0.1) 0px, hsl(var(--primary) / 0.1) 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(0deg, hsl(var(--primary) / 0.1) 0px, hsl(var(--primary) / 0.1) 1px, transparent 1px, transparent 100px)
          `,
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Primary Orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full floating opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          top: "-5%",
          right: "-5%",
          filter: "blur(60px)",
        }}
      />
      
      {/* Accent Orb */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full floating-delayed opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.5) 0%, transparent 70%)",
          bottom: "20%",
          left: "-5%",
          filter: "blur(80px)",
        }}
      />
      
      {/* Cyan accent */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full floating-slow opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-blue) / 0.4) 0%, transparent 70%)",
          top: "50%",
          right: "15%",
          filter: "blur(40px)",
        }}
      />

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M0 100 L50 100 L60 90 L140 90 L150 100 L200 100 M100 0 L100 50 L90 60 L90 140 L100 150 L100 200"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="60" cy="90" r="3" fill="hsl(var(--primary))" />
            <circle cx="140" cy="90" r="3" fill="hsl(var(--primary))" />
            <circle cx="90" cy="60" r="3" fill="hsl(var(--primary))" />
            <circle cx="90" cy="140" r="3" fill="hsl(var(--primary))" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = Math.floor(window.innerWidth / 20);
    
    const createDrop = () => {
      const drop = document.createElement("div");
      drop.className = "matrix-char absolute text-xs";
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDuration = `${3 + Math.random() * 5}s`;
      drop.textContent = chars[Math.floor(Math.random() * chars.length)];
      drop.style.opacity = `${0.1 + Math.random() * 0.3}`;
      drop.style.animation = `matrix-rain ${3 + Math.random() * 5}s linear forwards`;
      container.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, 8000);
    };

    const interval = setInterval(createDrop, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30"
    />
  );
};
