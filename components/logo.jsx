export default function NextTabLogo({
  width = 40,
  height = 40,
  primaryColor = "#FF6B6B",
  secondaryColor = "#4ECDC4",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Computer monitor */}
      <rect
        x="20"
        y="40"
        width="160"
        height="120"
        rx="10"
        fill={primaryColor}
      />

      {/* Computer stand */}
      <path d="M80 160 L120 160 L110 180 L90 180 Z" fill={primaryColor} />

      {/* Screen */}
      <rect x="30" y="50" width="140" height="100" rx="5" fill="white" />

      {/* Tab bar */}
      <rect
        x="30"
        y="50"
        width="140"
        height="20"
        rx="5"
        fill={secondaryColor}
      />

      {/* Active tab */}
      <path d="M30 50 L70 50 L75 70 L30 70 Z" fill={primaryColor} />

      {/* Arrow pointing to the next tab */}
      <path d="M80 60 L100 60 L90 65 L100 70 L80 70 Z" fill={secondaryColor} />

      {/* "NT" letters for NextTab */}
      <text
        x="100"
        y="130"
        fontFamily="Arial"
        fontSize="60"
        fontWeight="bold"
        fill={secondaryColor}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        NT
      </text>
    </svg>
  );
}
