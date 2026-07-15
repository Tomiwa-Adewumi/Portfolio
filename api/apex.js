import { getApexStats } from './apex-data.js';

export default async function handler(_request, response) {
  try {
    const data = await getApexStats(process.env.TRACKER_API_KEY || process.env.APEX_API_KEY);
    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return response.status(200).json(data);
  } catch (error) {
    return response.status(error.status || 502).json({ error: error.message });
  }
}
