import { Community } from "./components/Community";
import { Expertise } from "./components/Expertise";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { WhyUs } from "./components/WhyUs";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Expertise />
        <Process />
        <WhyUs />
        <Community />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
