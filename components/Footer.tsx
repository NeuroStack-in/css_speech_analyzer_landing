import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>
              Speech, made visible — live captions with intensity and pitch analysis,
              powered by a distilled Vosk model on-device with cloud assist for the
              heavy lifting.
            </p>
          </div>
          <p className="footer__contact">
            Get in touch —{" "}
            <a href="mailto:support@cssspeechgen.app">support@cssspeechgen.app</a>
          </p>
        </div>

        <div className="footer__bottom">
          <p>© 2026 CSS Speech Generator. All rights reserved.</p>
          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
          <p className="footer__credit">
            Project owner: <strong>Prof. Chander Shekhar Singh</strong>, Department of
            Linguistics, Rajdhani College, University of Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
}
