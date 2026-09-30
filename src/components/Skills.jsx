import { coreFoundations, learningSkills, skillGroups } from "../data/skills.js";
import Reveal from "./Reveal.jsx";

// Shows the tools I know and the ones I am still learning.
export default function Skills() {
  return (
    <section id="skills" className="section" data-nav-section>
      <div className="container border-section">
        <Reveal>
        <div className="heading">
          <div className="eyebrow-index">02 / Tech stack</div>
          <h2>Tools of the trade</h2>
          <p>Technologies I use and technologies I’m actively developing.</p>
        </div>
        </Reveal>

        <div className="skill-cards">
          {skillGroups.map((group) => (
            <Reveal key={group.title} delay={skillGroups.indexOf(group) * 100}>
            <article className="skill-card">
              <h3>{group.title}</h3>
              <p className="skill-group-note">{group.description}</p>
              <ul className="skill-icons">
                {group.skills.map((skill) => (
                  <li title={skill.name} key={skill.name}>
                    {skill.image ? (
                      <img
                        className={skill.name === "IntelliJ IDEA" ? "skill-logo-img intellij-logo" : "skill-logo-img"}
                        src={skill.image}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : (
                      <i className={skill.icon} aria-hidden="true" />
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
        {/* <div className="skill-notes">
          <p><strong>Core foundations:</strong> {coreFoundations.join(" · ")}</p>
          <p><strong>Currently learning and practicing:</strong> {learningSkills.join(" · ")}</p>
        </div> */}
        </Reveal>
      </div>
    </section>
  );
}
