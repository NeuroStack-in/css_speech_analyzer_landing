import Link from "next/link";

export default function Logo() {
  return (
    <Link className="logo" href="/" aria-label="CSS Speech Generator — home">
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7FD8C4" />
            <stop offset="100%" stopColor="#6FC3D6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="#0D6A70" />
        <path
          d="M7 12v-3M11.5 13.5V6.5M16 14V8M20.5 13.5V6.5M25 12V9"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="7" y="19" width="18" height="5" rx="2.5" fill="url(#lg)" />
      </svg>
      <span className="logo__word">
        CSS <em>Speech Generator</em>
      </span>
    </Link>
  );
}
