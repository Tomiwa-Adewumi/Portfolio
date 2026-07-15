export default function BootSequence({ complete }) {
  return (
    <div className={`boot ${complete ? 'done' : ''}`} aria-hidden="true">
      <div className="boot-log">
        <p>&gt; INITIALIZING TMA/OS...</p>
        <p>&gt; LOADING PROFILE: ADEWUMI_T</p>
        <p>&gt; MOUNTING /CODE /GAMES /SYSTEMS</p>
        <p>&gt; SIGNAL LOCKED <span>▊</span></p>
      </div>
    </div>
  );
}
