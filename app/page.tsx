import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

export default function Home() {
  return (
  <div className="m-[1vw]">
    <Navbar/>
    <Hero/>
    <About/>
  </div>
  )
}