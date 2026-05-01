import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">04 — Projects</span>
          <h2>Selected work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <article
              className={`project-card reveal project-${p.accent}`}
              style={{ '--d': `${idx * 80}ms` }}
              key={p.title}
            >
              <div className="project-glow" aria-hidden="true" />
              <div className="project-body">
                <div className="project-top">
                  <div className="project-folder" aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="project-links">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.74.4-1.26.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
                        </svg>
                      </a>
                    )}
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live demo" title="Live demo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v7H3V3h7"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
