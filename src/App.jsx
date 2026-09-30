import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import usePortfolioTheme from "./hooks/usePortfolioTheme.js";
import useActiveNavigation from "./hooks/useActiveNavigation.js";

// This is the page order. Each section has its own file in components.
export default function App() {
  const { theme, neon, toggleTheme, toggleNeon } = usePortfolioTheme();
  useActiveNavigation();

  return (
    <>
      <Navbar theme={theme} neon={neon} onToggleTheme={toggleTheme} onToggleNeon={toggleNeon} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <a className="top" href="#home" aria-label="Back to top">
        <i className="ri-arrow-up-line" aria-hidden="true" />
      </a>
    </>
  );
}
