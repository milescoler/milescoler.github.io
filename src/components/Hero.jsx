import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Stat } from './primitives';

export default function Hero({ hero, proof, contact }) {
  return (
    <section id="top" className="hero">
      <p className="hero__kicker mono">{hero.kicker}</p>
      <p className="hero__credential mono">{hero.credential}</p>
      <h1 className="hero__headline">{hero.headline}</h1>
      <p className="hero__subline body-copy">{hero.subline}</p>

      <div className="actions">
        <a className="button" href={`mailto:${contact.email}`}><Mail size={16} /> Email</a>
        <a className="button button--ghost" href={contact.resumeUrl} download><Download size={16} /> Résumé</a>
        <a className="button button--ghost" href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a className="button button--ghost" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
      </div>

      <div className="proof">
        {proof.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
      </div>
    </section>
  );
}
