"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Ramotion-style scroll system:
 * - Lenis inertia smooth scrolling (with eased anchor gliding)
 * - Hero parallax via [data-plx] speed factors
 * - Marquee nudge coupled to scroll velocity
 * Skipped entirely under prefers-reduced-motion.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const desktop = window.matchMedia("(min-width: 1020px)").matches;
    const plxEls = desktop
      ? Array.from(document.querySelectorAll<HTMLElement>("[data-plx]"))
      : [];
    const marquee = document.querySelector<HTMLElement>(".marquee-wrap");

    let nudgeCur = 0;
    let nudgeTarget = 0;

    lenis.on("scroll", ({ scroll, velocity }: { scroll: number; velocity: number }) => {
      // parallax (only worth computing near the top of the page)
      if (scroll < 1400) {
        plxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.plx || "0");
          el.style.transform = `translate3d(0, ${(scroll * speed).toFixed(1)}px, 0)`;
        });
      }
      // marquee velocity coupling
      nudgeTarget = Math.max(-36, Math.min(36, -velocity * 1.6));
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      if (marquee) {
        nudgeCur += (nudgeTarget - nudgeCur) * 0.06;
        nudgeTarget *= 0.94; // decay back to rest
        marquee.style.transform = `translate3d(${nudgeCur.toFixed(2)}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // glide to in-page anchors instead of teleporting
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const path = href.slice(0, hashIndex);
      if (path !== "" && path !== "/" && path !== window.location.pathname) return;
      if (path === "/" && window.location.pathname !== "/") return;
      const target = document.getElementById(href.slice(hashIndex + 1));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.3 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      plxEls.forEach((el) => { el.style.transform = ""; });
      if (marquee) marquee.style.transform = "";
    };
  }, [pathname]);

  return null;
}
