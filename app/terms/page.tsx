import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — CSS Speech Analyzer",
  description:
    "Terms of use for CSS Speech Analyzer — a free research-beta speech captioning app for Deaf and hard-of-hearing users.",
};

export default function TermsPage() {
  return (
    <main className="legal">
      <div className="container container--narrow">
        <h1>
          Terms of <span className="cap">Use</span>
        </h1>
        <span className="legal__updated mono">LAST UPDATED · JULY 2026</span>

        <p>
          By downloading or using CSS Speech Analyzer (&quot;the application&quot;), you agree to the
          following terms.
        </p>

        <h2>Research beta</h2>
        <p>
          The application is a research project owned by Prof. Chander Shekhar Singh,
          Department of Linguistics, Rajdhani College, University of Delhi, and is
          provided free of charge during the research
          beta for personal, educational, and research use. You may not sell, rebrand, or
          redistribute the application or its bundled models as your own product.
        </p>

        <h2>Captions may contain errors</h2>
        <p>
          Automatic speech recognition is imperfect: captions, intensity, and pitch
          readings are approximations and may contain mistakes, especially in noise or
          with overlapping speakers. In high-stakes situations — medical consultations,
          legal proceedings, emergencies — the application should support, never replace,
          a qualified sign-language interpreter or other professional access services.
        </p>

        <h2>Recordings and consent</h2>
        <p>
          You are responsible for ensuring you have the legal right and any required
          consent to caption or record conversations involving other people, and for
          complying with the laws that apply to your use.
        </p>

        <h2>Third-party components</h2>
        <p>
          The application includes open-source components — including the Vosk speech
          recognition engine — each governed by its own license. Attribution is available
          in the application&apos;s About screen.
        </p>

        <h2>No warranty</h2>
        <p>
          The application is provided &quot;as is&quot;, without warranty of any kind,
          express or implied, including fitness for a particular purpose. To the maximum
          extent permitted by law, the developers accept no liability for any loss or
          damage arising from use of the application.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be revised for future releases; the version accompanying the
          release you use applies to that release.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:support@cssspeechgen.app">support@cssspeechgen.app</a>.
        </p>
      </div>
    </main>
  );
}
