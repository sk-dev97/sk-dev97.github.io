
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { profile } from "../data/profile.js";
import TypingText from "./TypingText.jsx";
import "./Hero.css";

export default function Hero() {
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

  // Download all 4 resumes
  const downloadAllResumes = () => {
    const resumes = [
      {
        url: "/Resumes/Suresh_Resume_FullStack.pdf",
        name: "Suresh_Resume_FullStack.pdf",
      },
      {
        url: "/Resumes/Suresh_Resume_Java_Backend_Dev.pdf",
        name: "Suresh_Resume_Java_Backend_Dev.pdf",
      },
      {
        url: "/Resumes/Suresh_Resume_React_Frontend_Dev.pdf",
        name: "Suresh_Resume_React_Frontend_Dev.pdf",
      },
      {
        url: "/Resumes/Suresh_Resume_Junior_Web_Dev.pdf",
        name: "Suresh_Resume_Junior_Web_Dev.pdf",
      },
    ];

    resumes.forEach((resume, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = resume.url;
        link.download = resume.name;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 1000);
    });

    setResumeMenuOpen(false);
  };

  return (
    <section id="home" className="container hero" data-nav-section>
      <div className="social" aria-label="Social and contact links">
        <a
          href="https://www.linkedin.com/in/sureshkumar1911/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="ri-linkedin-fill" />
        </a>

        <a
          href="https://github.com/sk-dev97"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="ri-github-fill" />
        </a>

        <a href={`mailto:${profile.email}`} aria-label="Email Suresh">
          <i className="ri-mail-line" />
        </a>

        <a
          href="https://wa.me/918838410097"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <i className="ri-whatsapp-line" />
        </a>
      </div>

      <div className="hero-copy">
        <div className="hello">
          Open to entry-level opportunities
        </div>

        <h1>{profile.name}</h1>

        <TypingText />

        <p>
          Building practical web applications with Java, Spring Boot and React.
          Curious by nature, committed to learning and ready for my first
          developer role.
        </p>

        <div className="hero-buttons">
          <a className="button" href="#projects">
            Explore my projects <ArrowUpRight size={19} />
          </a>

          <div className="resume-dropdown">
            <button
              className="button resume-button"
              onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
              aria-expanded={resumeMenuOpen}
            >
              Download resume
              <ChevronDown size={18} />
            </button>

            {resumeMenuOpen && (
              <div className="resume-menu">
                <a
                  href="/Resumes/Suresh_Resume_FullStack.pdf"
                  download="Suresh_Resume_FullStack.pdf"
                >
                  Java Full Stack Developer
                </a>

                <a
                  href="/Resumes/Suresh_Resume_Java_Backend_Dev.pdf"
                  download="Suresh_Resume_Java_Backend_Dev.pdf"
                >
                  Java Backend Developer
                </a>

                <a
                  href="/Resumes/Suresh_Resume_React_Frontend_Dev.pdf"
                  download="Suresh_Resume_React_Frontend_Dev.pdf"
                >
                  React Frontend Developer
                </a>

                <a
                  href="/Resumes/Suresh_Resume_Junior_Web_Dev.pdf"
                  download="Suresh_Resume_Junior_Web_Dev.pdf"
                >
                  Junior Web Developer
                </a>

                <div className="resume-divider" />

                <button onClick={downloadAllResumes}>
                  Download All 4 Resumes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cartoon developer animation */}
      
{/* Full-screen animated background */}
<div className="hero-visual">
  <video
    className="hero-animation"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    aria-hidden="true"
  >
    <source
      src="/developer-animation.mp4"
      type="video/mp4"
    />
  </video>
</div>


      <a className="scroll" href="#about">
        <i className="ri-mouse-line" />
        <span>Scroll down</span>
        <i className="ri-arrow-down-line" />
      </a>
    </section>
  );
}
