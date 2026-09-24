const generations = [
  "PlayStation 2",
  "PlayStation 3",
  "PlayStation 4",
  "PlayStation 5",
  "Xbox",
  "Nintendo",
  "Portáteis",
  "Jogos",
];

export function GenerationMarquee() {
  const repeatedGenerations = [...generations, ...generations];

  return (
    <div className="generation-marquee" aria-label="Plataformas e categorias atendidas">
      <div className="generation-marquee__track">
        {repeatedGenerations.map((generation, index) => (
          <span key={`${generation}-${index}`} aria-hidden={index >= generations.length}>
            {generation}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
