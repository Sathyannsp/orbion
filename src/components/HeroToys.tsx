/**
 * Animated toys scattered across the whole home hero as its background: floating Rubik's cubes, a wobbling block tower, loose blocks, a toy
 * rocket and twinkling stars. All toys are faded so they read as background. Pure SVG + CSS; motion lives in
 * styles.css under ".hero-toys" and stops for prefers-reduced-motion.
 */

const INK = '#4A3426'
type Pt = [number, number]
const pts = (...p: Pt[]) => p.map(q => q.join(' ')).join(' ')

/** Corners of an isometric cube standing on its front-bottom vertex (x, y) with edge s. */
function iso(x: number, y: number, s: number) {
  const w = s * 0.866
  return { B: [x, y] as Pt, C: [x, y - s] as Pt, T: [x, y - 2 * s] as Pt, L: [x - w, y - 1.5 * s] as Pt, R: [x + w, y - 1.5 * s] as Pt, BL: [x - w, y - 0.5 * s] as Pt, BR: [x + w, y - 0.5 * s] as Pt }
}

const Block = ({ x, y, s, c, side, top, ch }: { x: number; y: number; s: number; c: string; side: string; top: string; ch: string }) => {
  const k = iso(x, y, s)
  return (
    <g stroke={INK} strokeWidth={s * 0.05} strokeLinejoin="round">
      <polygon points={pts(k.T, k.R, k.C, k.L)} fill={top} />
      <polygon points={pts(k.L, k.C, k.B, k.BL)} fill={c} />
      <polygon points={pts(k.C, k.R, k.BR, k.B)} fill={side} />
      <g transform={`matrix(.866 .5 0 1 ${k.L[0]} ${k.L[1]})`}>
        <rect x={s * 0.14} y={s * 0.14} width={s * 0.72} height={s * 0.72} rx={s * 0.12} fill="none" stroke="#fff" strokeWidth={s * 0.06} opacity=".7" />
        <text x={s / 2} y={s * 0.72} fontSize={s * 0.58} fontFamily="Fredoka, sans-serif" fontWeight="600" textAnchor="middle" fill="#fff" stroke="none">{ch}</text>
      </g>
    </g>
  )
}

const RUBIK = {
  top: ['#FFFFFF', '#FFD23F', '#FFFFFF', '#3DA9FC', '#FFFFFF', '#FF6B5E', '#FFFFFF', '#2BC48A', '#FFFFFF'],
  left: ['#FF6B5E', '#FF6B5E', '#FFD23F', '#FF6B5E', '#2BC48A', '#FF6B5E', '#3DA9FC', '#FF6B5E', '#FF6B5E'],
  right: ['#2BC48A', '#3DA9FC', '#2BC48A', '#2BC48A', '#2BC48A', '#FFD23F', '#FF8C1A', '#2BC48A', '#2BC48A']
}
const Rubik = ({ x, y, s }: { x: number; y: number; s: number }) => {
  const k = iso(x, y, s)
  const face = (o: Pt, u: Pt, v: Pt, cols: string[]) => cols.map((c, n) => {
    const i = n % 3, j = Math.floor(n / 3)
    const at = (a: number, b: number): Pt => [o[0] + (u[0] - o[0]) * a / 3 + (v[0] - o[0]) * b / 3, o[1] + (u[1] - o[1]) * a / 3 + (v[1] - o[1]) * b / 3]
    return <polygon key={n} points={pts(at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1))} fill={c} stroke="#26232B" strokeWidth={s * 0.07} strokeLinejoin="round" />
  })
  return (
    <g>
      <polygon points={pts(k.T, k.R, k.BR, k.B, k.BL, k.L)} fill="#26232B" stroke="#26232B" strokeWidth={s * 0.12} strokeLinejoin="round" />
      {face(k.L, k.T, k.C, RUBIK.top)}
      {face(k.L, k.C, k.BL, RUBIK.left)}
      {face(k.C, k.R, k.B, RUBIK.right)}
    </g>
  )
}

const Rocket = () => (
  <svg viewBox="0 0 60 100">
    <g stroke={INK} strokeWidth="1.6" strokeLinejoin="round">
      <path className="flame" d="M24 78 Q30 98 36 78Z" fill="#FFB62E" />
      <path d="M18 62 L8 80 L22 74Z M42 62 L52 80 L38 74Z" fill="#FF6B5E" />
      <path d="M30 4 C44 18 46 44 40 76 L20 76 C14 44 16 18 30 4Z" fill="#fff" />
      <path d="M30 4 C36 10 40 16 42 24 L18 24 C20 16 24 10 30 4Z" fill="#FF6B5E" />
      <circle cx="30" cy="42" r="8" fill="#86CBFF" /><circle cx="30" cy="42" r="3.6" fill="#fff" stroke="none" opacity=".6" />
      <path d="M30 76 V86" fill="none" stroke="#FF6B5E" strokeWidth="3" />
    </g>
  </svg>
)

const Toy = ({ cls, children }: { cls: string; children: React.ReactNode }) => <div className={`toy ${cls}`}><div className="toy-in">{children}</div></div>

export default function HeroToys() {
  return (
    <div className="hero-toys" aria-hidden="true">

      <Toy cls="t-tower">
        <svg viewBox="0 0 80 110">
          <Block x={40} y={108} s={22} c="#FF6B5E" side="#D9504A" top="#FF9A90" ch="A" />
          <Block x={40} y={86} s={22} c="#3DA9FC" side="#2A86CF" top="#86CBFF" ch="B" />
          <g className="wobble"><Block x={41} y={64} s={22} c="#FFB62E" side="#E0951A" top="#FFD27A" ch="C" /></g>
        </svg>
      </Toy>
      <Toy cls="t-rubik"><svg viewBox="0 0 60 64"><Rubik x={30} y={62} s={30} /></svg></Toy>
      <Toy cls="t-block2"><svg viewBox="0 0 40 44"><Block x={20} y={42} s={20} c="#7B61FF" side="#5F47D8" top="#B2A4FF" ch="2" /></svg></Toy>
      <Toy cls="t-rocket"><Rocket /></Toy>
      <Toy cls="t-rubik2"><svg viewBox="0 0 60 64"><Rubik x={30} y={62} s={30} /></svg></Toy>
      {/* faded blocks and rockets behind the copy, like the soft Rubik's cube */}
      <Toy cls="t-rocket3"><Rocket /></Toy>
      <span className="twinkle s1" /><span className="twinkle s2" /><span className="twinkle s3" />
    </div>
  )
}
