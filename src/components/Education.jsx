
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import "./Education.css";

const education = [
  {
    number: "01",
    level: "PROFESSIONAL COURSE",
    title: "Master JAVA Full Stack Course with AI",
    institution: "FITA Academy",
    detail: "Professional training",
    date: "October 2026",
    icon: BookOpen,
    accent: "blue",
    description:
      "Developing practical skills in full-stack development, application building, and AI-related technologies.",
    tags: ["Java", "React","SpringBoot","SQL","Hibernate", "Full Stack", "AI"],
    status: " Completed",
  },
  {
    number: "02",
    level: "BACHELOR'S DEGREE",
    title: "B.E. Electrical & Electronics Engineering",
    institution: "Loyola Institute of Technology",
    detail: "CGPA: 6.5",
    date: "2018",
    icon: GraduationCap,
    accent: "purple",
    description:
      "Built a foundation in engineering principles, analytical thinking, problem-solving, and technical learning.",
    tags: ["Engineering", "Analysis", "Problem-solving"],
    status: "Degree",
  },
  {
    number: "03",
    level: "HIGHER SECONDARY",
    title: "Higher Secondary Education",
    institution: "St. Mary's Matriculation Higher Secondary School",
    detail: "Chennai, Tamil Nadu · 70.5%",
    date: "2014",
    icon: Award,
    accent: "red",
    description:
      "Completed higher secondary education and developed the academic foundation for further technical studies.",
    tags: ["Higher Secondary", "Academics"],
    status: "Education",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section education-section"
      data-nav-section
    >
      <div className="container border-section education-container">
        <Reveal>
          <header className="heading education-heading">
            <div className="eyebrow-index">03 / EDUCATION</div>

            <h2>
              My learning <span>journey.</span>
            </h2>

            <p>
              Every step has shaped how I think, solve problems,
              and continue growing as a developer.
            </p>
          </header>
        </Reveal>

        <div className="education-intro">
          <div className="education-intro-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <strong>Always learning. Always building.</strong>
            <p>
              From engineering fundamentals to modern software
              development, my journey continues through hands-on learning.
            </p>
          </div>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number}>
                <article
                  className={`education-card education-${item.accent}`}
                  style={{ "--education-index": index }}
                >
                  <div className="education-marker">
                    <span>{item.number}</span>
                  </div>

                  <div className="education-card-inner">
                    <div className="education-card-top">
                      <div className="education-level">
                        <span className="education-icon">
                          <Icon size={19} />
                        </span>

                        <span>{item.level}</span>
                      </div>

                      <span className="education-date">
                        <CalendarDays size={15} />
                        {item.date}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p className="education-institution">
                      {item.institution}
                    </p>

                    <p className="education-description">
                      {item.description}
                    </p>

                    <div className="education-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="education-card-footer">
                      <span className="education-detail">
                        {item.detail}
                      </span>

                      <span className="education-status">
                        <span />
                        {item.status}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="education-bottom-note">
            <div className="education-bottom-icon">
              <ArrowUpRight size={20} />
            </div>

            <div>
              <strong>The next chapter is being written.</strong>
              <p>
                I'm continuing to strengthen my Java full-stack skills
                through practice and personal projects.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
