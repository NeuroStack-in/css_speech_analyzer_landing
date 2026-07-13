import type { CSSProperties } from "react";
import { envelopeBars } from "@/lib/waveform";

/** Bar-style waveform rendered from the deterministic speech envelope. */
export default function UiWave({ bars, live = false }: { bars: number; live?: boolean }) {
  return (
    <div className={`uiwave${live ? " uiwave--live" : ""}`} aria-hidden="true">
      {envelopeBars(bars).map((h, i) => (
        <span
          key={i}
          style={
            {
              "--h": h.toFixed(3),
              ...(live ? { "--ad": `${((i % 7) * -0.21).toFixed(2)}s` } : null),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
