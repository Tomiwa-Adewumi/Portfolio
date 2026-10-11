import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className="section dossier" id="about">
      <SectionHeader
        index="03"
        label="ABOUT"
        title="Away from"
        outline="the keyboard."
      />
      <div className="bio-grid">
        <article className="case reveal">
          <div className="case-top">
            <span>TOMIWA ADEWUMI</span>
            <span>TORONTO</span>
          </div>
          <img src="/images/my-avatar2.png" alt="Tomiwa Adewumi" />
          <dl>
            <div>
              <dt>NAME</dt>
              <dd>TOMIWA ADEWUMI</dd>
            </div>
            <div>
              <dt>FIELD</dt>
              <dd>SOFTWARE ENGINEERING</dd>
            </div>
            <div>
              <dt>EDUCATION</dt>
              <dd>B.S. COMPUTER SCIENCE · ECONOMICS MINOR</dd>
            </div>
            <div>
              <dt>CERTIFICATION</dt>
              <dd>AWS CLOUD PRACTITIONER</dd>
            </div>
          </dl>
        </article>
        <div className="bio reveal">
          <p className="lead">
            I like understanding how things work, then making them work better.
          </p>
          <p>
            At SS&amp;C Technologies, I build reliable payment infrastructure
            and enterprise data workflows using Java, React, Kubernetes, and
            Apache NiFi. I also volunteer as a teacher with Black Boys Code,
            where I teach young people computer science, math, and chess,
            helping them build confidence and practical skills.
          </p>
          <p>
            Outside the terminal, you’ll find me wandering the Lands Between or
            catching up on films.
          </p>
          <ul>
            <li>BACKEND</li>
            <li>CLOUD</li>
            <li>FULL-STACK</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
