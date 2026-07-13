"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = ".rv-scroll, .rv-left, .rv-right, .rv-pop, .rv-zoom, .step-link";

/** Scroll reveals for all reveal variants + smooth FAQ open/close. */
export default function Effects() {
  const pathname = usePathname();

  /* reveal-on-scroll */
  useEffect(() => {
    const els = document.querySelectorAll(`${REVEAL_SELECTOR}:not(.in-view)`);
    if (els.length === 0) return;
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => revealer.observe(el));
    return () => revealer.disconnect();
  }, [pathname]);

  /* animated FAQ open/close (WAAPI height animation on <details>) */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.faq"));
    if (items.length === 0) return;

    const busy = new WeakSet<HTMLDetailsElement>();
    const handlers: Array<{ el: HTMLElement; fn: (e: Event) => void }> = [];

    items.forEach((d) => {
      const summary = d.querySelector<HTMLElement>("summary");
      if (!summary) return;
      d.style.overflow = "hidden";

      const fn = (e: Event) => {
        e.preventDefault();
        if (busy.has(d)) return;
        busy.add(d);
        const closedH = summary.offsetHeight;

        if (d.open) {
          const fullH = d.offsetHeight;
          const anim = d.animate(
            { height: [`${fullH}px`, `${closedH}px`] },
            { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          anim.onfinish = () => {
            d.open = false;
            d.style.height = "";
            busy.delete(d);
          };
        } else {
          d.open = true;
          const fullH = d.offsetHeight;
          const anim = d.animate(
            { height: [`${closedH}px`, `${fullH}px`] },
            { duration: 360, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          anim.onfinish = () => {
            d.style.height = "";
            busy.delete(d);
          };
        }
      };
      summary.addEventListener("click", fn);
      handlers.push({ el: summary, fn });
    });

    return () => handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
  }, [pathname]);

  return null;
}
