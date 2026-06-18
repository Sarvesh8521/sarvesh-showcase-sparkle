import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPos({ x: tx, y: ty });
          raf = 0;
        });
      }
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const onCardMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".card-surface");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousemove", onCardMove);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousemove", onCardMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.22) 0%, hsl(var(--primary) / 0.08) 25%, transparent 65%)",
        filter: "blur(50px)",
        mixBlendMode: "screen",
      }}
    />
  );
};
