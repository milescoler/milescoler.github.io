import { ArrowUpRight } from 'lucide-react';
import { Plate } from './primitives';

export default function Flagship({ flagship }) {
  return (
    <section id="flagship" className="section flagship">
      <p className="eyebrow">{flagship.eyebrow}</p>
      <h2 className="flagship__company">{flagship.company}</h2>
      <p className="flagship__problem body-copy">{flagship.problem}</p>

      <div className="flagship__stages">
        {flagship.stages.map((s) => (
          <div key={s.stage} className="flagship__stage">
            <h3 className="flagship__stage-label mono">{s.stage}</h3>
            <p className="flagship__stage-body">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="flagship__outcomes mono">{flagship.outcomes}</p>
      <a className="flagship__link" href={flagship.link} target="_blank" rel="noreferrer">
        {flagship.link.replace('https://', '')} <ArrowUpRight size={15} />
      </a>

      <div className="flagship__media">
        {flagship.media.map((m) => <Plate key={m.alt} src={m.src} alt={m.alt} caption={m.caption} />)}
      </div>
    </section>
  );
}
