import { skills } from '../data.js'

const MARQUEE = [
  'Java', 'Spring Boot', 'React.js', 'JavaScript', 'PostgreSQL',
  'HTML5', 'CSS3', 'REST APIs', 'Hibernate', 'Maven',
  'Git', 'Linux', 'Node.js', 'JPA', 'Microservices'
]

const ICONS = {
  Languages: '⚡',
  Frontend: '🎨',
  Backend: '⚙️',
  Databases: '🗄️',
  Tools: '🛠️',
  Concepts: '🧠'
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">02 — Skills</span>
          <h2>The toolbox</h2>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span className="marquee-item" key={i}>{m}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((group, idx) => (
            <div className="skill-card reveal" style={{ '--d': `${idx * 60}ms` }} key={group.category}>
              <div className="skill-icon">{ICONS[group.category] || '◆'}</div>
              <h3>{group.category}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
