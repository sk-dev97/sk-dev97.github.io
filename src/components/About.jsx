import aboutImage from "../assets/about-workspace.svg";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.js";

// A little about me, with my workspace image beside the details.
export default function About() {
  return (
    <section id="about" className="section" data-nav-section>
      <div className="container border-section">
        <Reveal>
        <div className="heading">
          <div className="eyebrow-index">01 / About me</div>
          <h2>From curiosity to code</h2>
          <p>A little about my background and goals</p>
        </div>
        </Reveal>

        <Reveal className="about-grid">
          <div className="about-art">
            <img className="about-portrait" src={aboutImage} alt="Illustration of a developer workspace with a laptop" />
          </div>
          <div className="about-copy">
            <p>
              I’m an aspiring {profile.role} based in Chennai, with a {profile.education}.
              I’m building practical experience in Java, Spring Boot, React, and
              database-driven web applications.
            </p>
            <p>
              I enjoy turning ideas into functional applications and am looking for an
              entry-level opportunity to learn, contribute, and grow with a development team.
            </p>

            <div className="about-facts">
              {/* <div>
                <span>EDUCATION</span>
                <strong>{profile.education}</strong>
                <small>{profile.educationYear}</small>
              </div> */}
              <div>
                <span>LOCATION</span>
                <strong>{profile.homeLocation}</strong>
              </div>
              <div>
                <span>CURRENT STATUS</span>
                <strong className="status-open">{profile.availability}</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
