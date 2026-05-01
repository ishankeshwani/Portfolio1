import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">03 — Experience</span>
          <h2>Where I've worked</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item reveal" key={item.role + item.company}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-head">
                  <div>
                    <h3>{item.role}</h3>
                    <div className="timeline-company">@ {item.company}</div>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <ul>
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  <span>HTML5</span><span>CSS3</span><span>JavaScript</span>
                  <span>REST APIs</span><span>Agile/Scrum</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
