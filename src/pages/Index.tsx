import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/ui/GridBackground";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const Index = () => {
  useSectionReveal();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <GridBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
