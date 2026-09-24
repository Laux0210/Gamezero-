import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { GenerationMarquee } from "./components/GenerationMarquee";
import { ExperienceBento } from "./components/ExperienceBento";
import { MotionExperience } from "./components/MotionExperience";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { FooterSection } from "./components/FooterSection";
import { WhatsAppChatWidget } from "./components/WhatsAppChatWidget";

export default function App() {
  return (
    <main className="site-root w-full max-w-full overflow-x-hidden bg-ink text-white">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <div id="conteudo">
        <HeroSection />
        <GenerationMarquee />
        <ExperienceBento />
        <MotionExperience />
        <FaqSection />
        <CtaSection />
      </div>

      <FooterSection />
      <WhatsAppChatWidget />
    </main>
  );
}
