import SectionHeader from './SectionHeader';

const slots = [['Languages','Java · Python · JavaScript · TypeScript'],['Frameworks','React · Node.js · Spring Boot · Next.js'],['Data','PostgreSQL · Redis · Kafka · REST APIs'],['Infrastructure','AWS · Docker · Kubernetes · CI/CD'],['Operations','Linux · Git · JUnit · Postman'],['Current quest','Resilient distributed systems · AI tooling']];

export default function Loadout() {
  return <section className="section" id="loadout"><SectionHeader index="04" label="LOADOUT" title="Technical" outline="arsenal." /><div className="loadout reveal">{slots.map(([title, skills], index) => <article key={title}><b>SLOT {String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>{skills}</p></article>)}</div></section>;
}
