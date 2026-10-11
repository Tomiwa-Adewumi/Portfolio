import { useEffect, useState } from "react";

const links = [
  ["Projects", "archive"],
  ["Experience", "log"],
  ["About", "about"],
  ["Films", "film-history"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav-shell ${open ? "open" : ""}`}>
      <a className="wordmark" href="#profile">
        TA<span>.</span>
      </a>
      <nav id="primary-navigation" className="nav" aria-label="Primary">
        {links.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : ""}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-end">
        <a className="nav-contact" href="mailto:tomiwa.m.adewumi@gmail.com">
          Get in touch ↗
        </a>
        <button
          className="menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
