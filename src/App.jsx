import { useEffect, useState } from 'react';
import Header from './components/Header';
import BootSequence from './components/BootSequence';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Loadout from './components/Loadout';
import Lore from './components/Lore';
import ThingsILike from './components/ThingsILike';
import Footer from './components/Footer';

export default function App() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('tmw-booted') === 'true');

  useEffect(() => {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (booted || reduceMotion) {
      setBooted(true);
      return;
    }
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setBooted(true);
      sessionStorage.setItem('tmw-booted', 'true');
      document.body.style.overflow = '';
    }, 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [booted]);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <BootSequence complete={booted} />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Loadout />
        <Lore />
        <ThingsILike />
      </main>
      <Footer />
    </>
  );
}
