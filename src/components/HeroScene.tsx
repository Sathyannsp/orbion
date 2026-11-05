/** Hand-drawn style classroom scene: teacher reading to three children. Illustration, not a photograph. */
export default function HeroScene() {
  const skin = ['#B9794F', '#D9A27A', '#9C6340', '#C98B5E']
  return (
    <svg className="scene" viewBox="0 0 540 460" role="img" aria-label="Illustration: a teacher reading a picture book to three children on a rug">
      {/* warm blob */}
      <path d="M60 120C40 40 170 6 280 18c120 12 230 40 238 150 8 110-40 230-200 252C170 440 70 400 44 300 32 250 70 190 60 120z" fill="#FFE2BC" />
      {/* window with sunlight */}
      <g transform="rotate(-2 110 90)">
        <rect x="64" y="52" width="120" height="96" rx="8" fill="#FFF7E8" stroke="#1B2A5C" strokeWidth="3" />
        <path d="M124 52v96M64 100h120" stroke="#1B2A5C" strokeWidth="3" />
        <circle cx="94" cy="76" r="9" fill="#FFB62E" />
        <path d="M70 160l-14 40M110 160l-4 50M150 160l8 46" stroke="#FFD27A" strokeWidth="5" strokeLinecap="round" opacity=".7" />
      </g>
      {/* hanging mobile */}
      <g stroke="#1B2A5C" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M330 18v34M300 52h90M300 52v28M390 52v46" />
      </g>
      <circle cx="300" cy="94" r="14" fill="#FF6B5E" /><circle cx="390" cy="112" r="11" fill="#7B61FF" />
      <path d="M325 52l7 14 15 2-11 10 3 15-14-8-14 8 3-15-11-10 15-2z" transform="translate(-4 -2) scale(.9)" fill="#FFB62E" />
      {/* shelf */}
      <g transform="translate(404 150)">
        <rect x="0" y="0" width="96" height="14" rx="3" fill="#B98456" />
        <rect x="6" y="-52" width="14" height="52" rx="2" fill="#3DA9FC" /><rect x="22" y="-44" width="12" height="44" rx="2" fill="#FF6B5E" />
        <rect x="36" y="-56" width="16" height="56" rx="2" fill="#2BC48A" /><rect x="54" y="-40" width="12" height="40" rx="2" fill="#FFB62E" transform="rotate(6 60 0)" />
        <rect x="72" y="-48" width="14" height="48" rx="2" fill="#7B61FF" />
        <rect x="0" y="82" width="96" height="14" rx="3" fill="#B98456" />
        <circle cx="20" cy="66" r="14" fill="#FF7AB6" /><rect x="46" y="48" width="38" height="34" rx="4" fill="#fff" stroke="#1B2A5C" strokeWidth="2.5" />
        <path d="M52 60h26M52 70h18" stroke="#3DA9FC" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* rug */}
      <ellipse cx="270" cy="392" rx="215" ry="42" fill="#2BC48A" opacity=".85" />
      <ellipse cx="270" cy="392" rx="170" ry="30" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      {/* teacher on stool */}
      <g>
        <rect x="116" y="326" width="70" height="10" rx="5" fill="#B98456" /><path d="M128 336l-8 54M174 336l8 54" stroke="#8A5A33" strokeWidth="6" strokeLinecap="round" />
        <path d="M118 252c10-22 54-22 66 0l12 80h-90z" fill="#FF6B5E" />
        <path d="M130 256c24 18 40 40 40 74" stroke="#FFD27A" strokeWidth="9" strokeLinecap="round" fill="none" />
        <circle cx="151" cy="214" r="28" fill={skin[3]} />
        <path d="M122 210c0-30 56-34 58 0-14-12-42-12-58 0z" fill="#2A1A14" /><circle cx="150" cy="178" r="13" fill="#2A1A14" />
        <circle cx="141" cy="216" r="2.6" fill="#2A1A14" /><circle cx="162" cy="216" r="2.6" fill="#2A1A14" />
        <path d="M143 228q8 7 17 0" stroke="#2A1A14" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <circle cx="151" cy="198" r="2.8" fill="#FF6B5E" />
        {/* book */}
        <g transform="rotate(-8 215 296)"><path d="M178 282l37 8 37-8v54l-37 8-37-8z" fill="#fff" stroke="#1B2A5C" strokeWidth="3" strokeLinejoin="round" /><path d="M215 290v54" stroke="#1B2A5C" strokeWidth="2.5" /><circle cx="196" cy="312" r="9" fill="#FFB62E" /><path d="M228 304h18M228 314h14" stroke="#3DA9FC" strokeWidth="3" strokeLinecap="round" /></g>
        <ellipse cx="178" cy="296" rx="12" ry="9" fill={skin[3]} />
      </g>
      {/* children */}
      {[
        { x: 300, y: 330, s: skin[0], hair: '#1E1411', shirt: '#fff', r: 24 },
        { x: 376, y: 340, s: skin[1], hair: '#2A1A14', shirt: '#fff', r: 22 },
        { x: 446, y: 334, s: skin[2], hair: '#1E1411', shirt: '#fff', r: 23 }
      ].map((c, i) => (
        <g key={i} transform={`rotate(${[-3, 2, -2][i]} ${c.x} ${c.y})`}>
          <ellipse cx={c.x} cy={c.y + 44} rx="38" ry="14" fill="#1B2A5C" />
          <path d={`M${c.x - 28} ${c.y + 40}c4-30 52-30 56 0z`} fill={c.shirt} stroke="#1B2A5C" strokeWidth="2.5" />
          <path d={`M${c.x - 10} ${c.y + 14}l10 12 10-12`} stroke="#3DA9FC" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx={c.x} cy={c.y} r={c.r} fill={c.s} />
          <path d={`M${c.x - c.r} ${c.y - 2}c0-${c.r + 6} ${c.r * 2} -${c.r + 6} ${c.r * 2} 0-8-10-${c.r * 2 - 4}-10-${c.r * 2}0z`} fill={c.hair} />
          <circle cx={c.x - 8} cy={c.y + 3} r="2.4" fill="#2A1A14" /><circle cx={c.x + 8} cy={c.y + 3} r="2.4" fill="#2A1A14" />
          <path d={`M${c.x - 7} ${c.y + 12}q7 7 14 0`} stroke="#2A1A14" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      ))}
      {/* a few stars */}
      <path d="M470 60l4 9 10 1-8 7 2 10-8-5-8 5 2-10-8-7 10-1z" fill="#FFB62E" className="twinkle" />
      <circle cx="238" cy="60" r="3" fill="#3DA9FC" className="twinkle" /><circle cx="500" cy="230" r="3" fill="#FF6B5E" className="twinkle" />
    </svg>
  )
}
