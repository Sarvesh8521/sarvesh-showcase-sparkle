import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/ui/GridBackground";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <GridBackground />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
