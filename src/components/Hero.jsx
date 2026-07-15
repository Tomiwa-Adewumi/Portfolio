export default function Hero() {
  const ticker = 'BACKEND SYSTEMS ◆ CLOUD INFRASTRUCTURE ◆ CINEMATIC INTERFACES ◆ RELIABLE SOFTWARE ◆ CURIOUS HUMAN ◆ ';
  return (
    <section className="hero" id="profile">
      <div className="hero-copy">
        <p className="eyebrow reveal">SUBJECT 025 // SOFTWARE ENGINEER</p>
        <h1 className="reveal"><span>TOMIWA</span><span className="outline">ADEWUMI</span></h1>
        <div className="hero-actions reveal"><a className="button hot" href="#archive">Enter archive ↓</a><a className="button" href="mailto:tomiwa.m.adewumi@gmail.com">Contact signal ↗</a></div>
      </div>
      <div className="hero-data reveal"><dl><div><dt>STATUS</dt><dd>BUILDING</dd></div><div><dt>BASE</dt><dd>TORONTO, CA</dd></div><div><dt>CLASS</dt><dd>ENGINEER</dd></div><div><dt>SIGNAL</dt><dd>CODE / GAMES / SYSTEMS</dd></div></dl></div>
      <div className="ticker" aria-hidden="true"><div>{ticker}</div><div>{ticker}</div></div>
    </section>
  );
}
