import { SectionLabel } from './primitives';

export default function ExperienceEducation({ experience, education }) {
  return (
    <section id="experience" className="section xp">
      <SectionLabel eyebrow="Experience & education" title="The standard scan" />

      <div className="xp__group">
        {experience.map((e) => (
          <article key={`${e.company}-${e.role}`} className="xp__item">
            <div className="xp__head">
              <div>
                <h3 className="xp__role">{e.role}</h3>
                <p className="xp__org mono">{e.company} · {e.location}</p>
              </div>
              <span className="xp__period mono">{e.period}</span>
            </div>
            <p className="xp__note">{e.note}</p>
          </article>
        ))}
      </div>

      <div className="xp__group xp__group--edu">
        {education.map((ed) => (
          <article key={ed.school} className="xp__item">
            <div className="xp__head">
              <div>
                <h3 className="xp__role">{ed.school}</h3>
                <p className="xp__org mono">{ed.degree}</p>
              </div>
              <span className="xp__period mono">{ed.period}</span>
            </div>
            <p className="xp__note">{ed.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
