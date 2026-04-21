import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { personalData } from './data/personalData';

const sectionReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function renderTitle(title, accent) {
  if (!accent || !title.includes(accent)) {
    if (import.meta.env.DEV && accent) {
      // eslint-disable-next-line no-console
      console.warn(`hero.titleAccent "${accent}" not found in hero.title`);
    }
    return title;
  }
  const index = title.indexOf(accent);
  const before = title.slice(0, index);
  const after = title.slice(index + accent.length);
  return (
    <>
      {before}
      <span className="accent-gradient">{accent}</span>
      {after}
    </>
  );
}

function App() {
  const { name, navigation, hero, profile, work, projects, education, personal, contact, availability } = personalData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#top">
            {name}
          </a>

          <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button button--ghost nav__resume" href={contact.resumeUrl} download>
              Resume
            </a>
          </nav>

          <a className="button button--ghost header__resume" href={contact.resumeUrl} download>
            Resume
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top" className="container">
        <motion.section className="hero" {...sectionReveal}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{renderTitle(hero.title, hero.titleAccent)}</h1>
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__body">{hero.body}</p>

          <div className="actions">
            <a className="button" href={`mailto:${contact.primaryEmail}`}>
              <Mail size={16} />
              Email
            </a>
            <a className="button button--ghost" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a className="button button--ghost" href={contact.githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a className="button button--ghost" href={contact.resumeUrl} download>
              <Download size={16} />
              Download resume
            </a>
          </div>

          <div className="availability">
            {availability.map((item) => (
              <div key={item.label} className="availability__cell">
                <div className="availability__label">{item.label}</div>
                <div className="availability__value">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="meta-row">
          <div className="meta-row__portrait">
            <img src={profile.headshot.src} alt={profile.headshot.alt} />
          </div>
          <div className="meta-row__facts">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="meta-row__fact">
                <div className="meta-row__label">{fact.label}</div>
                <div className="meta-row__value">{fact.value}</div>
              </div>
            ))}
          </div>
        </section>

        <motion.section id="about" className="section section--split" {...sectionReveal}>
          <SectionHeading eyebrow="About" title="Grounded in quantitative fundamentals, built on real work." />

          <div className="stack">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        <motion.section id="work" className="section" {...sectionReveal}>
          <SectionHeading eyebrow="Work" title="Selected roles and operating experience." />

          <div className="list">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="list-card">
                <div className="list-card__top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <div className="list-card__meta">
                    <span>{item.period}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        Visit
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="body-copy">{item.summary}</p>

                <ul className="bullets">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section" {...sectionReveal}>
          <SectionHeading eyebrow="Projects" title="Ideas turned into tools, systems, and execution." />

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project">
                <div className="project__media">
                  <MediaCard item={project.media} className="project__media-card" />
                </div>

                <div className="project__body">
                  <p className="project__eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="body-copy">{project.description}</p>

                  <ul className="bullets">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="section section--split" {...sectionReveal}>
          <SectionHeading eyebrow="Education" title="Where I built the quantitative base." />

          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school} className="list-card">
                <div className="list-card__top">
                  <div>
                    <h3>{item.school}</h3>
                    <p className="muted">{item.degree}</p>
                  </div>
                  <span className="muted">{item.period}</span>
                </div>

                <ul className="bullets">
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="life" className="section" {...sectionReveal}>
          <SectionHeading eyebrow="Life" title="Outside work." subtitle="This part of my life shapes the kind of work I want to do." />

          <div className="split">
            <MediaCard item={personal.featuredImage} className="card card--image" />

            <div>
              <p className="body-copy body-copy--wide">{personal.summary}</p>

              <div className="tags tags--large">
                {personal.interests.map((interest) => (
                  <span key={interest.title}>{interest.title}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="section contact" {...sectionReveal}>
          <SectionHeading eyebrow="Contact" title="Let's talk." />

          <div className="contact-layout">
            <div className="contact-intro">
              <p className="body-copy body-copy--wide">{contact.statement}</p>

              <div className="contact-actions">
                <a className="button" href={`mailto:${contact.primaryEmail}`}>
                  <Mail size={16} />
                  Email me
                </a>
                <a className="button button--ghost" href={contact.resumeUrl} download>
                  <Download size={16} />
                  Download resume
                </a>
              </div>
            </div>

            <div className="contact-panel">
              <div className="contact-panel__row">
                <span>Main contact</span>
                <a href={`mailto:${contact.primaryEmail}`}>{contact.primaryEmail}</a>
              </div>
              <div className="contact-panel__row">
                <span>LinkedIn</span>
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                  Connect with me
                </a>
              </div>
              <div className="contact-panel__row">
                <span>GitHub</span>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer">
                  {contact.githubUrl.replace('https://', '')}
                </a>
              </div>
              <div className="contact-panel__row">
                <span>Trident</span>
                <a href={`mailto:${contact.tridentEmail}`}>{contact.tridentEmail}</a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function SectionHeading({ title, subtitle, eyebrow }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__label">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function MediaCard({ item, className }) {
  return (
    <div className={`${className}${item.variant ? ` media-card--${item.variant}` : ''}`}>
      <img className="media-card__image" src={item.src} alt={item.alt} />
      {item.minimalCaption ? (
        <div className="media-card__content media-card__content--minimal">
          <p>{item.note}</p>
        </div>
      ) : (
        <div className="media-card__content">
          {item.tag ? <span className="card__label">{item.tag}</span> : null}
          <h3>{item.label}</h3>
          <p>{item.note}</p>
        </div>
      )}
    </div>
  );
}

export default App;
