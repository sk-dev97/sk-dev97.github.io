import { ArrowUpRight } from "lucide-react";
import profileImage from "../assets/profile-placeholder.svg";
import { profile } from "../data/profile.js";
import TypingText from "./TypingText.jsx";

// My intro, contact links, and a photo spot I can replace later.
export default function Hero() {
  return (
    <section id="home" className="container hero" data-nav-section>
      <div className="social" aria-label="Social and contact links">
        <a href="https://www.linkedin.com/in/suresh-kumar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="ri-linkedin-fill" />
        </a>
        <a href="https://github.com/sureshkumar-java97" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="ri-github-fill" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email Suresh">
          <i className="ri-mail-line" />
        </a>
        <a href="https://wa.me/918838410097" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <i className="ri-whatsapp-line" />
        </a>
      </div>

      <div className="hero-copy">
        <div className="hello">Open to entry-level opportunities</div>
        <h1>{profile.name}</h1>
        <TypingText />
        <p>
          Building practical web applications with Java, Spring Boot and React.
          Curious by nature, committed to learning and ready for my first developer role.
        </p>

        <div className="hero-buttons">
          <a className="button" href="#projects">
            Explore my projects <ArrowUpRight size={19} />
          </a>
          <a className="button resume-button" href="/Suresh-Kumar-Resume.pdf" download>
            Download resume
          </a>
        </div>

      </div>

      <div className="hero-visual">
        <div className="portrait-bg" />
        {/* Replace this placeholder image with my own photo when it's ready. */}
        <img className="portrait" src={profileImage} alt="Developer portrait placeholder" />
      </div>

      <a className="scroll" href="#about">
        <i className="ri-mouse-line" />
        <span>Scroll down</span>
        <i className="ri-arrow-down-line" />
      </a>
    </section>
  );
}
