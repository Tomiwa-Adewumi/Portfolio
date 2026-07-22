import { useEffect, useState } from 'react';

const links = [
  ['Profile', 'profile'], ['Log', 'log'], ['Archive', 'archive'],
  ['Loadout', 'loadout'], ['Films', 'film-history'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('profile');

  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav-shell ${open ? 'open' : ''}`}>
      <a className="wordmark" href="#profile"><i />TMA<span>/OS</span></a>
      <nav className="nav" aria-label="Primary">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-end">
        <span className="online"><i />ONLINE</span>
        <button className="menu" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(value => !value)}>[MENU]</button>
      </div>
    </header>
  );
}
