import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
      <Contact />

    </div>
  )
}

