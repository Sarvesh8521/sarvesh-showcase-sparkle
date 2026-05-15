import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let opacity = 0;
    let targetOpacity = 0;
    let raf = 0;

    const tick = () => {
      // Smooth easing toward cursor
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      opacity += (targetOpacity - opacity) * 0.1;

      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        el.style.opacity = String(opacity);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetOpacity = 1;

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".card-surface");
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        target.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
    };
    const leave = () => { targetOpacity = 0; };
    const enter = () => { targetOpacity = 1; };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] will-change-transform"
      style={{
        width: 600,
        height: 600,
        opacity: 0,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.08) 28%, transparent 65%)",
        filter: "blur(50px)",
        mixBlendMode: "screen",
      }}
    />
  );
};
