import { useRef, useState, useCallback, useEffect } from "react";

export function ShowcasePreview() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isShaking, setIsShaking] = useState(false);
  const [shatterCount, setShatterCount] = useState(0);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Canvas loop for shard particles
  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.alpha)})`;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.shadowBlur = 6;

      ctx.beginPath();
      // Draw angular geometric shard (triangle or quadrilateral)
      if (p.type === 0) {
        // Triangle shard
        ctx.moveTo(-p.size, -p.size * 0.6);
        ctx.lineTo(p.size * 1.2, 0);
        ctx.lineTo(-p.size * 0.4, p.size * 0.9);
      } else if (p.type === 1) {
        // Elongated splinter shard
        ctx.moveTo(-p.size * 0.3, -p.size * 1.5);
        ctx.lineTo(p.size * 0.4, -p.size * 1.2);
        ctx.lineTo(p.size * 0.2, p.size * 1.5);
        ctx.lineTo(-p.size * 0.3, p.size * 1.2);
      } else {
        // Trapezoid shard
        ctx.moveTo(-p.size * 0.8, -p.size * 0.8);
        ctx.lineTo(p.size * 0.9, -p.size * 0.4);
        ctx.lineTo(p.size * 0.5, p.size * 0.8);
        ctx.lineTo(-p.size * 0.9, p.size * 0.5);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }
  }, []);

  const triggerShatter = useCallback((e) => {
    if (e) e.stopPropagation();

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Center coordinates
    const rect = canvas.getBoundingClientRect();
    const originX = rect.width / 2;
    const originY = rect.height / 2;

    // Trigger visual screen-shake
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 350);

    setShatterCount((prev) => prev + 1);

    // Spawn 40-55 explosive shards
    const shardCount = 45;
    for (let i = 0; i < shardCount; i++) {
      const angle = (Math.PI * 2 * i) / shardCount + (Math.random() - 0.5) * 0.4;
      const speed = 4 + Math.random() * 11;
      particlesRef.current.push({
        x: originX + (Math.random() - 0.5) * 50,
        y: originY + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 5 + Math.random() * 12,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.25,
        alpha: 1.0,
        decay: 0.012 + Math.random() * 0.015,
        type: Math.floor(Math.random() * 3),
      });
    }

    if (!animationFrameRef.current || particlesRef.current.length <= shardCount) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }
  }, [updateParticles]);

  // Adjust canvas size to container
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[680px] mx-auto px-2 sm:px-4">
      {/* Outer interactive frame matching Image 1 */}
      <div
        ref={containerRef}
        onClick={triggerShatter}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            triggerShatter();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Figura 01 — A Marca GAME ZER0. Clique para estilhaçar"
        className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#060809] shadow-2xl shadow-black/90 cursor-pointer select-none transition-all duration-300 hover:border-white/20 hover:shadow-white/5 ${
          isShaking ? "animate-shatter-shake" : ""
        }`}
      >
        {/* Shard Particles Overlay Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
        />

        {/* Ambient Subtle Backlight */}
        <div className="absolute inset-0 bg-radial from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        {/* Image 1 Visual Asset */}
        <div className="relative z-10 w-full">
          <img
            src="/fig-01-a-marca.png"
            alt="FIG. 01 — A MARCA GAME ZER0. Símbolo zero estilhaçado com efeito de fragmentos"
            className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
            width="608"
            height="514"
            fetchPriority="high"
          />
        </div>

        {/* Hover Highlight Ring on Shatter Prompt */}
        <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 z-20 pointer-events-none">
          <span className="sr-only">Clique para estilhaçar</span>
        </div>
      </div>

      {/* Subtle Counter / Helper below the card if triggered */}
      {shatterCount > 0 && (
        <div className="mt-3 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-opacity animate-pulse">
            Estilhaçado {shatterCount}x • Clique novamente para fragmentar
          </span>
        </div>
      )}
    </div>
  );
}
