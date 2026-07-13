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

  /* FAQ accordion: animated open/close, only one item open at a time */
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.faq"));
    if (items.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const busy = new WeakSet<HTMLDetailsElement>();
    const handlers: Array<{ el: HTMLElement; fn: (e: Event) => void }> = [];
    const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

    const closeItem = (d: HTMLDetailsElement) => {
      const summary = d.querySelector<HTMLElement>("summary");
      if (!summary || !d.open || busy.has(d)) return;
      if (reduced) {
        d.open = false;
        return;
      }
      busy.add(d);
      const anim = d.animate(
        { height: [`${d.offsetHeight}px`, `${summary.offsetHeight}px`] },
        { duration: 320, easing: EASE }
      );
      anim.onfinish = () => {
        d.open = false;
        d.style.height = "";
        busy.delete(d);
      };
    };

    const openItem = (d: HTMLDetailsElement) => {
      const summary = d.querySelector<HTMLElement>("summary");
      if (!summary || busy.has(d)) return;
      if (reduced) {
        d.open = true;
        return;
      }
      busy.add(d);
      const closedH = summary.offsetHeight;
      d.open = true;
      const anim = d.animate(
        { height: [`${closedH}px`, `${d.offsetHeight}px`] },
        { duration: 360, easing: EASE }
      );
      anim.onfinish = () => {
        d.style.height = "";
        busy.delete(d);
      };
    };

    items.forEach((d) => {
      const summary = d.querySelector<HTMLElement>("summary");
      if (!summary) return;
      d.style.overflow = "hidden";

      const fn = (e: Event) => {
        e.preventDefault();
        if (busy.has(d)) return;
        if (d.open) {
          closeItem(d);
        } else {
          items.forEach((other) => {
            if (other !== d) closeItem(other);
          });
          openItem(d);
        }
      };
      summary.addEventListener("click", fn);
      handlers.push({ el: summary, fn });
    });

    return () => handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
  }, [pathname]);

  return null;
}
