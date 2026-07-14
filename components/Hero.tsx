import type { CSSProperties } from "react";

const d = (n: number) => ({ "--d": n } as CSSProperties);
const w = (n: number) => ({ "--w": n } as CSSProperties);

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__copy">
        <h1 className="hero__title">
          <span className="hword" style={w(0)}>
            Every
          </span>{" "}
          <span className="hword" style={w(1)}>
            conversation,
          </span>
          <br />
          <em>
            <span className="hword" style={w(2)}>
              made
            </span>{" "}
            <span className="hword" style={w(3)}>
              visible.
            </span>
          </em>
        </h1>
        <p className="hero__sub rv" style={d(4)}>
          Live captions with intensity and pitch you can watch — built for Deaf and
          hard-of-hearing users, powered by on-device AI.
        </p>
        <div className="hero__actions rv" style={d(5)}>
          <a href="#download" className="btn btn--aqua btn--lg">
            Get the app
          </a>
          <a href="#how" className="btn btn--ghost btn--lg">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
