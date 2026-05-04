// Shared hand-drawn SVG doodles for Five Zero Three
// All monochrome, designed to sit on cream paper

const Mascot = ({ size = 120, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 120 180" width={size} height={size * 1.5} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* steam */}
    <path d="M 42 12 Q 40 18 44 22 Q 48 26 44 32" strokeWidth="2"/>
    <path d="M 54 8 Q 52 14 56 18 Q 60 22 56 28" strokeWidth="2"/>
    <path d="M 66 12 Q 64 18 68 22 Q 72 26 68 32" strokeWidth="2"/>
    {/* head / mug */}
    <ellipse cx="55" cy="52" rx="28" ry="24"/>
    <path d="M 83 44 Q 95 44 95 56 Q 95 68 83 68" />
    {/* face */}
    <circle cx="46" cy="50" r="1.8" fill={stroke}/>
    <circle cx="64" cy="50" r="1.8" fill={stroke}/>
    <path d="M 44 58 Q 55 66 66 58" />
    {/* 503 label on mug */}
    <text x="55" y="60" textAnchor="middle" fontSize="8" fontFamily="Archivo Black, sans-serif" fill={stroke} stroke="none" fontWeight="900">503</text>
    {/* body */}
    <path d="M 42 76 L 38 140" />
    <path d="M 68 76 L 72 140" />
    <path d="M 38 140 L 36 170" />
    <path d="M 72 140 L 74 170" />
    {/* arms holding mug up */}
    <path d="M 42 80 Q 28 70 32 50 Q 34 42 40 42" />
    <path d="M 68 80 Q 82 70 78 50 Q 76 42 70 42" />
    {/* shoes */}
    <path d="M 30 170 L 44 170 L 42 174 L 32 174 Z"/>
    <path d="M 68 170 L 82 170 L 80 174 L 70 174 Z"/>
  </svg>
);

const Bean = ({ size = 24, stroke = "#1A1612", rotate = 0 }) => (
  <svg viewBox="0 0 40 60" width={size} height={size * 1.5} fill="none" stroke={stroke} strokeWidth="2" style={{transform: `rotate(${rotate}deg)`}}>
    <ellipse cx="20" cy="30" rx="14" ry="24"/>
    <path d="M 20 8 Q 16 30 20 52" strokeLinecap="round"/>
  </svg>
);

const MokaPot = ({ size = 80, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 100" width={size} height={size * 1.25} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <path d="M 20 20 L 60 20 L 58 14 L 40 10 L 22 14 Z"/>
    <path d="M 18 22 L 62 22 L 60 48 L 20 48 Z"/>
    <path d="M 16 50 L 64 50 L 62 86 L 18 86 Z"/>
    <path d="M 30 50 L 30 86"/>
    <path d="M 64 56 Q 76 58 76 68 Q 76 78 64 80"/>
    <circle cx="40" cy="15" r="2" fill={stroke}/>
    {/* steam */}
    <path d="M 35 6 Q 33 2 37 0" strokeWidth="1.5"/>
    <path d="M 43 6 Q 41 2 45 0" strokeWidth="1.5"/>
  </svg>
);

const CupToGo = ({ size = 80, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 100" width={size} height={size * 1.25} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <path d="M 18 28 L 62 28 L 58 92 L 22 92 Z"/>
    <path d="M 14 28 L 66 28 L 66 24 L 14 24 Z"/>
    <ellipse cx="40" cy="24" rx="26" ry="4"/>
    <circle cx="40" cy="24" r="3"/>
    <path d="M 26 50 L 54 50"/>
    {/* steam */}
    <path d="M 30 14 Q 28 10 32 6 Q 36 2 32 -2" strokeWidth="1.8"/>
    <path d="M 44 14 Q 42 10 46 6 Q 50 2 46 -2" strokeWidth="1.8"/>
  </svg>
);

const Mug = ({ size = 70, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <ellipse cx="32" cy="30" rx="24" ry="20"/>
    <path d="M 56 24 Q 72 24 72 38 Q 72 52 56 52"/>
    <path d="M 20 30 Q 32 36 44 30" strokeWidth="1.5"/>
    {/* steam */}
    <path d="M 22 8 Q 20 14 24 18 Q 28 22 24 26" strokeWidth="1.5"/>
    <path d="M 34 4 Q 32 10 36 14 Q 40 18 36 22" strokeWidth="1.5"/>
  </svg>
);

const Croissant = ({ size = 70, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 60" width={size} height={size * 0.75} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <path d="M 10 40 Q 20 10 40 10 Q 60 10 70 40 Q 60 50 50 46 Q 40 42 30 46 Q 20 50 10 40 Z"/>
    <path d="M 25 30 L 30 38" strokeWidth="1.5"/>
    <path d="M 40 22 L 42 36" strokeWidth="1.5"/>
    <path d="M 55 30 L 50 38" strokeWidth="1.5"/>
  </svg>
);

const Waffle = ({ size = 70, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <rect x="14" y="14" width="52" height="52" rx="4"/>
    <line x1="27" y1="14" x2="27" y2="66" strokeWidth="1.8"/>
    <line x1="40" y1="14" x2="40" y2="66" strokeWidth="1.8"/>
    <line x1="53" y1="14" x2="53" y2="66" strokeWidth="1.8"/>
    <line x1="14" y1="27" x2="66" y2="27" strokeWidth="1.8"/>
    <line x1="14" y1="40" x2="66" y2="40" strokeWidth="1.8"/>
    <line x1="14" y1="53" x2="66" y2="53" strokeWidth="1.8"/>
  </svg>
);

const Sandwich = ({ size = 70, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 60" width={size} height={size * 0.75} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <path d="M 10 20 L 70 20 L 40 6 Z"/>
    <path d="M 8 22 L 72 22 L 72 28 L 8 28 Z"/>
    <path d="M 8 28 Q 20 34 40 30 Q 60 26 72 32 L 72 36 L 8 36 Z"/>
    <path d="M 8 36 L 72 36 L 72 44 L 8 44 Z"/>
    <path d="M 10 44 L 70 44 Q 68 52 40 52 Q 12 52 10 44 Z"/>
  </svg>
);

const Burger = ({ size = 70, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 80 70" width={size} height={size * 0.875} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
    <path d="M 10 30 Q 10 10 40 10 Q 70 10 70 30 Z"/>
    <circle cx="24" cy="20" r="1.2" fill={stroke}/>
    <circle cx="40" cy="16" r="1.2" fill={stroke}/>
    <circle cx="56" cy="20" r="1.2" fill={stroke}/>
    <path d="M 8 32 Q 20 36 40 32 Q 60 28 72 34 L 72 40 L 8 40 Z"/>
    <path d="M 8 42 L 72 42 L 72 48 L 8 48 Z"/>
    <path d="M 10 50 L 70 50 Q 68 62 40 62 Q 12 62 10 50 Z"/>
  </svg>
);

const Steam = ({ w = 40, h = 50, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 40 50" width={w} height={h} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round">
    <path d="M 10 44 Q 6 32 12 22 Q 18 12 12 2"/>
    <path d="M 22 46 Q 18 34 24 24 Q 30 14 24 4"/>
    <path d="M 32 44 Q 28 32 34 22"/>
  </svg>
);

const Squiggle = ({ w = 120, stroke = "#1A1612" }) => (
  <svg viewBox="0 0 120 12" width={w} height={12} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round">
    <path d="M 2 6 Q 12 -2 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6"/>
  </svg>
);

const Star = ({ size = 24, stroke = "#1A1612", fill = "none" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round">
    <path d="M 12 2 L 14.5 9 L 22 9.5 L 16 14 L 18 21 L 12 17 L 6 21 L 8 14 L 2 9.5 L 9.5 9 Z"/>
  </svg>
);

const Arrow = ({ w = 60, stroke = "#1A1612", direction = "right" }) => {
  const rot = {right: 0, left: 180, up: -90, down: 90}[direction];
  return (
    <svg viewBox="0 0 60 20" width={w} height={w/3} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transform: `rotate(${rot}deg)`}}>
      <path d="M 4 10 Q 20 6 54 10"/>
      <path d="M 44 4 L 54 10 L 44 16"/>
    </svg>
  );
};

// Wordmark: stacked one word per line + 503 kicker beside each (Bungee)
const Wordmark = ({ size = 1, color = "#1A1612", stack = false }) => {
  const scale = size;
  const big = 28 * scale;
  const num = 11 * scale;
  const Line = ({ word, n }) => (
    <div style={{display: 'flex', alignItems: 'baseline', gap: 8 * scale, lineHeight: 0.95}}>
      <span style={{fontSize: big}}>{word}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: num,
        letterSpacing: '0.15em', opacity: 0.6, fontWeight: 700
      }}>{n}</span>
    </div>
  );
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column',
      fontFamily: 'var(--font-hand-bold)',
      color, letterSpacing: '-0.01em',
      gap: 2 * scale,
    }}>
      <Line word="FIVE" n="/05"/>
      <Line word="ZERO" n="/00"/>
      <Line word="THREE" n="/03"/>
    </div>
  );
};

// Small logo lockup with mascot + wordmark
const LogoLockup = ({ size = 1, color = "#1A1612", layout = "horizontal" }) => {
  if (layout === "horizontal") {
    return (
      <div style={{display: 'inline-flex', alignItems: 'center', gap: 10 * size}}>
        <Mascot size={44 * size} stroke={color}/>
        <Wordmark size={size} color={color}/>
      </div>
    );
  }
  return (
    <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 * size}}>
      <Mascot size={60 * size} stroke={color}/>
      <Wordmark size={size} color={color} stack/>
    </div>
  );
};

Object.assign(window, {
  Mascot, Bean, MokaPot, CupToGo, Mug, Croissant, Waffle, Sandwich, Burger,
  Steam, Squiggle, Star, Arrow, Wordmark, LogoLockup
});
