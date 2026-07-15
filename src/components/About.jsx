import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="section dossier" id="about">
      <SectionHeader index="01" label="PERSONNEL FILE" title="Not just" outline="the résumé." />
      <div className="bio-grid">
        <article className="case reveal">
          <div className="case-top"><span>CASE FILE // TA-025</span><b>ACTIVE</b></div>
          <img src="/images/my-avatar2.png" alt="Tomiwa Adewumi" />
          <dl><div><dt>SUBJECT</dt><dd>TOMIWA ADEWUMI</dd></div><div><dt>FIELD</dt><dd>SOFTWARE ENGINEERING</dd></div><div><dt>EDUCATION</dt><dd>B.S. COMPUTER SCIENCE · ECONOMICS MINOR</dd></div><div><dt>CLEARANCE</dt><dd>AWS CLOUD PRACTITIONER</dd></div></dl>
        </article>
        <div className="bio reveal">
          <p className="lead">I care about the invisible details: failure modes, clean handoffs, fast paths, and interfaces that make complex systems feel obvious.</p>
          <p>At SS&amp;C Technologies, I build reliable payment infrastructure and enterprise data workflows using Java, React, Kubernetes, and Apache NiFi. I also volunteer as a teacher with Black Boys Code, where I teach young people computer science, math, and chess, helping them build confidence and practical skills.</p>
          <p>Outside the terminal, you’ll find me dropping into Apex and wandering the Lands Between.</p>
          <ul><li>BACKEND</li><li>CLOUD</li><li>FULL-STACK</li><li>CINEMATIC UI</li></ul>
        </div>
      </div>
    </section>
  );
}
