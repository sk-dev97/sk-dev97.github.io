import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.js";
import "./About.css";

const journey = [
  {
    number: "01",
    period: "2018",
    title: "Engineering Graduate",
    description:
      "Completed my B.E. in Electrical and Electronics Engineering. My professional journey began in a different field, but my interest in coding stayed with me.",
    icon: "graduation",
  },
  {
    number: "02",
    period: "After graduation",
    title: "Manufacturing Experience",
    description:
      "Worked in the manufacturing sector and gained professional experience. Due to personal circumstances, I couldn't pursue software development earlier.",
    icon: "work",
  },
  {
    number: "03",
    period: "My learning journey",
    title: "From Interest to Action",
    description:
      "I decided to pursue my interest in programming, learning Java and JavaScript from the fundamentals and expanding into React, Spring Boot, and MySQL.",
    icon: "code",
  },
  {
    number: "04",
    period: "Present",
    title: "Building My Future",
    description:
      "Developing practical projects like VegKart, improving my technical skills, and looking for an opportunity to begin my career as a Junior Java Developer.",
    icon: "rocket",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "MySQL",
  "HTML",
  "CSS",
  "REST APIs",
];

const JourneyIcon = ({ type }) => {
  const common = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "graduation":
      return (
        <svg {...common}>
          <path d="m2 10 10-5 10 5-10 5-10-5Z" />
          <path d="M6 12v5c4 3 8 3 12 0v-5" />
          <path d="M22 10v6" />
        </svg>
      );

    case "work":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18M10 12v2h4v-2" />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M5 16 3 21l6-2" />
          <path d="M7 14a7 7 0 1 1 4 5" />
          <path d="m10 11 2 2 4-4" />
        </svg>
      );
  }
};

export default function About() {
  return (
    <section id="about" className="section" data-nav-section>
      <div className="container border-section about-page">

        {/* Introduction */}
        <Reveal>
          <div className="heading">
            <div className="eyebrow-index">01 / ABOUT ME</div>
            <h2>
              My journey, <span>my story.</span>
            </h2>
            <p>
              Every journey has a beginning. Mine led me from engineering
              to discovering my passion for software development.
            </p>
          </div>
        </Reveal>

        {/* Personal story */}
        <Reveal className="about-story-grid">
          <div className="about-story-photo">
            <div className="about-photo-glow" />
            <div className="about-photo-frame">
              <img
                className="about-portrait"
                src="/S.jpg.png"
                alt="Suresh Kumar"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                  console.error("Profile image failed to load:", e.currentTarget.src);
                }}
              />
            </div>

            <div className="about-photo-caption">
              <span className="about-caption-dot" />
              <div>
                <strong>Suresh Kumar</strong>
                <span>Aspiring Java Full Stack Developer</span>
              </div>
            </div>
          </div>

          <div className="about-story-copy">
            <span className="about-label">A LITTLE ABOUT ME</span>

            <h3>
              Hello, I'm Suresh.
              <br />
              <span>I'm building my next chapter.</span>
            </h3>

            <p>
              I graduated with a B.E. in Electrical and Electronics
              Engineering in 2018. After graduation, I worked in the
              manufacturing sector. Although my career started in a
              different field, my interest in coding and software
              development never faded.
            </p>

            <p>
              Due to personal circumstances, I couldn't pursue that
              interest earlier. Eventually, I decided to take that step
              and start learning programming. I began with Java and
              JavaScript from the fundamentals and gradually expanded
              my skills into React, Spring Boot, and MySQL.
            </p>

            <p>
              Rather than limiting myself to theory, I started building
              practical projects to understand how applications work
              in the real world. My main project, VegKart, is a
              full-stack e-commerce application for vegetables and
              fruits that I'm developing with React, Spring Boot,
              and MySQL.
            </p>

            <p>
              I'm still learning, improving, and challenging myself.
              Today, I'm looking for an entry-level opportunity where
              I can contribute to real projects, learn from experienced
              developers, and grow into a skilled software professional.
            </p>

            <div className="about-facts">
              <div className="about-fact">
                <span className="about-fact-icon">⌖</span>
                <div>
                  <span>LOCATION</span>
                  <strong>{profile.homeLocation}</strong>
                </div>
              </div>

              <div className="about-fact">
                <span className="about-fact-icon">↗</span>
                <div>
                  <span>CAREER GOAL</span>
                  <strong>Junior Java Developer</strong>
                </div>
              </div>
            </div>

            <div className="about-availability">
              <span className="about-availability-dot" />
              {profile.availability}
            </div>
          </div>
        </Reveal>

        {/* Career timeline */}
        <Reveal>
          <div className="about-subheading">
            <span className="about-label">THE ROAD SO FAR</span>
            <h3>
              From <span>engineering</span> to code.
            </h3>
            <p>
              Different experiences, one continuing goal: building a
              career in software development.
            </p>
          </div>
        </Reveal>

        <div className="about-timeline">
          {journey.map((item, index) => (
            <Reveal key={item.number} className="about-timeline-item">
              <div className="about-timeline-top">
                <div className="about-timeline-icon">
                  <JourneyIcon type={item.icon} />
                </div>
                <span className="about-timeline-number">
                  {item.number}
                </span>
              </div>

              <span className="about-timeline-period">
                {item.period}
              </span>

              <h4>{item.title}</h4>
              <p>{item.description}</p>

              {index < journey.length - 1 && (
                <span className="about-timeline-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>


        {/* Closing message */}
        <Reveal>
          <div className="about-closing">
            <span className="about-closing-mark">“</span>

            <blockquote>
              I'm not defined by where my journey started, but by the
              effort I'm putting into where I want to go.
            </blockquote>

            <span className="about-closing-author">
              — Suresh Kumar
            </span>

            <div className="about-closing-footer">
              <span>Curious to learn.</span>
              <span>Ready to contribute.</span>
              <span>Always growing.</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
