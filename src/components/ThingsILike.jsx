import { useRef } from 'react';
import SectionHeader from './SectionHeader';
import FilmHistory from './FilmHistory';

const favorites = [
  { title: 'Attack on Titan', short: 'AOT', category: 'ANIME', caption: 'Impossible odds, shifting loyalties, and a story that keeps widening its frame.', moods: ['EPIC', 'DARK', 'POLITICAL'], visual: 'aot' },
  { title: 'One Piece', short: 'ONE PIECE', category: 'ANIME', caption: 'Found family, ridiculous adventure, and the longest route to freedom.', moods: ['ADVENTURE', 'JOY', 'NAKAMA'], visual: 'one-piece' },
  { title: 'Chef', short: 'CHEF', category: 'FILM', caption: 'A warm reset about craft, family, and finding the fun in making things again.', moods: ['COMFORT', 'FOOD', 'ROAD TRIP'], visual: 'chef' },
  { title: 'Steven Universe', short: 'STEVEN\nUNIVERSE', category: 'ANIMATION', caption: 'Big feelings, cosmic mythology, excellent songs, and radical empathy.', moods: ['HEART', 'MUSIC', 'COSMIC'], visual: 'steven' },
  { title: 'Chelsea FC', short: 'CHELSEA', category: 'FOOTBALL', caption: 'West London blue. Matchday nerves, late winners, and keeping the faith.', moods: ['BLUE', 'MATCHDAY', 'CFC'], visual: 'chelsea' },
  { title: 'Cole Palmer', short: 'PALMER', category: 'FOOTBALL', caption: 'Cold finishes, quiet confidence, and the calmest celebration in football.', moods: ['COLD', 'CLUTCH', '20'], visual: 'palmer' },
];

export default function ThingsILike() {
  const trackRef = useRef(null);

  return (
    <section className="section things" id="things">
      <SectionHeader index="06" label="REFERENCE WALL" title="Things" outline="I like." />
      <div className="gallery-frame reveal">
        <div className="gallery-fade gallery-fade-left" aria-hidden="true" /><div className="gallery-fade gallery-fade-right" aria-hidden="true" />
        <div className="things-track" ref={trackRef} tabIndex="0" aria-label="Things Tomiwa likes">
          {favorites.map((item, index) => (
            <article className={`favorite-card favorite-${item.visual}`} key={item.title} style={{ '--card-index': index }}>
              <div className="card-grid" aria-hidden="true" /><div className="card-orbit" aria-hidden="true" />
              <header><span>{item.category}</span><b>{String(index + 1).padStart(2, '0')} / {String(favorites.length).padStart(2, '0')}</b></header>
              <strong aria-hidden="true">{item.short}</strong>
              <div className="favorite-caption"><h3>{item.title}</h3><div className="favorite-details"><p>{item.caption}</p><ul>{item.moods.map(mood => <li key={mood}>{mood}</li>)}</ul></div></div>
            </article>
          ))}
        </div>
      </div>
      <p className="gallery-hint reveal">DRAG / SWIPE TO BROWSE — HOVER A FILE TO DECLASSIFY</p>
      <div className="culture-bridge reveal" aria-hidden="true">
        <span>REFERENCE SHELF</span><i /><b>LIVE SIGNAL</b><i /><span>RECENT WATCHES</span>
      </div>
      <FilmHistory embedded />
    </section>
  );
}
