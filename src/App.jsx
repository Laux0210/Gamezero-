import React from "react";
import { Header } from "./components/Header";
import { AnimatedSection } from "./components/AnimatedSection";
import { HeroSection } from "./components/HeroSection";
import { PlatformsProof } from "./components/PlatformsProof";
import { BentoSection } from "./components/BentoSection";
import { LargeQuote } from "./components/LargeQuote";
import { ServicesPricing } from "./components/ServicesPricing";
import { CommunityGrid } from "./components/CommunityGrid";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { FooterSection } from "./components/FooterSection";
import { WhatsAppChatWidget } from "./components/WhatsAppChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-white selection:text-black">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* Floating / Sticky Header that follows on scroll */}
      <Header />

      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <main id="conteudo" className="w-full max-w-[1380px] mx-auto relative px-2.5 sm:px-4 md:px-6">
          <HeroSection />
        </main>

        {/* Platforms / Multigeneration Proof */}
        <AnimatedSection className="relative z-10 w-full mt-2 md:mt-4" delay={0.1}>
          <PlatformsProof />
        </AnimatedSection>

        {/* Bento Grid: 6 Unique Gamer Offerings */}
        <AnimatedSection className="relative z-10 w-full mt-4 md:mt-8" delay={0.15}>
          <BentoSection />
        </AnimatedSection>

        {/* Large Statement Manifesto Quote */}
        <AnimatedSection className="relative z-10 w-full mt-4 md:mt-8" delay={0.15}>
          <LargeQuote />
        </AnimatedSection>

        {/* Services & Next Move Cards */}
        <AnimatedSection className="relative z-10 w-full mt-6 md:mt-10" delay={0.15}>
          <ServicesPricing />
        </AnimatedSection>

        {/* Community, Storefront & Real Instagram Feed Grid */}
        <AnimatedSection className="relative z-10 w-full mt-6 md:mt-10" delay={0.15}>
          <CommunityGrid />
        </AnimatedSection>

        {/* Animated FAQ Accordion */}
        <AnimatedSection className="relative z-10 w-full mt-6 md:mt-10" delay={0.15}>
          <FaqSection />
        </AnimatedSection>

        {/* Atmospheric Radiant CTA Section */}
        <AnimatedSection className="relative z-10 w-full mt-6 md:mt-10" delay={0.15}>
          <CtaSection />
        </AnimatedSection>

        {/* Sleek Modern Footer */}
        <AnimatedSection className="relative z-10 w-full" delay={0.1}>
          <FooterSection />
        </AnimatedSection>
      </div>

      {/* Interactive WhatsApp Virtual Assistant */}
      <WhatsAppChatWidget />
    </div>
  );
}
