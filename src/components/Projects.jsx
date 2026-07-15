import SectionHeader from './SectionHeader';

const projects = [
  { id:'01', file:'FILE 001 // AI DISCOVERY', title:'Prommmt', display:'PROMMMT', description:'Discover, share, search, and remix AI-generated art with image-to-prompt extraction and semantic search.', tags:['NEXT.JS','SUPABASE','OPENAI'], href:'https://github.com/Tomiwa-Adewumi/prommpts', kind:'prompt', badge:'100+ USERS' },
  { id:'02', file:'FILE 002 // CULTURAL DATA', title:'Local Contexts', display:<>LOCAL<br />CONTEXTS</>, description:'Drupal integration for Traditional Knowledge Labels with configurable mapping and API caching.', tags:['DRUPAL','PHP','REST'], href:'https://github.com/EmmanuelOgbole/local_contexts_integration', kind:'contexts' },
  { id:'03', file:'FILE 003 // UTILITY', title:'Image Resizer', description:'A focused batch image-resizing utility with a clean command-line workflow.', tags:['PYTHON','PILLOW'], href:'https://github.com/Tomiwa-Adewumi/Image-Resizer', kind:'resizer', image:'/images/p1.jpeg' },
];

export default function Projects() {
  return <section className="section" id="archive"><SectionHeader index="03" label="PROJECT ARCHIVE" title="Selected" outline="builds." /><div className="projects">{projects.map(project => <a className="project reveal" href={project.href} target="_blank" rel="noopener noreferrer" key={project.id}><div className={`project-visual ${project.kind}`}>{project.image && <img src={project.image} alt="Image Resizer interface" />}<span>{project.file}</span>{project.display && <strong>{project.display}</strong>}{project.badge && <i>{project.badge}</i>}</div><div className="project-info"><b>{project.id}</b><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><u>OPEN CASE FILE ↗</u></div></a>)}</div></section>;
}
