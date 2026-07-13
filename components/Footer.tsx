import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              Speech, made visible — live captions with intensity and pitch analysis,
              powered by a distilled Vosk model on-device with cloud assist for the
              heavy lifting.
            </p>
            <p className="footer__contact">
              Get in touch — <a href="mailto:support@cssspeechgen.app">support@cssspeechgen.app</a>
            </p>
          </div>

          <a className="beta-card" href="mailto:support@cssspeechgen.app?subject=Research%20beta">
            <div>
              <h4>Join the research beta</h4>
              <p>Help shape accessible ASR — feedback from early users guides the thesis.</p>
            </div>
            <span className="beta-card__arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20">
                <path
                  d="M4 10h12m0 0l-4.5-4.5M16 10l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>© 2026 CSS Speech Generator. All rights reserved.</p>
          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
          <p className="footer__credit">
            Project owner: Prof. Chander Shekhar Singh, Department of Linguistics,
            Rajdhani College, University of Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
}
