import { motion } from 'framer-motion';
import { SectionLabel } from './primitives';

export default function Arc({ arc }) {
  return (
    <section id="approach" className="section arc">
      <SectionLabel eyebrow="Approach" title="How I work" />
      <p className="arc__intro body-copy">{arc.intro}</p>
      <div className="arc__wrap">
        <motion.span
          className="arc__rail"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <ol className="arc__line">
          {arc.stages.map((s) => (
            <li key={s.n} className="arc__stage">
              <span className="arc__n mono">{s.n}</span>
              <h3 className="arc__stage-label">{s.label}</h3>
              <p className="arc__stage-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
