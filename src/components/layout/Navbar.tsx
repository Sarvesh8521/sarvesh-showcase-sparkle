import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Professional" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center gap-8">
        {links.map((l) => (
          <button key={l.id} onClick={() => go(l.id)} className="nav-link">
            {l.label}
          </button>
        ))}
        <a href="/resume" className="nav-link" onClick={(e) => { e.preventDefault(); go("resume"); }}>
          Resume
        </a>
      </nav>
    </header>
  );
};
