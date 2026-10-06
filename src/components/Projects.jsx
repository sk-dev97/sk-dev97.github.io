import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/projects.js";

// The buttons filter my projects by type.
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = projects.filter((project) => {
    return filter === "All" || project.category === filter;
  });

  return (
    <section id="projects" className="section" data-nav-section>
      <div className="container border-section">
        <Reveal>
        <div className="heading">
          <div className="eyebrow-index">04 / Selected work</div>
          <h2>Things I’ve built</h2>
          <p>Hands-on projects that help turn concepts into working software.</p>
        </div>
        </Reveal>

        <div className="project-filters" role="group" aria-label="Filter projects">
          <button type="button" className={filter === "All" ? "selected" : ""} onClick={() => setFilter("All")} aria-pressed={filter === "All"}>All projects</button>
          <button type="button" className={filter === "Full stack" ? "selected" : ""} onClick={() => setFilter("Full stack")} aria-pressed={filter === "Full stack"}>Full stack</button>
          <button type="button" className={filter === "Frontend" ? "selected" : ""} onClick={() => setFilter("Frontend")} aria-pressed={filter === "Frontend"}>Frontend</button>
        </div>

        <Reveal className="project-cards project-cards-personal">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-art">
                <img className="project-visual-image" src={project.image} alt={project.imageAlt} />
                <small>PROJECT_{project.number}</small>
              </div>
              <div className="project-card-body">
                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tool-tags">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                
       <div className="project-links">
  <a
    className="project-view"
    href={project.live}
    target="_blank"
    rel="noreferrer"
  >
    Live Demo <ExternalLink size={15} aria-hidden="true" />
  </a>

  <a
    className="project-view"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub <ExternalLink size={15} aria-hidden="true" />
  </a>
</div>

              </div>
            </article>
          ))}
        </Reveal>

        <Reveal>
        <div className="promo">
          <div>
            <h3>Open to entry-level opportunities</h3>
            <p>I’m looking for a chance to learn, contribute, and grow with a development team.</p>
          </div>
          <a className="button" href="#contact">
            Contact me <i className="ri-send-plane-line" />
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
