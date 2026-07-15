import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CSS Speech Analyzer",
  description:
    "Privacy policy for CSS Speech Analyzer. Speech recognition runs on-device by default; optional cloud assist is encrypted and off by default.",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="container container--narrow">
        <h1>
          Privacy <span className="cap">Policy</span>
        </h1>
        <span className="legal__updated mono">LAST UPDATED · JULY 2026</span>

        <p>
          CSS Speech Analyzer was designed around a simple principle: your voice is your data. This
          policy explains what the application does — and deliberately does not do — with
          the information it touches.
        </p>

        <h2>On-device by default</h2>
        <p>
          Live captions, intensity, and pitch analysis run entirely on your phone using a
          locally installed distilled Vosk model. In this default mode, audio and
          transcriptions are processed and stored on your device only and are never
          uploaded anywhere.
        </p>

        <h2>Cloud assist (optional, off by default)</h2>
        <p>
          If you enable cloud assist, short audio segments may be sent to our servers over
          an encrypted connection so that a larger model can decode difficult audio with
          higher accuracy. These segments are used only to generate your captions, are not
          used to build advertising or marketing profiles, and are not sold or shared with
          third parties. You can turn cloud assist off at any time in settings, and the
          app returns fully to on-device processing.
        </p>

        <h2>What we collect</h2>
        <p>
          The application requires no account and contains no advertising or third-party
          analytics SDKs. As part of the doctoral research study, the app may ask — always
          explicitly and always optionally — whether you want to share anonymized usage
          feedback to improve recognition quality for Deaf and hard-of-hearing users.
          Declining changes nothing about how the app works.
        </p>

        <h2>Permissions</h2>
        <ul>
          <li>
            <strong>Microphone</strong> — requested only when you start captioning, used
            solely to capture the audio you choose to caption.
          </li>
          <li>
            <strong>Storage / files</strong> — requested only if you choose to save
            transcripts to your device.
          </li>
        </ul>
        <p>
          All permissions are requested at runtime through your operating system&apos;s
          granular permission prompts, and can be revoked at any time in system settings.
        </p>

        <h2>Your responsibility when recording others</h2>
        <p>
          If you caption conversations involving other people, you are responsible for
          complying with the consent and recording laws that apply where you are.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If a future version of the application changes how data is handled, this policy
          will be updated and the change noted in the release notes before it takes
          effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy can be sent to{" "}
          <a href="mailto:support@cssspeechgen.app">support@cssspeechgen.app</a>.
        </p>
      </div>
    </main>
  );
}
