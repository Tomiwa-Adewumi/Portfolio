import SectionHeader from './SectionHeader';

const jobs = [
  { id:'001', date:'SEP 2025 — NOW', type:'PAYMENT INFRASTRUCTURE', title:'Software Engineer', company:'SS&C Technologies · Toronto / Remote', bullets:['Built SWIFT MT210 filtering that cut redundant messages by 95%.','Designed fault-tolerant retry and queueing flows for payment-network outages.','Led an Apache NiFi 1.x → 2.0 migration across distributed pipelines.','Unified React ingestion tools into a Keycloak-authenticated portal.'], tags:['JAVA','REACT','KUBERNETES','NIFI','KEYCLOAK'] },
  { id:'002', date:'MAY — AUG 2023', type:'DISTRIBUTED SYSTEMS', title:'Software Development Engineer Intern', company:'Amazon · Toronto', bullets:['Implemented a Guava local cache, reducing retrieval latency by 20%.','Designed a distributed cache using Redis and AWS ElastiCache.','Documented architecture and trade-offs for long-term team ownership.'], tags:['JAVA','REDIS','AWS','GUAVA'], orange:true },
];

export default function Work() {
  return <section className="section" id="log"><SectionHeader index="02" label="WORK EXPERIENCE" title="Work" outline="experience." /><div className="missions">{jobs.map(job => <article className="mission reveal" key={job.id}><div className="mission-id"><strong>LOG {job.id}</strong><span>{job.date}</span></div><div><p className={`mission-type ${job.orange ? 'orange' : ''}`}>{job.type}</p><h3>{job.title}</h3><h4>{job.company}</h4><ul>{job.bullets.map(item => <li key={item}>{item}</li>)}</ul><div className="chips">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>;
}
