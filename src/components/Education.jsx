import Reveal from "./Reveal.jsx";

// My education timeline, with the date and result easy to spot on each card.
export default function Education() {
  const education = [
    {
      number: "01",
      level: "PROFESSIONAL COURSE",
      title: "Master Full Stack Course with AI",
      institution: "FITA Academy",
      detail: "Completed",
      date: "October 2026",
    },
    {
      number: "02",
      level: "BACHELOR'S DEGREE",
      title: "B.E. Electrical & Electronics Engineering",
      institution: "Loyola Institute of Technology",
      detail: "CGPA: 6.5",
      date: "2018",
    },
    {
      number: "03",
      level: "HIGHER SECONDARY",
      title: "Higher Secondary Education",
      institution: "St. Mary's Matriculation Higher Secondary School",
      detail: "Chennai, Tamil Nadu · 70.5%",
      date: "2014",
    },
  ];

  return (
    <section id="education" className="section" data-nav-section>
      <div className="container border-section">
        <Reveal>
          <div className="heading">
            <div className="eyebrow-index">03 / Education</div>
            <h2>My learning journey</h2>
            <p>Training, education, and the work behind my skills</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="education-timeline">
            {education.map((item) => (
              <article className="education-card" key={item.number}>
                <div className="education-card-top">
                  <div className="education-level">
                    <span className="education-number">{item.number}</span>
                    <span>{item.level}</span>
                  </div>
                  <span className="education-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <div className="education-detail">{item.detail}</div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
