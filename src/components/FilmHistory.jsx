import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

const profile = 'https://letterboxd.com/t0mmy_irl/';
const snapshot = [
  { title: 'Outlaw King', year: '2018', rating: 4, watchedDate: '2026-07-07', link: `${profile}film/outlaw-king/`, poster: 'https://a.ltrbxd.com/resized/film-poster/3/8/6/1/4/4/386144-outlaw-king-0-600-0-900-crop.jpg?v=bb6d04fbb6', review: 'This was a super fun watch, let’s go Douglas' },
  { title: "There's Something Wrong with the Children", year: '2023', rating: 3, watchedDate: '2026-07-04', link: `${profile}film/theres-something-wrong-with-the-children/`, poster: 'https://a.ltrbxd.com/resized/film-poster/8/0/9/7/6/7/809767-there-s-something-wrong-with-the-children-0-600-0-900-crop.jpg?v=508b255c6c', review: 'The story had unexplained plot lines and too many actions kept in just to move it forward.' },
  { title: 'Voicemails for Isabelle', year: '2026', rating: 4, watchedDate: '2026-06-24', link: `${profile}film/voicemails-for-isabelle/`, poster: 'https://a.ltrbxd.com/resized/film-poster/5/4/1/9/7/5/541975-voicemails-for-isabelle-0-600-0-900-crop.jpg?v=1a9f45496a', review: 'Very good watch, music was great.' },
  { title: 'Disclosure Day', year: '2026', rating: 1, watchedDate: '2026-06-15', link: `${profile}film/disclosure-day/`, poster: 'https://a.ltrbxd.com/resized/film-poster/1/1/5/9/2/5/1/1159251-disclosure-day-0-600-0-900-crop.jpg?v=9ae810e4bb', review: 'Terribly paced, with too many unexplained plot points.' },
  { title: 'Chef', year: '2014', rating: 5, watchedDate: '2026-06-13', link: `${profile}film/chef/`, poster: 'https://a.ltrbxd.com/resized/film-poster/1/5/1/3/0/9/151309-chef-0-600-0-900-crop.jpg?v=e8ec38c88e', review: 'My favourite movie—loved the acting, music, and especially how it was filmed.' },
  { title: 'Beasts of No Nation', year: '2015', rating: 4, watchedDate: '2026-05-10', link: `${profile}film/beasts-of-no-nation/`, poster: 'https://a.ltrbxd.com/resized/film-poster/2/0/8/8/8/5/208885-beasts-of-no-nation-0-600-0-900-crop.jpg?v=3e873c30a8', review: 'A powerful look at war, corruption, and the people caught inside both.' },
];

const stars = rating => `${'★'.repeat(Math.floor(rating))}${rating % 1 ? '½' : ''}`;
const formatDate = date => new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });

export default function FilmHistory({ embedded = false }) {
  const [films, setFilms] = useState(snapshot);

  useEffect(() => {
    fetch('/api/letterboxd')
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => { if (data.films?.length) setFilms(data.films); })
      .catch(() => {});
  }, []);

  const content = (
    <>
      {embedded
        ? <header className="film-subhead reveal"><h3>RECENTLY <span>WATCHED.</span></h3></header>
        : <SectionHeader index="07" label="CINEMA LOG" title="Letterboxd" outline="history." />}
      <div className="filmstrip" aria-hidden="true" />
      <div className="films-grid">
        {films.map((film, index) => (
          <a href={film.link} target="_blank" rel="noopener noreferrer" key={`${film.title}-${film.watchedDate}`} className="film-card reveal" style={{ transitionDelay: `${index * 70}ms` }}>
            <img src={film.poster} alt={`Poster for ${film.title}`} />
            <div className="film-card-copy"><div className="film-card-top"><span className="film-tag">{stars(film.rating)}</span><small>{formatDate(film.watchedDate)}</small></div><h3>{film.title} <small>({film.year})</small></h3>{film.review && <p>{film.review}</p>}<u>VIEW ON LETTERBOXD ↗</u></div>
          </a>
        ))}
      </div>
      <div className="filmstrip" aria-hidden="true" />
      <a className="film-diary-link reveal" href={profile} target="_blank" rel="noopener noreferrer">FULL DIARY ON LETTERBOXD ↗</a>
    </>
  );

  return embedded
    ? <div className="film-history film-history-embedded" id="film-history">{content}</div>
    : <section className="section film-history" id="film-history">{content}</section>;
}
