import Link from "next/link";

export default function Logo() {
  return (
    <Link className="logo" href="/" aria-label="CSS Speech Generator — home">
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="lgmark" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#33B3C4" />
            <stop offset="100%" stopColor="#14818F" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8.5" fill="url(#lgmark)" />
        <path
          d="M10.5 13.5v5M16 9.5v13M21.5 13.5v5"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__word">
        CSS <em>Speech Generator</em>
      </span>
    </Link>
  );
}
