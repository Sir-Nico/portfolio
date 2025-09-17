import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";


export default function Home() {
  return (
  <div className="m-2 bg-blue-600">
    <Navbar />
    <Hero /> 
    <About />
  </div>
  )
}