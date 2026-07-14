import UiWave from "./UiWave";

/* curved connector between steps — solid line, fades in on scroll */
function StepLink({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`step-link${flip ? " step-link--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M27,0 C27,55 73,45 73,100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <header className="how__head rv-scroll">
          <h2 className="section-title">How it works</h2>
          <p className="section-sub">
            From a voice in the room to readable text in your hand — in about 200
            milliseconds.
          </p>
        </header>

        {/* Step 1 */}
        <div className="step-row">
          <div className="step-fig rv-left">
            <div className="ui-card">
              <div className="float-card__head">
                <span className="float-card__dot" />
                LISTENING
              </div>
              <div className="livecap" aria-hidden="true">
                <span>The</span>
                <span>doorbell</span>
                <span>is</span>
                <span className="is-new">ringing.</span>
              </div>
              <UiWave bars={22} live />
            </div>
          </div>
          <div className="step-copy rv-right">
            <span className="step-num">1</span>
            <h3>Point your phone at the conversation.</h3>
            <p>
              Open the app and let it listen — a doorbell, a lecture, a friend across
              the table. Capture starts instantly, with no account and no setup.
            </p>
          </div>
        </div>

        <StepLink />

        {/* Step 2 */}
        <div className="step-row step-row--flip">
          <div className="step-copy rv-left">
            <span className="step-num">2</span>
            <h3>Processed by a four-stage speech pipeline.</h3>
            <p>
              MFCC features model how humans hear. A BiLSTM reads the sentence forwards
              and backwards. A distilled Vosk model decodes the words, and text
              normalization polishes them into readable captions.
            </p>
          </div>
          <div className="step-fig rv-right">
            <div className="ui-card">
              <div className="float-card__head">
                <span className="float-card__dot" />
                PIPELINE
              </div>
              <div className="chipflow" aria-hidden="true">
                <span className="chipflow__chip">MFCC</span>
                <span className="chipflow__arrow">→</span>
                <span className="chipflow__chip">BiLSTM</span>
                <span className="chipflow__arrow">→</span>
                <span className="chipflow__chip">VOSK</span>
                <span className="chipflow__arrow">→</span>
                <span className="chipflow__chip">NORMALIZE</span>
              </div>
              <p className="norm-demo">
                &quot;ten thirty&quot; becomes <strong>10:30</strong>
              </p>
            </div>
          </div>
        </div>

        <StepLink flip />

        {/* Step 3 */}
        <div className="step-row">
          <div className="step-fig rv-left">
            <div className="ui-card">
              <div className="float-card__head">
                <span className="float-card__dot" />
                ON SCREEN
              </div>
              <div className="livecap" aria-hidden="true">
                <span>Your</span>
                <span>appointment</span>
                <span>is</span>
                <span>at</span>
                <span className="is-new">10:30.</span>
              </div>
              <div className="meter__track" style={{ marginTop: "0.9rem" }}>
                <span className="meter__fill" />
              </div>
            </div>
          </div>
          <div className="step-copy rv-right">
            <span className="step-num">3</span>
            <h3>Accurate captions, delivered in real time.</h3>
            <p>
              Captions stream word by word, with loudness and pitch beside them. Offline
              by default — and when you&apos;re online, cloud servers quietly boost accuracy
              on tough audio.
            </p>
            <a href="#download" className="btn btn--aqua btn--sm">
              Get the app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
