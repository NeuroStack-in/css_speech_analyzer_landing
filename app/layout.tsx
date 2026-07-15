import type { Metadata } from "next";
import { Roboto_Serif, Roboto_Flex } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-roboto-serif",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSS Speech Analyzer — Every Conversation, Made Visible | ASR for Deaf & Hard-of-Hearing Users",
  description:
    "CSS Speech Analyzer turns speech into live captions with intensity and pitch you can watch — built for Deaf and hard-of-hearing users. A distilled Vosk model runs on-device, backed by cloud servers. MFCC · BiLSTM · text normalization. A research project by Prof. Chander Shekhar Singh, Rajdhani College, University of Delhi.",
  openGraph: {
    title: "CSS Speech Analyzer — Every Conversation, Made Visible",
    description:
      "Live captions, speech intensity, and pitch analysis for Deaf and hard-of-hearing users. Distilled Vosk ASR on-device, cloud-assisted.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top">
      <body className={`${robotoSerif.variable} ${robotoFlex.variable}`}>
        <Nav />
        {children}
        <Footer />
        <Effects />
        <SmoothScroll />
      </body>
    </html>
  );
}
