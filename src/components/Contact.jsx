import { profile } from '../data.js'

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.74.4-1.26.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z"/>
  </svg>
)

const LeetCodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.48 14.92a1.37 1.37 0 0 1-.96-.39l-3.28-3.28a1.37 1.37 0 0 1 0-1.92 1.37 1.37 0 0 1 1.92 0l3.28 3.28a1.37 1.37 0 0 1 0 1.92c-.27.27-.62.4-.96.39ZM8.79 22.65a5.7 5.7 0 0 1-4.04-1.67l-2.95-2.95a5.71 5.71 0 0 1 0-8.07L8.74.99a3.36 3.36 0 0 1 4.76 0l4.92 4.92a1.37 1.37 0 0 1 0 1.92 1.37 1.37 0 0 1-1.92 0L11.58 2.91a.61.61 0 0 0-.86 0L3.74 11.92a2.97 2.97 0 0 0 0 4.23l2.95 2.95a2.97 2.97 0 0 0 4.23 0l4.43-4.43a1.37 1.37 0 0 1 1.92 0 1.37 1.37 0 0 1 0 1.92l-4.43 4.43a5.7 5.7 0 0 1-4.05 1.62Zm12.84-7.62h-9.06a1.37 1.37 0 0 1 0-2.72h9.06a1.37 1.37 0 0 1 0 2.72Z"/>
  </svg>
)

const GfgIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.45 14.32c-.39 1.27-1.71 2.07-3 1.83-1.5-.27-2.5-1.43-2.5-2.93h6.43c.07-.65.04-1.31-.07-1.96H7.69c-.11.65-.14 1.31-.07 1.96h6.43c0 1.5-1 2.66-2.5 2.93-1.29.24-2.61-.56-3-1.83-.4-1.27.21-2.62 1.4-3.16.85-.39 1.85-.32 2.62.18l1.62-1.62A4.93 4.93 0 0 0 11 8.79c-2.78 0-5.04 2.26-5.04 5.05s2.26 5.04 5.04 5.04c2.4 0 4.41-1.69 4.92-3.94h2.61c-.51 3.45-3.45 6-6.96 6-3.92 0-7.1-3.18-7.1-7.1s3.18-7.1 7.1-7.1c1.96 0 3.74.79 5.02 2.08l1.62-1.62A9.32 9.32 0 0 0 11.57 4.7c-5.05 0-9.14 4.09-9.14 9.14s4.09 9.14 9.14 9.14c4.69 0 8.55-3.53 9.07-8.07.05-.43-.05-.4-.19-.59Z"/>
  </svg>
)

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <div className="contact-glow" aria-hidden="true" />
          <span className="section-tag">06 — Contact</span>
          <h2 className="contact-title">
            Let's build something <span className="grad-text">great</span> together.
          </h2>
          <p className="contact-sub">
            I'm graduating in May 2026 and looking for full-time Software Engineering roles.
            Always happy to chat about backend systems, frontend craft, or interesting problems.
          </p>

          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg contact-cta">
            ✉ Say hi — {profile.email}
          </a>

          <div className="contact-grid">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="contact-tile tile-github">
              <span className="tile-icon"><GithubIcon /></span>
              <span className="tile-label">GitHub</span>
              <span className="tile-handle">@ishankeshwani</span>
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="contact-tile tile-linkedin">
              <span className="tile-icon"><LinkedInIcon /></span>
              <span className="tile-label">LinkedIn</span>
              <span className="tile-handle">/ishankeshwani</span>
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="contact-tile tile-leetcode">
              <span className="tile-icon"><LeetCodeIcon /></span>
              <span className="tile-label">LeetCode</span>
              <span className="tile-handle">@Ishankeshwani</span>
            </a>
            <a href={profile.socials.gfg} target="_blank" rel="noreferrer" className="contact-tile tile-gfg">
              <span className="tile-icon"><GfgIcon /></span>
              <span className="tile-label">GeeksforGeeks</span>
              <span className="tile-handle">@keshwaniimxd8</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
