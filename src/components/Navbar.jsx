import { useEffect, useState } from "react";
import { Moon, Sparkles, Sun } from "lucide-react";
import { profile } from "../data/profile.js";

// Links to the page sections and buttons for the two color themes.
export default function Navbar({ theme, neon, onToggleTheme, onToggleNeon }) {
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    function updateCompactNav() {
      setCompactNav(window.matchMedia("(max-width: 760px)").matches && window.scrollY > 80);
    }

    updateCompactNav();
    window.addEventListener("scroll", updateCompactNav, { passive: true });
    window.addEventListener("resize", updateCompactNav);

    return () => {
      window.removeEventListener("scroll", updateCompactNav);
      window.removeEventListener("resize", updateCompactNav);
    };
  }, []);

  return (
    <header className="header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="logo" href="#home">
          <span>&lt;</span> {profile.brand} <span>/&gt;</span>
        </a>

        <div className={`nav-items${compactNav ? " is-compact" : ""}`}>
          <a className="nav-link active" href="#home" aria-label="Home" title="Home"><i className="ri-home-5-line" /><span className="nav-label">Home</span></a>
          <a className="nav-link" href="#about" aria-label="About" title="About"><i className="ri-user-3-line" /><span className="nav-label">About</span></a>
          <a className="nav-link" href="#skills" aria-label="Skills" title="Skills"><i className="ri-code-s-slash-line" /><span className="nav-label">Skills</span></a>
          <a className="nav-link" href="#education" aria-label="Education" title="Education"><i className="ri-graduation-cap-line" /><span className="nav-label">Education</span></a>
          <a className="nav-link" href="#projects" aria-label="Projects" title="Projects"><i className="ri-image-line" /><span className="nav-label">Projects</span></a>
          <a className="nav-link" href="#contact" aria-label="Contact" title="Contact"><i className="ri-chat-3-line" /><span className="nav-label">Contact</span></a>

          <button
            className="theme"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark theme"
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="neon-toggle"
            type="button"
            onClick={onToggleNeon}
            aria-label="Toggle neon galaxy theme"
            aria-pressed={neon}
          >
            <Sparkles size={18} />
            <span>{neon ? "Neon on" : "Neon"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
