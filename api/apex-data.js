let cachedData = null;
let cacheExpires = 0;

export async function getApexStats(apiKey) {
  if (!apiKey) throw Object.assign(new Error('Tracker Network API key is not configured.'), { status: 503 });
  if (cachedData && Date.now() < cacheExpires) return cachedData;

  const apiResponse = await fetch(
    'https://public-api.tracker.gg/v2/apex/standard/profile/psn/tomzy2005',
    { headers: { 'TRN-Api-Key': apiKey.trim() } },
  );
  const rawBody = await apiResponse.text();
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    throw Object.assign(new Error(rawBody.trim() || 'Tracker Network returned an empty response.'), { status: 502 });
  }
  if (!apiResponse.ok || !payload.data) {
    const message = payload.message || payload.errors?.[0]?.message || 'Unable to retrieve Tracker Network stats.';
    throw Object.assign(new Error(message), { status: apiResponse.status || 502 });
  }

  const segments = payload.data.segments || [];
  const overview = segments.find(segment => segment.type === 'overview') || segments[0] || {};
  const legendSegment = segments.find(segment => segment.type === 'legend') || {};
  const stats = overview.stats || {};
  const rankStat = stats.rankScore || stats.arenaRankScore || {};
  const excluded = new Set(['level', 'rankScore', 'arenaRankScore']);

  cachedData = {
    player: payload.data.platformInfo?.platformUserHandle || 'tomzy2005',
    platform: (payload.data.platformInfo?.platformSlug || 'psn').toUpperCase(),
    level: stats.level?.value,
    rank: {
      rankName: rankStat.metadata?.rankName || rankStat.displayValue || 'Unranked',
      rankDiv: rankStat.metadata?.rankDiv,
      rankScore: rankStat.value,
    },
    legend: legendSegment.metadata?.name,
    legendImage: legendSegment.metadata?.imageUrl || legendSegment.metadata?.tallImageUrl,
    trackers: Object.entries(stats)
      .filter(([key, stat]) => !excluded.has(key) && typeof stat?.value === 'number')
      .map(([key, stat]) => ({ name: stat.displayName || key, value: stat.value, rank: stat.rank ?? null })),
    updatedAt: new Date().toISOString(),
  };
  cacheExpires = Date.now() + 15 * 60 * 1000;
  return cachedData;
}
