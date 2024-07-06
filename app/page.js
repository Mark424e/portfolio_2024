import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Resume } from "./_components/resume";
import { Skills } from "./_components/skills";
import { Ibuild } from "./_components/ibuild";

export default function Home() {
  return (
    <main>
      <Header id="home"/>
      <section id="hero">
        <Hero />
      </section>
      <section id="skills" className="bg-fixed">
        <Skills />
      </section>
      <section>
        <Ibuild />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <footer id="contact">
        <Footer />
      </footer>
    </main>
  );
}
