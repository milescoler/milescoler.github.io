import { SectionLabel, Plate } from './primitives';

export default function About({ about }) {
  return (
    <section id="about" className="section about">
      <SectionLabel eyebrow="About" title="Who I am" />
      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p) => <p key={p} className="body-copy">{p}</p>)}
          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.label} className="about__fact">
                <dt className="mono">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about__aside">
          <Plate src={about.headshot.src} alt={about.headshot.alt} caption={about.headshot.caption} />
        </div>
      </div>
      <div className="about__personal">
        <div className="tags tags--large">
          {about.personal.interests.map((i) => <span key={i}>{i}</span>)}
        </div>
        <p className="about__personal-line">{about.personal.line}</p>
      </div>
    </section>
  );
}
