"use client";

import { useEffect, useRef } from "react";

/** Renders the final value (SSR-safe), then counts up from 0 when scrolled into view. */
export default function CountUp({
  value,
  duration = 1400,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
          el.textContent = String(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = String(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
}
