import type { CSSProperties } from "react";

const d = (n: number) => ({ "--d": n } as CSSProperties);
const glow = (c: string) => ({ "--g1": c } as CSSProperties);

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <header className="rv-scroll features-head">
          <h2 className="section-title">
            Captioning that
            <br />
            feels effortless.
          </h2>
          <p className="section-sub">
            Words, loudness, and melody — everything a voice carries, translated into
            visuals the moment it&apos;s spoken.
          </p>
        </header>

        <div className="trio">
          <div className="trio__item rv-pop" style={d(0)}>
            <div className="glow" style={glow("#2EA5AC")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="#0C3236" strokeWidth="1.6" fill="none" />
                <path d="M6.5 12h6M6.5 15.5h11M14.5 12h3" stroke="#0C3236" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Instant captions</h3>
            <p>Streaming ASR lands every word on screen as it&apos;s spoken.</p>
          </div>

          <div className="trio__item rv-pop" style={d(1)}>
            <div className="glow" style={glow("#E0C97F")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 10v4h3l5 4V6l-5 4H4z"
                  stroke="#0C3236" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                />
                <path d="M15.5 9.5a4 4 0 010 5M18 7a8 8 0 010 10" stroke="#0C3236" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Visible loudness</h3>
            <p>A live dB meter shows whisper, talk, or shout at a glance.</p>
          </div>

          <div className="trio__item rv-pop" style={d(2)}>
            <div className="glow" style={glow("#6FC3D6")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 17c3-1 4-8 7-8s3 5 6 5 3-3 5-4" stroke="#0C3236" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <circle cx="10" cy="9" r="1.3" fill="#0C3236" />
                <circle cx="16" cy="14" r="1.3" fill="#0C3236" />
              </svg>
            </div>
            <h3>Speech, with melody</h3>
            <p>Pitch tracking draws the rise of a question, the fall of a statement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
