import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Flame,
  Github,
  GraduationCap,
  Grid2X2,
  Linkedin,
  Mail,
  MapPinned,
  Mountain,
  MoveRight,
  Shield,
  Waves,
  Wrench,
} from 'lucide-react';
import { personalData } from './data/personalData';

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const iconMap = {
  flame: Flame,
  map: MapPinned,
  tools: Wrench,
  shield: Shield,
  grid: Grid2X2,
  school: GraduationCap,
  wave: Waves,
  mountain: Mountain,
};

function App() {
  const {
    name,
    navigation,
    hero,
    profile,
    focusAreas,
    metrics,
    work,
    projects,
    education,
    personal,
    contact,
  } = personalData;

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#top">
            <span className="brand__name">{name}</span>
            <span className="brand__meta">{hero.eyebrow}</span>
          </a>

          <nav className="nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--ghost button--compact" href={contact.resumeUrl} download>
            Resume
            <Download size={16} />
          </a>
        </div>
      </header>

      <main id="top">
        <motion.section className="hero" {...sectionReveal}>
          <div className="hero__copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p className="hero__lede">{hero.lede}</p>
            <p className="hero__body">{hero.body}</p>

            <div className="button-row">
              <a className="button" href={`mailto:${contact.primaryEmail}`}>
                Email me
                <Mail size={18} />
              </a>
              <a className="button button--ghost" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
                <ArrowUpRight size={18} />
              </a>
              <a className="button button--ghost" href={contact.resumeUrl} download>
                Download resume
                <Download size={18} />
              </a>
            </div>

            <div className="hero__signals">
              {hero.signals.map((signal) => (
                <div key={signal.label} className="signal-card">
                  <span className="signal-card__label">{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visuals">
            <div className="editorial-panel editorial-panel--feature">
              <span className="editorial-panel__tag">Field Notes</span>
              <p>{hero.featureCard}</p>
              <div className="editorial-panel__footer">
                <span>Wildfire resilience</span>
                <span>GIS + operations</span>
              </div>
            </div>

            <div className="editorial-stack">
              {hero.mediaPlaceholders.map((item) => (
                <ImagePlaceholder key={item.label} item={item} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="about" className="section section--split" {...sectionReveal}>
          <SectionHeading
            eyebrow="Profile"
            title="I build systems that work in the real world."
            intro={profile.intro}
          />

          <div className="profile-grid">
            <div className="profile-card">
              <ImagePlaceholder item={profile.headshot} />
            </div>

            <div className="profile-story">
              {profile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="fact-grid">
                {profile.facts.map((fact) => (
                  <div key={fact.label} className="fact-card">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="focus" className="section" {...sectionReveal}>
          <SectionHeading
            eyebrow="Focus"
            title="My work sits between analysis, mapping, and execution."
            intro="I want the site to make one thing obvious: I’m not only interested in models and dashboards. I like building tools that get used, communicating clearly, and making field work more precise."
          />

          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = iconMap[area.icon];

              return (
                <article key={area.title} className="focus-card">
                  <div className="focus-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section className="section" {...sectionReveal}>
          <SectionHeading
            eyebrow="Snapshot"
            title="The numbers behind the narrative."
            intro="These are the signals I want a recruiter, collaborator, or client to see quickly: I’ve already built real systems, led real work, and I’m still early in the story."
          />

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="work" className="section" {...sectionReveal}>
          <SectionHeading
            eyebrow="Selected Work"
            title="The strongest thread is wildfire resilience, but not the only one."
            intro="Trident Ember Defense is the clearest proof of how I work: I build software, map risk, coordinate people, and push projects forward. UCLA and my broader coursework give that work a stronger data and GIS foundation."
          />

          <div className="timeline">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-card">
                <div className="timeline-card__meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <div className="timeline-card__body">
                  <div className="timeline-card__heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="inline-link">
                        Visit
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>

                  <p className="timeline-card__summary">{item.summary}</p>

                  <ul className="timeline-card__list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <ArrowRight size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {item.tools.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section" {...sectionReveal}>
          <SectionHeading
            eyebrow="Builds"
            title="These are the projects I want to lead with."
            intro="I’m intentionally not filling this section with class-assignment filler. The emphasis is on tools, mapping, and operational systems that solve specific problems."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card__media">
                  <ImagePlaceholder item={project.media} compact />
                </div>

                <div className="project-card__copy">
                  <div className="project-card__header">
                    <div>
                      <span className="project-card__eyebrow">{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-link">
                        Open
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>

                  <p>{project.description}</p>
                  <ul className="project-card__list">
                    {project.points.map((point) => (
                      <li key={point}>
                        <MoveRight size={15} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {project.stack.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="section section--split" {...sectionReveal}>
          <SectionHeading
            eyebrow="Education"
            title="I’m building from a strong math foundation into applied GIS and data science."
            intro="UCLA gives me the technical frame. My transfer path and earlier coursework in mathematics and computer science shaped how I approach systems: rigor first, then execution."
          />

          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school} className="education-card">
                <div className="education-card__top">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <h3>{item.school}</h3>
                <p className="education-card__degree">{item.degree}</p>
                <ul className="education-card__list">
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="life" className="section" {...sectionReveal}>
          <SectionHeading
            eyebrow="Outside Work"
            title="The personal side matters here."
            intro="I don’t want this site to feel detached from how I actually live. I care about being outside, staying active, and building a life that keeps me close to people, movement, and the places I want to help protect."
          />

          <div className="life-layout">
            <div className="life-copy">
              <p>{personal.summary}</p>
              <div className="interest-grid">
                {personal.interests.map((interest) => {
                  const Icon = iconMap[interest.icon];

                  return (
                    <div key={interest.title} className="interest-card">
                      <Icon size={18} />
                      <div>
                        <strong>{interest.title}</strong>
                        <span>{interest.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="media-rail">
              {personal.mediaPlaceholders.map((item) => (
                <ImagePlaceholder key={item.label} item={item} compact />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="section section--contact" {...sectionReveal}>
          <SectionHeading
            eyebrow="Contact"
            title="I’m looking for work where I can have a strong impact."
            intro="The best fit is a team working on climate tech, GIS, wildfire resilience, applied data science, or research with real-world stakes. If that sounds like your world, I’d like to talk."
          />

          <div className="contact-panel">
            <div>
              <p className="contact-panel__statement">{contact.statement}</p>
              <div className="button-row">
                <a className="button" href={`mailto:${contact.primaryEmail}`}>
                  {contact.primaryEmail}
                  <Mail size={18} />
                </a>
                <a className="button button--ghost" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                  <Linkedin size={18} />
                </a>
                <a className="button button--ghost" href={contact.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <Github size={18} />
                </a>
                <a className="button button--ghost" href={contact.resumeUrl} download>
                  Resume
                  <Download size={18} />
                </a>
              </div>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <span>Main contact</span>
                <strong>{contact.primaryEmail}</strong>
                <p>For recruiting, collaboration, or research opportunities.</p>
              </div>
              <div className="contact-card">
                <span>Trident contact</span>
                <strong>{contact.tridentEmail}</strong>
                <p>For startup, partnership, or wildfire protection questions.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function ImagePlaceholder({ item, compact = false }) {
  return (
    <div className={`image-placeholder${compact ? ' image-placeholder--compact' : ''}`}>
      <div className="image-placeholder__glow" />
      <span className="image-placeholder__tag">{item.tag}</span>
      <strong>{item.label}</strong>
      <p>{item.note}</p>
    </div>
  );
}

export default App;
