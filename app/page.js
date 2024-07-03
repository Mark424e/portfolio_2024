import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Resume } from "./_components/resume";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="skills">
        <Hero />
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
