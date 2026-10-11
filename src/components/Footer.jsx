export default function Footer() {
  return (
    <footer id="contact">
      <p className="eyebrow">CONTACT</p>
      <h2>Let’s talk.</h2>
      <a className="footer-email" href="mailto:tomiwa.m.adewumi@gmail.com">
        tomiwa.m.adewumi@gmail.com <span aria-hidden="true">↗</span>
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tomiwa Adewumi</span>
        <span className="social-links">
          <a
            href="https://github.com/Tomiwa-Adewumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://ca.linkedin.com/in/tomiwaadewumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </span>
      </div>
    </footer>
  );
}
