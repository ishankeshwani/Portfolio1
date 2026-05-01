import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Java + Spring Boot',
  'React.js Developer'
]

function useTypewriter(words, typingMs = 90, pauseMs = 1400) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const speed = deleting ? typingMs / 2 : typingMs
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), pauseMs)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setI((x) => x + 1)
        return
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typingMs, pauseMs])

  return text
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="status-pill">
            <span className="status-dot" /> Available for full-time roles · May 2026
          </span>
          <h1>
            Hi, I'm <span className="grad-text">Ishan</span>.
            <br />I build things for the web.
          </h1>
          <h2 className="role">
            <span className="caret">{'>'}</span> {role}
            <span className="cursor-blink" />
          </h2>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
            <a href={profile.socials.gfg} target="_blank" rel="noreferrer">GeeksforGeeks ↗</a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-avatar">
            <div className="avatar-ring" />
            <img src={profile.avatar} alt={profile.name} />
            <div className="avatar-badge">
              <span>📍</span> Bhavnagar, IN
            </div>
          </div>

          <div className="code-window">
            <div className="code-bar">
              <span className="dot d-r" />
              <span className="dot d-y" />
              <span className="dot d-g" />
              <span className="code-file">ishan.java</span>
            </div>
            <pre className="code-body"><code>
{`public class Ishan {
  String role  = "Software Engineer";
  String stack = "Java + Spring Boot";
  String love  = "Clean APIs, Fast UIs";

  public boolean isHiring(Team t) {
    return t.values(craft, curiosity);
  }
}`}
            </code></pre>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
