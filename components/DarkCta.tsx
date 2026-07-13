export default function DarkCta() {
  return (
    <section className="cta-section" id="download">
      <div className="container">
        <div className="dark-panel rv-zoom">
          <h2>Every conversation, within reach.</h2>
          <p className="dark-panel__sub">
            A research project by <strong>Prof. Chander Shekhar Singh</strong>,
            Department of Linguistics, Rajdhani College, University of Delhi — free
            while the research beta runs.
          </p>
          <div className="dl-stats">
            <div className="dl-stat">
              <span>Version</span>
              <strong>1.0.0-beta</strong>
            </div>
            <div className="dl-stat">
              <span>OS support</span>
              <strong>Android 8.0+ · iOS 14+</strong>
            </div>
            <div className="dl-stat">
              <span>File size</span>
              <strong>≈ 364 MB</strong>
            </div>
          </div>
          <a
            className="btn btn--light btn--lg"
            href="/css-speech-generator-v1.0.0-beta.apk"
            download
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 16h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Download for Android
          </a>
          <p className="dark-panel__meta">
            Includes the offline speech models · no account, no telemetry
          </p>
          <p className="dark-panel__alt">
            On iPhone? <a href="#">Join the TestFlight beta</a>
          </p>
        </div>
      </div>
    </section>
  );
}
