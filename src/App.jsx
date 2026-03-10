import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPinned,
} from 'lucide-react';
import { personalData } from './data/personalData';

const sectionReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function App() {
  const { name, navigation, hero, profile, work, projects, education, personal, contact } = personalData;

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#top">
            {name}
          </a>

          <nav className="nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--ghost" href={contact.resumeUrl} download>
            Resume
          </a>
        </div>
      </header>

      <main id="top" className="container">
        <motion.section className="hero" {...sectionReveal}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
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

          <div className="hero__meta">
            <MetaItem icon={<MapPinned size={16} />} label="Based in" value="Santa Monica / Los Angeles" />
            <MetaItem icon={<GraduationCap size={16} />} label="Graduating" value="UCLA, June 2026" />
          </div>
        </motion.section>

        <motion.section id="about" className="section section--split" {...sectionReveal}>
          <SectionHeading title="About" />

          <div className="split">
            <div className="card card--image">
              <span className="card__label">{profile.headshot.tag}</span>
              <h3>{profile.headshot.label}</h3>
              <p>{profile.headshot.note}</p>
            </div>

            <div className="stack">
              {profile.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}

              <div className="facts">
                {profile.facts.map((fact) => (
                  <div key={fact.label} className="fact">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="work" className="section" {...sectionReveal}>
          <SectionHeading title="Work" subtitle="Selected roles and operating experience." />

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
          <SectionHeading title="Projects" subtitle="Tools and systems I want to lead with." />

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project">
                <div className="project__media">
                  <span className="card__label">{project.media.tag}</span>
                  <h3>{project.media.label}</h3>
                  <p>{project.media.note}</p>
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
          <SectionHeading title="Education" />

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
          <SectionHeading title="Outside work" subtitle="The human part of the story matters too." />

          <p className="body-copy body-copy--wide">{personal.summary}</p>

          <div className="tags tags--large">
            {personal.interests.map((interest) => (
              <span key={interest.title}>{interest.title}</span>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="section contact" {...sectionReveal}>
          <SectionHeading title="Contact" subtitle="I’m looking for work where I can have a strong impact." />

          <p className="body-copy body-copy--wide">{contact.statement}</p>

          <div className="contact-grid">
            <a className="contact-card" href={`mailto:${contact.primaryEmail}`}>
              <span>Main contact</span>
              <strong>{contact.primaryEmail}</strong>
            </a>
            <a className="contact-card" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </a>
            <a className="contact-card" href={contact.resumeUrl} download>
              <span>Resume</span>
              <strong>Download PDF</strong>
            </a>
            <a className="contact-card" href={`mailto:${contact.tridentEmail}`}>
              <span>Trident</span>
              <strong>{contact.tridentEmail}</strong>
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function MetaItem({ icon, label, value }) {
  return (
    <div className="meta-item">
      <div className="meta-item__icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default App;
