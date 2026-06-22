import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ name, nav, resumeUrl }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand mono" href="#top">{name}</a>
        <nav className={`nav${open ? ' nav--open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--ghost nav__resume" href={resumeUrl} download>Résumé</a>
        </nav>
        <a className="button button--ghost header__resume" href={resumeUrl} download>Résumé</a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
