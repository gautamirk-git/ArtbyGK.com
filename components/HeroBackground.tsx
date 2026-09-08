export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <filter id="soften" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect x="0" y="0" width="1440" height="560" fill="#dcebd0" />

      {/* blue streak */}
      <path
        d="M -100 380 Q 500 250 1540 340"
        stroke="#7fa9c9"
        strokeWidth="130"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
        filter="url(#soften)"
      />
      {/* pink streak */}
      <path
        d="M -100 120 Q 620 260 1540 70"
        stroke="#dd9aa1"
        strokeWidth="110"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
        filter="url(#soften)"
      />
      {/* a second, quieter green tone for depth */}
      <ellipse
        cx="1180"
        cy="470"
        rx="320"
        ry="110"
        fill="#b9d6a8"
        opacity="0.45"
        transform="rotate(-8 1180 470)"
        filter="url(#soften)"
      />
      <ellipse
        cx="140"
        cy="60"
        rx="240"
        ry="90"
        fill="#bcd8e3"
        opacity="0.4"
        transform="rotate(6 140 60)"
        filter="url(#soften)"
      />
    </svg>
  );
}
