import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { ApiSection } from "./components/ApiSection";

export default function Home() {
  return (
    <div className="m-2 flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ApiSection />
      <Footer />
    </div>
  );
}
