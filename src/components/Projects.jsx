
import { Github, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "VegKart",
    subtitle: "Full-stack fruit and vegetable e-commerce application",
    label: "FULL STACK · E-COMMERCE",
    description:
      "Inspired by my mother's fruit and vegetable shop, VegKart is a full-stack application I'm building to bring a local shopping experience online. I'm integrating a React frontend with Spring Boot REST APIs and MySQL to manage products, customer accounts, and shopping cart functionality.",
    technologies: ["React", "Java", "Spring Boot", "Hibernate", "MySQL"],
    status: "In development",
    symbol: "V",
    products: ["🥦", "🥕", "🍎"],
    accent: "green",
    github: null,
    live: "https://sk-dev97.github.io/multitool-website/" ,
  },
  {
    number: "02",
    name: "Multi-Tool Dashboard",
    subtitle: "A collection of useful tools in one responsive interface",
    label: "FRONTEND · WEB APPLICATION",
    description:
      "I built this interactive dashboard to bring everyday calculation tools together in one convenient place. It includes a calculator, unit converter, loan EMI calculator, and interest calculator. The project helped me practise React components, JavaScript logic, state management, and responsive user interface design.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Vite" ],
    status: "Live project",
    symbol: "M",
    products: ["＋", "⇄", "％"],
    accent: "blue",
    github: "https://github.com/sk-dev97/multitool-website",
    live: "https://sk-dev97.github.io/multitool-website/",
  },
  {
    number: "03",
    name: "Developer Portfolio",
    subtitle: "My personal portfolio and developer journey",
    label: "FRONTEND · PERSONAL WEBSITE",
    description:
      "I created this portfolio to introduce myself as an aspiring Java Full Stack Developer and showcase my skills, learning journey, and projects. Built with React and Vite, it features dedicated sections for my background, technical skills, and projects, along with a custom visual design and theme options.",
    technologies: ["React","JavaScript", "Vite", "HTML", "CSS"],
    status: "Live project",
    symbol: "</>",
    products: ["{ }", "UI", "JS"],
    accent: "purple",
    github: "https://github.com/sk-dev97/sk-dev97.github.io",
    live: "https://sk-dev97.github.io/",
  },
];

function ProjectCard({ project }) {
  return (
    <Reveal>
      <article className={`about-project project-featured accent-${project.accent}`}>
        <div className="about-project-content">
          <span className="about-label">{project.label}</span>

          <div className="about-project-brand">
            <span className="about-project-symbol">
              {project.symbol}
            </span>
            <h3>{project.name}</h3>
          </div>

          <p className="about-project-subtitle">
            {project.subtitle}
          </p>

          <p className="project-description">
            {project.description}
          </p>

          <div className="about-project-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <span className="about-project-status">
            <span className="about-availability-dot" />
            {project.status}
          </span>

          {(project.github || project.live) && (
            <div className="project-featured-links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

        <div
          className="about-project-visual"
          aria-hidden="true"
        >
          <div className="about-project-orbit orbit-one" />
          <div className="about-project-orbit orbit-two" />

          <div className="about-project-window">
            <div className="about-window-top">
              <span />
              <span />
              <span />
            </div>

            <div className="about-window-content">
              <span className="about-window-leaf">
                {project.symbol}
              </span>

              <strong>{project.name}</strong>
              <span>{project.subtitle}</span>

              <div className="about-window-products">
                {project.products.map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>

              <div className="about-window-line" />
              <div className="about-window-line short" />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <main className="projects-page"  id="projects" > 
      <section className="projects-section">
        <Reveal>
          <div className="projects-heading">
            <span className="about-label">MY WORK</span>
            <h1>
              Projects I've <span>Built</span>
            </h1>
            <p>
              A selection of projects where I turn ideas into
              practical applications while growing my development skills.
            </p>
          </div>
        </Reveal>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
