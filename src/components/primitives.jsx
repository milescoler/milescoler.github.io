export function SectionLabel({ eyebrow, title }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat__value mono">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export function Plate({ src, alt, caption }) {
  return (
    <figure className="plate">
      <img src={src} alt={alt} />
      {caption ? <figcaption className="mono">{caption}</figcaption> : null}
    </figure>
  );
}
