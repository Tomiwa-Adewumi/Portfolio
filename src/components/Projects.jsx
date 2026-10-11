import SectionHeader from "./SectionHeader";
const projects = [
  {
    id: "01",
    title: "Prommmt",
    category: "AI art discovery",
    description:
      "A place to discover, share, search, and remix AI-generated art.",
    detail:
      "Image-to-prompt extraction and semantic search help people find and build on existing work.",
    tags: ["Next.js", "Supabase", "OpenAI"],
    href: "https://github.com/Tomiwa-Adewumi/prommpts",
    kind: "prompt",
    steps: ["Discover art", "Extract a prompt", "Search & remix"],
    note: "100+ users",
  },
  {
    id: "02",
    title: "Local Contexts",
    category: "Cultural data integration",
    description: "Connects Traditional Knowledge Labels to Drupal content.",
    detail:
      "Configurable field mapping and API caching support the integration of cultural context into a content workflow.",
    tags: ["Drupal", "PHP", "REST"],
    href: "https://github.com/EmmanuelOgbole/local_contexts_integration",
    kind: "contexts",
    steps: ["Local Contexts API", "Mapping & cache", "Drupal content"],
    note: "Integration overview",
  },
  {
    id: "03",
    title: "Image Resizer",
    category: "Image processing",
    description: "A focused utility for batch image resizing.",
    detail:
      "A Python project for processing images through a command-line workflow.",
    tags: ["Python", "Pillow"],
    href: "https://github.com/Tomiwa-Adewumi/Image-Resizer",
    kind: "resizer",
    image: "/images/p1.jpeg",
    note: "Image-processing example",
  },
];
export default function Projects() {
  return (
    <section className="section" id="archive">
      <SectionHeader
        index="01"
        label="PROJECTS"
        title="Selected"
        outline="work."
      />
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <div className={`project-visual ${project.kind}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt="Image-processing example showing a basketball photograph alongside its edge-detected version"
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="diagram-label">
                    {project.kind === "prompt"
                      ? "Feature overview"
                      : "Integration overview"}
                  </span>
                  <div
                    className="project-diagram"
                    aria-label={project.steps.join(", then ")}
                  >
                    {project.steps.map((step, index) => (
                      <div key={step}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{step}</strong>
                        {index < project.steps.length - 1 && (
                          <i aria-hidden="true">↓</i>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
              <span className="visual-caption">{project.note}</span>
            </div>
            <div className="project-info">
              <p className="eyebrow">
                {project.id} / {project.category}
              </p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.description}</p>
              <p>{project.detail}</p>
              <div className="chips">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} code on GitHub`}
              >
                View code on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
