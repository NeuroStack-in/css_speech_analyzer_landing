import type { CSSProperties } from "react";

const d = (n: number) => ({ "--d": n } as CSSProperties);

export default function Install() {
  return (
    <section className="install-section" id="install">
      <div className="container">
        <header className="rv-scroll features-head">
          <h2 className="section-title">How to install</h2>
          <p className="section-sub">
            For devices running <strong>Android 12 or newer</strong> — three quick
            steps and you&apos;re captioning.
          </p>
        </header>

        <div className="install-grid">
          <article className="icard rv-scroll" style={d(0)}>
            <span className="icard__num">1</span>
            <h3>Allow unknown apps</h3>
            <ol>
              <li>
                Open your <strong>Settings</strong> app.
              </li>
              <li>
                Go to <strong>Apps</strong> → <strong>Special app access</strong> →{" "}
                <strong>Install unknown apps</strong>.
              </li>
              <li>
                Choose the app you&apos;ll download with — <strong>Chrome</strong>,{" "}
                <strong>Google Drive</strong>, or <strong>Files</strong>.
              </li>
              <li>
                Tap <strong>Allow from this source</strong>.
              </li>
            </ol>
          </article>

          <article className="icard rv-scroll" style={d(1)}>
            <span className="icard__num">2</span>
            <h3>Download the APK</h3>
            <ol>
              <li>
                Tap <a href="#download"><strong>Download for Android</strong></a> below —
                the APK saves through your browser.
              </li>
              <li>
                Or open the shared <strong>Google Drive</strong> link and locate the{" "}
                <strong>CSS Speech Generator</strong> APK.
              </li>
              <li>
                Tap the <strong>three dots (⋮)</strong> next to the file and select{" "}
                <strong>Download</strong>.
              </li>
              <li>Wait for the download to complete.</li>
            </ol>
          </article>

          <article className="icard rv-scroll" style={d(2)}>
            <span className="icard__num">3</span>
            <h3>Install &amp; open</h3>
            <ol>
              <li>
                Tap the <strong>download notification</strong>, or go to{" "}
                <strong>Files</strong> → <strong>Downloads</strong>.
              </li>
              <li>Tap the APK file.</li>
              <li>
                Tap <strong>Install</strong> on the prompt.
              </li>
              <li>
                Once installed, tap <strong>Open</strong> and start captioning.
              </li>
            </ol>
          </article>
        </div>

        <aside className="install-note rv-scroll" aria-label="Troubleshooting">
          <h4>Seeing &quot;App not installed&quot;?</h4>
          <ul>
            <li>Check if an older version of the app is installed — uninstall it first.</li>
            <li>
              Re-enable the <strong>Install unknown apps</strong> permission if needed.
            </li>
            <li>Free up storage space if your device is low on memory.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
