import type { CSSProperties } from "react";

const SHOTS = [
  {
    src: "/screens/css-1.jpeg",
    title: "Choose your model",
    caption:
      "Three offline Vosk models — English (US), English (Indian), and Hindi — switchable in one tap.",
    alt: "Model selection dialog listing three Vosk speech models",
  },
  {
    src: "/screens/css-2.jpeg",
    title: "MRI/CT viewer",
    caption:
      "Open medical imaging beside your speech data, with format, path, and size at a glance.",
    alt: "MRI/CT view screen showing the viewer and image information",
  },
  {
    src: "/screens/css-3.jpeg",
    title: "Playback & waveform",
    caption:
      "Scrub the full waveform, set start and end points, and replay any segment precisely.",
    alt: "Playback screen with a recorded waveform and player controls",
  },
  {
    src: "/screens/css-4.jpeg",
    title: "Pick an image",
    caption:
      "Load MRI or CT scans straight from your device to view alongside recordings.",
    alt: "MRI viewer screen with a pick image button",
  },
  {
    src: "/screens/css-5.jpeg",
    title: "Record & manage",
    caption:
      "Capture from the microphone or import audio files, with your whole library one tap away.",
    alt: "Home screen with waveform preview, record and upload buttons, and audio file list",
  },
];

export default function Screens() {
  return (
    <section className="screens-section" id="screens">
      <div className="container">
        <header className="rv-scroll features-head">
          <h2 className="section-title section-title--big">
            Straight from
            <br />
            the app.
          </h2>
          <p className="section-sub">
            Real screens, not mockups — this is what you install.
          </p>
        </header>

        <div className="shots">
          {SHOTS.map((s, i) => (
            <figure className="shot rv-scroll" style={{ "--d": i % 2 } as CSSProperties} key={s.src}>
              <figcaption>
                <span className="shot__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="shot__title">{s.title}</h3>
                <p className="shot__caption">{s.caption}</p>
              </figcaption>
              <div className="shot__frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
