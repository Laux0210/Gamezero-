import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const posts = [
  {
    image: "/instagram/playstation-wall.jpg",
    alt: "Controles e jogos de PlayStation expostos na Game Zero",
    title: "Consoles, controles e jogos no dia a dia da loja.",
    href: "https://www.instagram.com/lojagamezero/p/DW45KXckyGK/",
    className: "community-post-featured",
  },
  {
    image: "/instagram/storefront.jpg",
    alt: "Fachada da loja física Game Zero",
    title: "Uma loja real, construída perto de quem joga.",
    href: "https://www.instagram.com/lojagamezero/p/CkHHV5cPfD-/",
    className: "community-post-tall",
  },
  {
    image: "/instagram/god-of-war-front.jpg",
    alt: "Entrada da Game Zero com arte de God of War Ragnarök",
    title: "A cultura gamer começa antes mesmo de entrar.",
    href: "https://www.instagram.com/lojagamezero/p/CkRYLBPPqHQ/",
    className: "community-post-wide",
  },
];

export function Community() {
  return (
    <section id="comunidade" className="deferred-section section-shell border-y border-line bg-panel">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          title="A loja acontece todos os dias na @lojagamezero."
          description="Publicações públicas da própria marca: loja, acervo e bastidores para você acompanhar de perto."
        />
        <a className="button button-outline min-h-12 shrink-0" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
          <Icon name="instagram" className="h-5 w-5" />
          Seguir no Instagram
        </a>
      </div>

      <div className="community-grid mt-14">
        {posts.map((post) => (
          <a
            className={`community-post ${post.className}`}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            key={post.href}
          >
            <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
            <span className="community-post-overlay">
              <span>{post.title}</span>
              <Icon name="arrow" className="h-5 w-5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
