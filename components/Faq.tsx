const QA = [
  {
    q: "What is CSS Speech Analyzer?",
    a: "CSS Speech Analyzer is a mobile app that turns speech into live captions, with speech intensity and pitch shown alongside the words. It's built first for Deaf and hard-of-hearing users, and it's equally useful in loud workshops, lectures, and anywhere hearing speech is hard.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. A distilled Vosk model runs entirely on your phone, so captions, intensity, and pitch all work offline. When you're connected, tougher audio can be offloaded to cloud servers for higher accuracy — that's optional and off by default.",
  },
  {
    q: "What do MFCC and BiLSTM actually do?",
    a: "MFCC (Mel Frequency Cepstral Coefficients) converts raw sound into compact features modeled on human hearing. The BiLSTM network then reads those features forwards and backwards through the sentence, so each word is recognized with full context. A final text-normalization pass turns raw output like 'ten thirty' into a readable '10:30'.",
  },
  {
    q: "Is my audio private?",
    a: "By default, audio never leaves your phone — recognition happens on-device. If you enable cloud assist, audio segments are sent over an encrypted connection for processing and are not used for anything other than generating your captions.",
  },
  {
    q: "Is the app free?",
    a: "Yes — CSS Speech Analyzer is a research project by Prof. Chander Shekhar Singh (Department of Linguistics, Rajdhani College, University of Delhi), and the app is free for the duration of the research beta. Using it (and sharing feedback) directly supports accessibility research.",
  },
];

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <h2 className="rv-scroll">
            Frequently
            <br />
            asked questions
          </h2>

          <div className="rv-scroll">
            {QA.map((item, i) => (
              <details className="faq" open={i === 0} key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
