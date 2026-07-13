import type { CSSProperties } from "react";

const d = (n: number) => ({ "--d": n } as CSSProperties);
const ld = (s: string) => ({ "--ld": s } as CSSProperties);

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__copy">
        <h1 className="hero__title">
          <span className="hline" style={ld("0.12s")}>
            <span>Every conversation,</span>
          </span>
          <span className="hline" style={ld("0.26s")}>
            <span>
              <em>made visible.</em>
            </span>
          </span>
        </h1>
        <p className="hero__sub rv" style={d(2)}>
          Live captions with intensity and pitch you can watch — built for Deaf and
          hard-of-hearing users, powered by on-device AI.
        </p>
        <div className="hero__actions rv" style={d(3)}>
          <a href="#download" className="btn btn--aqua btn--lg">
            Get the app
          </a>
          <a href="#how" className="btn btn--ghost btn--lg">
            See how it works
          </a>
        </div>
        <p className="hero__meta rv" style={d(4)}>
          Android &amp; iOS · captions work offline · no account
        </p>
      </div>
    </section>
  );
}
