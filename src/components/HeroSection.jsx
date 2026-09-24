import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Cpu, Layers, Sparkles, Wrench } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CONTACT } from "../config/contact";
import { getAssetUrl } from "../utils/assets";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TOTAL_FRAMES = 126;

export function HeroSection() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const initialContentRef = useRef(null);
  const explodedContentRef = useRef(null);
  const hudProgressFillRef = useRef(null);
  const hudTextRef = useRef(null);

  const imagesRef = useRef([]);
  const loadedFlagsRef = useRef(new Uint8Array(TOTAL_FRAMES));
  const currentFrameRef = useRef(0);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    loadedFlagsRef.current = new Uint8Array(TOTAL_FRAMES);

    const renderCurrent = () => {
      drawFrame(currentFrameRef.current);
    };

    // Load Frame 1 first for immediate display
    const firstImg = new Image();
    firstImg.src = getAssetUrl("/hero-animation/frames/frame_001.webp");
    firstImg.onload = () => {
      if (isCancelled) return;
      images[0] = firstImg;
      loadedFlagsRef.current[0] = 1;
      renderCurrent();
    };

    // Load remaining frames in small batches to preserve network and responsiveness
    const loadNextBatch = (startIndex, batchSize = 12) => {
      if (isCancelled || startIndex >= TOTAL_FRAMES) return;

      const endIndex = Math.min(startIndex + batchSize, TOTAL_FRAMES);
      for (let i = startIndex; i < endIndex; i++) {
        const frameNum = String(i + 1).padStart(3, "0");
        const img = new Image();
        img.src = getAssetUrl(`/hero-animation/frames/frame_${frameNum}.webp`);
        img.onload = () => {
          if (isCancelled) return;
          images[i] = img;
          loadedFlagsRef.current[i] = 1;
          if (i === currentFrameRef.current) {
            renderCurrent();
          }
        };
      }

      // Schedule next batch
      if (endIndex < TOTAL_FRAMES) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(() => loadNextBatch(endIndex, batchSize));
        } else {
          setTimeout(() => loadNextBatch(endIndex, batchSize), 40);
        }
      }
    };

    loadNextBatch(1, 15);

    return () => {
      isCancelled = true;
    };
  }, []);

  // Helper to draw a specific frame index to canvas
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find requested image or fallback to nearest loaded image
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame
      const flags = loadedFlagsRef.current;
      let closest = -1;
      let minDiff = Infinity;
      for (let k = 0; k < TOTAL_FRAMES; k++) {
        if (flags[k] === 1) {
          const diff = Math.abs(k - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            closest = k;
          }
        }
      }
      if (closest !== -1) {
        img = imagesRef.current[closest];
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Crop each portrait frame as a full-bleed background without distorting it.
    const coverScale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
    const sourceWidth = width / coverScale;
    const sourceHeight = height / coverScale;
    const sourceX = (img.naturalWidth - sourceWidth) / 2;
    const sourceY = (img.naturalHeight - sourceHeight) / 2;

    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      width,
      height,
    );
    ctx.restore();
  };

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP ScrollTrigger to tie animation strictly to user scroll
  useGSAP(
    () => {
      const container = containerRef.current;
      const hero = heroRef.current;
      if (!container || !hero) return;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=180%",
        pin: hero,
        anticipatePin: 1,
        scrub: 0.45,
        onUpdate: (self) => {
          const progress = self.progress;

          // Map 0 -> 1 to frame 0 -> 125
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1))),
          );

          if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            requestAnimationFrame(() => drawFrame(frameIndex));
          }

          // Animate initial content (Fade out between 0% and 30% scroll)
          if (initialContentRef.current) {
            const initialOpacity = Math.max(0, 1 - progress * 3.3);
            const initialY = -progress * 60;
            initialContentRef.current.style.opacity = String(initialOpacity);
            initialContentRef.current.style.transform = `translateY(${initialY}px)`;
            initialContentRef.current.style.pointerEvents = progress > 0.22 ? "none" : "auto";
          }

          // Animate exploded content (Fade in between 70% and 100% scroll)
          if (explodedContentRef.current) {
            const explodedOpacity = Math.max(0, (progress - 0.68) * 3.12);
            const explodedY = (1 - explodedOpacity) * 30;
            explodedContentRef.current.style.opacity = String(explodedOpacity);
            explodedContentRef.current.style.transform = `translateY(${explodedY}px)`;
            explodedContentRef.current.style.pointerEvents = progress < 0.68 ? "none" : "auto";
          }

          // Update HUD progress bar & text
          if (hudProgressFillRef.current) {
            hudProgressFillRef.current.style.width = `${Math.round(progress * 100)}%`;
          }
          if (hudTextRef.current) {
            if (progress < 0.15) {
              hudTextRef.current.textContent = "Console Montado";
            } else if (progress < 0.85) {
              const action = self.direction < 0 ? "Montando" : "Desmontando";
              hudTextRef.current.textContent = `${action} • ${Math.round(progress * 100)}%`;
            } else {
              hudTextRef.current.textContent = "Arquitetura Desmontada";
            }
          }
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} id="inicio" className="hero-scroll-wrap">
      <section ref={heroRef} className="hero-section" aria-labelledby="hero-title">
        {/* Ambient glow matching PS5 LEDs */}
        <div className="hero-ambient-glow" aria-hidden="true" />

        {/* Full-bleed animated background */}
        <div className="hero-canvas-wrap">
          <canvas
            ref={canvasRef}
            className="hero-canvas"
            aria-label="Animação interativa de desmontagem do PlayStation 5"
          />
        </div>

        {/* Vignette to blend 3D studio background seamlessly with site */}
        <div className="hero-vignette" aria-hidden="true" />

        {/* Floating scroll HUD indicator */}
        <div className="hero-hud-pill" aria-hidden="true">
          <span className="hero-hud-dot" />
          <span ref={hudTextRef}>Role para desmontar</span>
          <div className="hero-hud-progress-bar">
            <div ref={hudProgressFillRef} className="hero-hud-progress-fill" />
          </div>
        </div>

        {/* LAYER 1: Initial View (Console Assembled) */}
        <div ref={initialContentRef} className="hero-content--initial">
          <p className="hero-kicker">Engenharia de precisão • Cada geração por dentro</p>

          <div className="hero-initial-center">
            <h1 id="hero-title" className="hero-title">
              Seu próximo jogo começa no ponto zero.
            </h1>
            <p className="hero-copy">
              Consoles, jogos e upgrades escolhidos com critério. Atendimento humano para você
              comprar, trocar e evoluir seu setup sem dúvida no caminho.
            </p>
            <div className="hero-actions" aria-label="Ações principais">
              <a
                className="button button--light"
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Encontrar meu console
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="#geracoes">
                Conhecer a experiência
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-caption" aria-hidden="true">
            <span>GAME ZER0 • PLAYSTATION 5</span>
            <span>Porto Alegre, RS</span>
          </div>
        </div>

        {/* LAYER 2: Exploded View (Console Disassembled) */}
        <div ref={explodedContentRef} className="hero-content--exploded">
          <div className="hero-exploded-top">
            <div>
              <span className="hero-spec-pill">
                <Sparkles className="size-3 text-blue-400" aria-hidden="true" />
                Arquitetura Desmontada
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                O coração da nona geração por dentro.
              </h2>
            </div>
          </div>

          <div className="hero-exploded-bottom">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="hero-spec-card">
                <h4>
                  <Wrench className="size-4 text-blue-400" aria-hidden="true" />
                  Refrigeração de Alta Eficiência
                </h4>
                <p>
                  Dissipador em cobre maciço, metal líquido e cooler silencioso inspecionados para
                  estabilidade máxima.
                </p>
              </div>

              <div className="hero-spec-card">
                <h4>
                  <Cpu className="size-4 text-emerald-400" aria-hidden="true" />
                  Placa-mãe & APU Zen 2
                </h4>
                <p>
                  Processamento RDNA 2 integrado, memória GDDR6 e circuitos testados sob estresse.
                </p>
              </div>

              <div className="hero-spec-card hidden md:block">
                <h4>
                  <Layers className="size-4 text-amber-400" aria-hidden="true" />
                  Expansão NVMe Gen4
                </h4>
                <p>
                  Compatibilidade certificada para upgrades de SSD ultrarrápidos até 7.000 MB/s.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <a
                className="button button--light"
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Consultar acervo e valores
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
