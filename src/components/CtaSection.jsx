import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "../config/contact";

export function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-orbit cta-orbit--one" aria-hidden="true" />
      <div className="cta-orbit cta-orbit--two" aria-hidden="true" />
      <div className="cta-content">
        <p>Seu próximo capítulo pode começar agora.</p>
        <h2 id="cta-title">Vamos encontrar o console que combina com o seu momento?</h2>
        <a className="button button--dark" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
          Conversar com a Game Zero
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
