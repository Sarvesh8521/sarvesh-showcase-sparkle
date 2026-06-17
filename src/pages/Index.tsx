import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const Index = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <CursorGlow />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
