import { summary, profile } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">01 — About</span>
          <h2>A bit about me</h2>
        </div>

        <div className="bento">
          <div className="bento-card bento-summary reveal">
            <div className="bento-eyebrow">Profile</div>
            <p>{summary}</p>
            <div className="signature">— {profile.name}</div>
          </div>

          <div className="bento-card bento-stat reveal">
            <div className="big-number">5+</div>
            <div className="bento-eyebrow">Projects shipped</div>
          </div>

          <div className="bento-card bento-stat alt reveal">
            <div className="big-number">10+</div>
            <div className="bento-eyebrow">REST endpoints built</div>
          </div>

          <div className="bento-card bento-location reveal">
            <div className="bento-eyebrow">Based in</div>
            <h3>{profile.location}</h3>
            <div className="globe">🌏</div>
          </div>

          <div className="bento-card bento-contact reveal">
            <div className="bento-eyebrow">Reach me</div>
            <a href={`mailto:${profile.email}`} className="contact-line">📧 {profile.email}</a>
            <div className="contact-line muted">📱 {profile.phone}</div>
            <a href={profile.socials.website} target="_blank" rel="noreferrer" className="contact-line">
              🌐 ishankeshwani.netlify.app
            </a>
          </div>

          <div className="bento-card bento-langs reveal">
            <div className="bento-eyebrow">Languages</div>
            <ul className="lang-list">
              <li><span>English</span><em>Professional</em></li>
              <li><span>Hindi</span><em>Professional</em></li>
              <li><span>Gujarati</span><em>Native</em></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
