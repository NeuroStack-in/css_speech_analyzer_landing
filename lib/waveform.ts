/**
 * Deterministic pseudo-waveform: a mix of sines gives an organic
 * speech-envelope shape without Math.random(), so server and client
 * render identical bars (no hydration mismatch) on every load.
 */
export function envelope(i: number, n: number): number {
  const t = i / n;
  const v =
    0.42 +
    0.3 * Math.sin(t * 19 + 1.4) * Math.sin(t * 3.1) +
    0.22 * Math.sin(t * 47 + 0.6) +
    0.12 * Math.sin(t * 89);
  // soften the edges like a real utterance
  const fade = Math.min(1, Math.min(i + 1, n - i) / (n * 0.08));
  return Math.max(0.06, Math.min(1, Math.abs(v)) * fade);
}

export function envelopeBars(count: number): number[] {
  return Array.from({ length: count }, (_, i) => envelope(i, count));
}
