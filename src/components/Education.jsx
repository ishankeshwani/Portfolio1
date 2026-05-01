import { education } from '../data.js'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">05 — Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="edu-card reveal">
          <div className="edu-grad" aria-hidden="true">🎓</div>
          <div className="edu-body">
            <div className="edu-head">
              <div>
                <h3>{education.degree}</h3>
                <div className="edu-sub">Computer Applications</div>
              </div>
              <span className="edu-date">{education.date}</span>
            </div>
            <div className="edu-coursework">
              <span className="edu-label">Relevant coursework</span>
              <div className="chips">
                {education.coursework.map((c) => (
                  <span key={c} className="chip chip-soft">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
