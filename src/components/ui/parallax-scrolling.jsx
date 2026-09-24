import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ParallaxScrolling({ children }) {
  const root = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time) => lenis.raf(time * 1000);
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      const targetSelector = anchor?.getAttribute("href");
      const target = targetSelector ? document.querySelector(targetSelector) : null;

      if (!anchor || !targetSelector || targetSelector === "#" || !target) return;

      event.preventDefault();
      lenis.scrollTo(target);
      window.history.replaceState(null, "", targetSelector);
    };

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("click", handleAnchorClick);
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  // Lenis and anchor smooth scrolling are managed here.
  // The HeroSection component manages its own scroll-driven disassembly timeline.

  return (
    <div ref={root} className="parallax-scroll-root">
      {children}
    </div>
  );
}
