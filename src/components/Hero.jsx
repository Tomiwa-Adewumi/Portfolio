export default function Hero() {
  return (
    <section className="hero" id="profile">
      <div className="hero-topline">
        <p className="eyebrow">Software engineer</p>
        <span>Toronto, Canada</span>
      </div>
      <h1>
        <span>TOMIWA</span>
        <span className="surname">ADEWUMI</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-intro">
          I build payment infrastructure, backend services, and tools for
          enterprise data workflows.
        </p>
        <div className="hero-actions">
          <a className="button hot" href="#archive">
            View projects <span aria-hidden="true">↓</span>
          </a>
          <a className="button" href="mailto:tomiwa.m.adewumi@gmail.com">
            Email me
          </a>
        </div>
      </div>
      <a className="hero-proof" href="#log">
        <span className="eyebrow">At SS&amp;C Technologies</span>
        <strong>95% fewer redundant SWIFT messages.</strong>
        <span className="proof-link">
          See the work <span aria-hidden="true">↗</span>
        </span>
      </a>
    </section>
  );
}
