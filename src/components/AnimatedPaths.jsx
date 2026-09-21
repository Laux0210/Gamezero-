const PATH_COUNT = 10;

function PathField({ direction }) {
  const paths = Array.from({ length: PATH_COUNT }, (_, index) => {
    const offset = index * 16;
    const startX = direction > 0 ? -220 + offset * 0.7 : 1660 - offset * 0.7;
    const endX = direction > 0 ? 1660 - offset * 0.25 : -220 + offset * 0.25;
    const startY = -100 + offset;
    const endY = 760 - offset * 0.66;

    return {
      id: `${direction}-${index}`,
      d: `M ${startX} ${startY} C ${360 + direction * offset} ${80 + offset * 0.22}, ${980 - direction * offset} ${560 - offset * 0.18}, ${endX} ${endY}`,
      opacity: 0.055 + index * 0.0045,
      width: 0.55 + index * 0.035,
    };
  });

  return (
    <svg
      aria-hidden="true"
      className={`path-field path-field-${direction > 0 ? "forward" : "reverse"}`}
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
        />
      ))}
    </svg>
  );
}

export function AnimatedPaths() {
  return (
    <div className="hero-paths" aria-hidden="true">
      <PathField direction={1} />
      <PathField direction={-1} />
    </div>
  );
}
