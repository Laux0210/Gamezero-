import { Community } from "./components/Community";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NextMove } from "./components/NextMove";
import { Process } from "./components/Process";
import { WhyUs } from "./components/WhyUs";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <NextMove />
        <Process />
        <Community />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
