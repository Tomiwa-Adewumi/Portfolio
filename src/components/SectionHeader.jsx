export default function SectionHeader({ index, label, title, outline }) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        {index} / {label}
      </p>
      <h2>
        {title}
        {outline && (
          <>
            {" "}
            <span>{outline}</span>
          </>
        )}
      </h2>
    </header>
  );
}
