import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

export const metadata = {
  title: "John Doe - Developer",
  description: "woriah",
}

export default function Home() {
  return (
    <div className="m-2 flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
