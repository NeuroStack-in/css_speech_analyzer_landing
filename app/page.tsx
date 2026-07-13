import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screens from "@/components/Screens";
import DarkCta from "@/components/DarkCta";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Screens />
      <DarkCta />
      <Faq />
    </main>
  );
}
