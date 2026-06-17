import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <nav className="container-x h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-baseline gap-1 group">
          <span className="text-base font-medium tracking-tight">Sarvesh</span>
          <span className="serif text-base">Singh.</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => go("contact")} className="btn-ghost py-2 px-4 text-xs">
          Get in touch
        </button>
      </nav>
    </header>
  );
};
