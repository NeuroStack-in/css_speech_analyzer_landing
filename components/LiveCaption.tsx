"use client";

import { useEffect, useState } from "react";

/* Each phrase ends in normalized form — quietly demoing the
   text-normalization stage ("ten thirty" → "10:30"). */
const PHRASES: string[][] = [
  ["Your", "appointment", "is", "at", "10:30."],
  ["The", "doorbell", "is", "ringing."],
  ["Train", "to", "Old", "Delhi", "leaves", "from", "platform", "2."],
];

const HOLD_TICKS = 4; // beats to hold a finished phrase before the next one

export default function LiveCaption() {
  const [state, setState] = useState({ phrase: 0, shown: 2 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const id = setInterval(() => {
      setState(({ phrase, shown }) => {
        const len = PHRASES[phrase].length;
        if (shown < len + HOLD_TICKS) return { phrase, shown: shown + 1 };
        return { phrase: (phrase + 1) % PHRASES.length, shown: 1 };
      });
    }, 430);
    return () => clearInterval(id);
  }, []);

  const words = PHRASES[state.phrase];
  const shown = reduced ? words.length : Math.min(state.shown, words.length);

  return (
    <div className="livecap" aria-live="polite">
      {words.slice(0, shown).map((w, i) => (
        <span key={`${state.phrase}-${i}`} className={!reduced && i === shown - 1 ? "is-new" : undefined}>
          {w}
        </span>
      ))}
    </div>
  );
}
