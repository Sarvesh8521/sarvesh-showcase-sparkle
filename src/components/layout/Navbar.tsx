import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background/75 backdrop-blur-sm"}`}>
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:gap-6 sm:px-8">
        <a href="#home" aria-label="Sarvesh Singh, home" className="mono shrink-0 text-sm font-semibold text-primary">SS<span className="text-foreground">.py</span></a>
        <div className="nav-scroll flex min-w-0 flex-1 items-center justify-start gap-4 sm:justify-end sm:gap-6">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} className="nav-link shrink-0">{link.label}</a>)}
        </div>
        <Button asChild variant="outline" size="icon" className="h-11 w-11 shrink-0" aria-label="Visit GitHub profile">
          <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" title="GitHub"><Github aria-hidden="true" /></a>
        </Button>
      </nav>
    </header>
  );
};
