import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Loadout from "./components/Loadout";
import FilmHistory from "./components/FilmHistory";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.05 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Work />
        <About />
        <Loadout />
        <FilmHistory />
      </main>
      <Footer />
    </>
  );
}
