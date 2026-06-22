import { Mail, Download } from 'lucide-react';
import { SectionLabel } from './primitives';

export default function Contact({ contact }) {
  const telHref = `tel:${contact.phone.replace(/[^0-9]/g, '')}`;
  return (
    <section id="contact" className="section contact">
      <SectionLabel eyebrow="Contact" title="Let's talk" />
      <div className="contact__grid">
        <div>
          <p className="body-copy contact__statement">{contact.statement}</p>
          <div className="actions">
            <a className="button" href={`mailto:${contact.email}`}><Mail size={16} /> Email me</a>
            <a className="button button--ghost" href={contact.resumeUrl} download><Download size={16} /> Résumé</a>
          </div>
        </div>
        <dl className="contact__panel">
          <div className="contact__row"><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
          <div className="contact__row"><dt>Phone</dt><dd><a href={telHref}>{contact.phone}</a></dd></div>
          <div className="contact__row"><dt>LinkedIn</dt><dd><a href={contact.linkedin} target="_blank" rel="noreferrer">in/milescoler</a></dd></div>
          <div className="contact__row"><dt>GitHub</dt><dd><a href={contact.github} target="_blank" rel="noreferrer">{contact.github.replace(/^https?:\/\//, '')}</a></dd></div>
          <div className="contact__row"><dt>Trident</dt><dd><a href={`mailto:${contact.tridentEmail}`}>{contact.tridentEmail}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}
