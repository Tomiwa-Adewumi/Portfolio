import { getLetterboxdFilms } from './letterboxd-data.js';

export default async function handler(_request, response) {
  try {
    const data = await getLetterboxdFilms();
    response.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');
    return response.status(200).json(data);
  } catch (error) {
    return response.status(error.status || 502).json({ error: error.message });
  }
}
