import { ArrowUpRight } from 'lucide-react';
import { SectionLabel, Plate } from './primitives';

export default function SelectedWork({ work, github }) {
  return (
    <section id="work" className="section work">
      <SectionLabel eyebrow="Work" title="Selected work" />
      <div className="work__list">
        {work.map((w) => (
          <article key={w.title} className="work__item">
            <div className="work__body">
              <div className="work__tags mono">
                <span>{w.arcTag}</span>
                <span>·</span>
                <span>{w.domainTag}</span>
                {w.inProgress ? <span className="work__wip">In progress</span> : null}
              </div>
              <h3 className="work__title">{w.title}</h3>
              <p className="work__blurb">{w.blurb}</p>
              <div className="tags">
                {w.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            {w.media ? (
              <div className="work__media"><Plate src={w.media.src} alt={w.media.alt} caption={w.media.caption} /></div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="work__github">
        <a className="label work__github-note" href={github.url} target="_blank" rel="noreferrer">{github.note}</a>
        <ul>
          {github.repos.map((r) => (
            <li key={r.url}>
              <a href={r.url} target="_blank" rel="noreferrer">{r.label} <ArrowUpRight size={13} /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
