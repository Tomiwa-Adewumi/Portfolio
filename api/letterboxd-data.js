const FEED_URL = 'https://letterboxd.com/t0mmy_irl/rss/';
let cachedData = null;
let cacheExpires = 0;

function decode(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&apos;|&#039;/g, "'").replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .trim();
}

function field(item, tag) {
  return decode(item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1]);
}

function parseFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, 6).map(([, item]) => {
    const description = field(item, 'description');
    const poster = description.match(/<img[^>]+src=["']([^"']+)/i)?.[1] || '';
    const review = decode(description.replace(/<p>\s*<img[\s\S]*?<\/p>/i, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
    return {
      title: field(item, 'letterboxd:filmTitle'),
      year: field(item, 'letterboxd:filmYear'),
      rating: Number(field(item, 'letterboxd:memberRating')) || 0,
      watchedDate: field(item, 'letterboxd:watchedDate'),
      rewatch: field(item, 'letterboxd:rewatch') === 'Yes',
      link: field(item, 'link'),
      poster,
      review,
    };
  }).filter(film => film.title);
}

export async function getLetterboxdFilms() {
  if (cachedData && Date.now() < cacheExpires) return cachedData;
  const response = await fetch(FEED_URL, { headers: { 'User-Agent': 'Tomiwa-Portfolio/1.0' } });
  if (!response.ok) throw Object.assign(new Error('Unable to retrieve the Letterboxd feed.'), { status: response.status });
  const films = parseFeed(await response.text());
  if (!films.length) throw Object.assign(new Error('The Letterboxd feed contained no films.'), { status: 502 });
  cachedData = { username: 't0mmy_irl', profile: 'https://letterboxd.com/t0mmy_irl/', films };
  cacheExpires = Date.now() + 30 * 60 * 1000;
  return cachedData;
}
