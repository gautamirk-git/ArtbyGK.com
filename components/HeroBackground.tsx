export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a9d3ea" />
          <stop offset="26%" stopColor="#dcd0c3" />
          <stop offset="40%" stopColor="#eeb79b" />
          <stop offset="52%" stopColor="#e0a184" />
          <stop offset="58%" stopColor="#6e8f5e" />
          <stop offset="74%" stopColor="#9cc17e" />
          <stop offset="100%" stopColor="#d3e8bd" />
        </linearGradient>
        <filter id="soften" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1440" height="560" fill="url(#sky)" />

      {/* distant mountains, sitting along the horizon band */}
      <path
        d="M -20 330
           L 140 260 L 260 320 L 420 240 L 560 310
           L 720 250 L 900 320 L 1060 255 L 1220 315
           L 1460 250 L 1460 400 L -20 400 Z"
        fill="#4f6f47"
        opacity="0.55"
        filter="url(#soften)"
      />
      <path
        d="M -20 360
           L 200 300 L 380 350 L 600 290 L 820 355
           L 1040 295 L 1260 350 L 1460 300 L 1460 420 L -20 420 Z"
        fill="#5f8552"
        opacity="0.5"
        filter="url(#soften)"
      />
    </svg>
  );
}
