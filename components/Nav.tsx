"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const SPY_SECTIONS = ["features", "screens", "faq"] as const;

const LINKS: { id: (typeof SPY_SECTIONS)[number]; label: string }[] = [
  { id: "features", label: "Features" },
  { id: "screens", label: "Screens" },
  { id: "faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = SPY_SECTIONS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) {
      setActive(null);
      return;
    }
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((el) => spy.observe(el));
    return () => spy.disconnect();
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav${scrolled || pathname !== "/" ? " is-scrolled" : ""}${
        pathname === "/" && !scrolled ? " nav--dark" : ""
      }`}
    >
      <div className="container nav__inner">
        <Logo />

        <nav className={`nav__links${open ? " is-open" : ""}`} aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={`/#${l.id}`}
              onClick={close}
              className={active === l.id ? "is-active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#download" onClick={close} className="btn btn--ink btn--sm nav__cta">
            Download
          </Link>
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
