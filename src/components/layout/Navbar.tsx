import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background/75 backdrop-blur-sm"}`}>
      <nav aria-label="Main navigation" className="relative mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:gap-6 sm:px-8">
        <a href="#home" aria-label="Sarvesh Singh, home" className="mono shrink-0 text-sm font-semibold text-primary">SS<span className="text-foreground">.py</span></a>
        <div className="nav-scroll hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex sm:gap-6">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} className="nav-link shrink-0">{link.label}</a>)}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="ml-auto h-11 w-11 shrink-0 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        <Button asChild variant="outline" size="icon" className="h-11 w-11 shrink-0" aria-label="Visit GitHub profile">
          <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" title="GitHub"><Github aria-hidden="true" /></a>
        </Button>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-4 pb-3 shadow-lg md:hidden">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link min-h-11" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
