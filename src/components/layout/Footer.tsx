import { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" });
      setTime(`${t} IST`);
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <footer className="hairline mt-32">
      <div className="container-x py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Sarvesh Singh. Crafted with care.</span>
        <span className="mono">{time} — Pune, India</span>
      </div>
    </footer>
  );
};
