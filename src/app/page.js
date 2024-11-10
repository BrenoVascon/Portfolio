import About from "@/components/About/About";
import Experience from "@/components/Experiences/Experiences";
import Navbar from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
