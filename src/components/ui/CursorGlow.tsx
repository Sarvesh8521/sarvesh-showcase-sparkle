import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    // Card hover spotlight (updates CSS vars on .card-surface elements)
    const onCardMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".card-surface");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onCardMove);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousemove", onCardMove);
    };
  }, []);

  return (
    <>
      {/* Big soft glow follows cursor */}
      <div
        className="pointer-events-none fixed z-[60] transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.06) 30%, transparent 70%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Crisp dot */}
      <div
        className="pointer-events-none fixed z-[61] rounded-full transition-opacity duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          width: 10,
          height: 10,
          background: "hsl(var(--primary))",
          boxShadow:
            "0 0 12px hsl(var(--primary)), 0 0 32px hsl(var(--primary) / 0.6)",
        }}
      />
    </>
  );
};
