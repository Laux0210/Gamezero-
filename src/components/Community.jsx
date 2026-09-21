import { CONTACT } from "../config/contact";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const posts = [
  { type: "UNBOXING", title: "A primeira abertura é quase um ritual.", code: "UNB / 01" },
  { type: "REVIEW RÁPIDO", title: "O que vale a pena antes de você decidir.", code: "REV / 02" },
  { type: "SETUP DA COMUNIDADE", title: "Espaços reais de quem leva o game a sério.", code: "SET / 03" },
  { type: "NOVIDADES", title: "Lançamentos, reposições e bastidores nos Stories.", code: "NEW / 04" },
];

export function Community() {
  return (
    <section id="comunidade" className="section-shell border-y border-line bg-panel">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading kicker="COMUNIDADE" title="O jogo continua na @lojagamezero." />
        <a className="button button-outline min-h-12 shrink-0" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
          <Icon name="instagram" className="h-5 w-5" />
          Seguir no Instagram
        </a>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, index) => (
          <article className={`social-card social-card-${index + 1}`} key={post.type}>
            <div className="social-card-grid" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[0.68rem] font-bold tracking-[0.14em] text-silver">
                <span>{post.type}</span>
                <span>{post.code}</span>
              </div>
              <h3 className="max-w-[14rem] font-display text-3xl font-bold leading-[0.95] text-white">{post.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
