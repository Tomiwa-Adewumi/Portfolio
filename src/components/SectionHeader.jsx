export default function SectionHeader({ index, label, title, outline }) {
  return (
    <header className="section-head reveal">
      <h2 className="glitchable" tabIndex="0" aria-label={`${title} ${outline}`}>
        <span className="section-title-solid" aria-hidden="true">{title}</span>
        <span className="section-title-outline" aria-hidden="true">{outline}</span>
      </h2>
    </header>
  );
}
