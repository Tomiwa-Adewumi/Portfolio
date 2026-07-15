import { useEffect, useState } from 'react';

const formatNumber = value => typeof value === 'number' ? new Intl.NumberFormat().format(value) : '—';

export default function ApexStats() {
  const [state, setState] = useState({ loading: true, data: null, error: '' });

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/apex', { signal: controller.signal })
      .then(async response => {
        const rawBody = await response.text();
        let body;
        try {
          body = JSON.parse(rawBody);
        } catch {
          throw new Error(rawBody.trim() || 'The stats server returned an empty response.');
        }
        if (!response.ok) throw new Error(body.error);
        return body;
      })
      .then(data => setState({ loading: false, data, error: '' }))
      .catch(error => {
        if (error.name !== 'AbortError') setState({ loading: false, data: null, error: error.message });
      });
    return () => controller.abort();
  }, []);

  if (state.loading) return <div className="stats-state"><span />SYNCING PLAYER SIGNAL...</div>;
  if (state.error) return <div className="stats-state error"><strong>SIGNAL UNAVAILABLE</strong><p>{state.error}</p><small>Update <code>TRACKER_API_KEY</code> in <code>.env</code>. Vite will reload the endpoint automatically.</small></div>;

  const { data } = state;
  const rankName = data.rank?.rankName || 'Unranked';
  const rankDivision = data.rank?.rankDiv ? ` ${data.rank.rankDiv}` : '';
  return (
    <div className="apex-profile">
      <header className="apex-profile-head">
        <div><p>PSN // LIVE PLAYER RECORD</p><h3>{data.player}</h3><span>{data.platform} · {data.legend || 'LEGEND UNKNOWN'}</span></div>
        {data.legendImage && <img src={data.legendImage} alt="" />}
      </header>
      <div className="primary-stats">
        <article><small>ACCOUNT LEVEL</small><strong>{formatNumber(data.level)}</strong></article>
        <article><small>BR RANK</small><strong>{rankName}{rankDivision}</strong><span>{formatNumber(data.rank?.rankScore)} RP</span></article>
      </div>
      <div className="tracker-grid">
        {data.trackers.length ? data.trackers.map(tracker => <article key={tracker.name}><small>{tracker.name}</small><strong>{formatNumber(tracker.value)}</strong>{tracker.rank && <span>#{formatNumber(tracker.rank)}</span>}</article>) : <p>No public trackers are currently equipped.</p>}
      </div>
      <footer className="stats-meta"><span>UPDATED {new Date(data.updatedAt).toLocaleString()}</span><a href="https://tracker.gg/apex/profile/psn/tomzy2005/overview" target="_blank" rel="noopener noreferrer">Data provided by Tracker Network ↗</a></footer>
    </div>
  );
}
