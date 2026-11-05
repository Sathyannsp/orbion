/* Static inline-SVG art as strings (internal constants only; rendered with dangerouslySetInnerHTML). */
const IC: Record<string, string> = {
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  cam: '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>',
  book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19a2 2 0 012-2h13"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  bus: '<rect x="4" y="4" width="16" height="14" rx="3"/><path d="M4 12h16M8 21v-3M16 21v-3"/><circle cx="8" cy="15" r=".6"/><circle cx="16" cy="15" r=".6"/>',
  snack: '<path d="M12 7c-2-3-7-2-7 3 0 5 4 10 7 10s7-5 7-10c0-5-5-6-7-3z"/><path d="M12 7c0-2 1-3 3-4"/>',
  moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14a6 6 0 013.5 6"/>',
  heart: '<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6.2-8 11-8 11z"/>',
  ac: '<rect x="3" y="5" width="18" height="8" rx="2"/><path d="M7 17l-1 3M12 17v3M17 17l1 3"/>',
  laptop: '<rect x="5" y="5" width="14" height="10" rx="1.5"/><path d="M2 19h20"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-6.3 7-11.5A7 7 0 005 9.5C5 14.700 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
  aid: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M12 10.500v6M9 13.500h6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z"/>',
  rocket: '<path d="M12 3c4 2 6 6 5 11l-2 2h-6l-2-2c-1-5 1-9 5-11z"/><circle cx="12" cy="10" r="1.800"/><path d="M8 16l-3 3 1-5M16 16l3 3-1-5M10 19c0 1 1 2 2 3 1-1 2-2 2-3"/>',
  brush: '<path d="M4 20c0-3 2-4 4-4s3 1 3 3-2 3-4 2c-1 0-3 0-3-1z"/><path d="M10 15L20 4l-1-1L8.500 13.500"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.500h8M8 12.500h5"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.500V16c3 2.500 9 2.500 12 0v-4.500"/>',
  toilet: '<path d="M7 3h10v6H7zM6 9h12c0 5-3 7-6 7s-6-2-6-7zM9 16l-1 5h8l-1-5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.500l5 3.500-5 3.500z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
  crown: '<path d="M3 8l4.500 4L12 5l4.500 7L21 8l-2 11H5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'
}
export const icoSvg = (n: string) => `<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n] || IC.star}</svg>`
export const COL: Record<string, string> = { sun: '#FFB62E', sky: '#3DA9FC', violet: '#7B61FF', coral: '#FF6B5E', mint: '#2BC48A', pink: '#FF7AB6' };
export function planet(kind: string, size?: number): string {
  const s = size || 60;
  const w = `<svg viewBox="0 0 64 64" width="${s}" height="${s}" aria-hidden="true">`;
  switch (kind) {
    case 'launch': return w + `<path d="M32 6c9 5 14 14 12 26l-5 5H25l-5-5C18 20 23 11 32 6z" fill="#fff" stroke="#1B2A5C" stroke-width="2"/><circle cx="32" cy="23" r="5" fill="${COL.sun}" stroke="#1B2A5C" stroke-width="2"/><path d="M20 32l-8 9 3-11zM44 32l8 9-3-11z" fill="${COL.sun}" stroke="#1B2A5C" stroke-width="2" stroke-linejoin="round"/><path d="M27 41c0 6 2 11 5 15 3-4 5-9 5-15z" fill="${COL.coral}"/></svg>`;
    case 'orbit': return w + `<ellipse cx="32" cy="32" rx="28" ry="9" fill="none" stroke="${COL.sky}" stroke-width="3" transform="rotate(-18 32 32)" opacity=".5"/><circle cx="32" cy="32" r="14" fill="${COL.sky}"/><path d="M20 28c6-5 16-4 22 1" stroke="#fff" stroke-width="2.500" fill="none" opacity=".6" stroke-linecap="round"/><path d="M6 38c10 9 40 0 52-12" stroke="${COL.sky}" stroke-width="3" fill="none" transform="rotate(0)" stroke-linecap="round" opacity=".0"/><circle cx="55" cy="22" r="4" fill="${COL.sun}"/></svg>`;
    case 'moon': return w + `<circle cx="32" cy="32" r="22" fill="${COL.violet}"/><circle cx="24" cy="26" r="5" fill="#fff" opacity=".35"/><circle cx="40" cy="38" r="7" fill="#fff" opacity=".28"/><circle cx="33" cy="48" r="3" fill="#fff" opacity=".35"/><circle cx="44" cy="22" r="3" fill="#fff" opacity=".3"/></svg>`;
    case 'mars': return w + `<circle cx="32" cy="32" r="22" fill="${COL.coral}"/><path d="M12 36c8 4 18-2 26 2s12 0 14-2" stroke="#fff" stroke-width="2.500" fill="none" opacity=".35" stroke-linecap="round"/><circle cx="24" cy="22" r="4" fill="#fff" opacity=".3"/><circle cx="42" cy="28" r="2.500" fill="#fff" opacity=".3"/><circle cx="36" cy="46" r="3.500" fill="#fff" opacity=".28"/></svg>`;
    case 'station': return w + `<rect x="4" y="25" width="16" height="14" rx="2" fill="${COL.mint}" opacity=".85"/><rect x="44" y="25" width="16" height="14" rx="2" fill="${COL.mint}" opacity=".85"/><path d="M20 32h24" stroke="#1B2A5C" stroke-width="3"/><rect x="24" y="20" width="16" height="24" rx="8" fill="#fff" stroke="#1B2A5C" stroke-width="2.500"/><circle cx="32" cy="32" r="4.500" fill="${COL.sky}" stroke="#1B2A5C" stroke-width="2"/></svg>`;
    case 'star': return w + `<path d="M32 6l7 16 17 2-13 11 4 17-15-9-15 9 4-17L8 24l17-2z" fill="${COL.sun}"/></svg>`;
    case 'earth': return w + `<circle cx="32" cy="32" r="22" fill="${COL.sky}"/><path d="M18 24c5-3 9 0 8 4s-5 3-7 7-4-9-1-11zM38 36c4-2 8 1 7 5s-6 5-8 2-1-5 1-7z" fill="${COL.mint}"/></svg>`;
    default: return w + `<circle cx="32" cy="32" r="20" fill="${COL.sky}"/></svg>`;
  }
}
export function room(color: string, planetKind: string, label: string): string {
  const c = COL[color];
  return `<svg viewBox="0 0 400 250" role="img" aria-label="${label} concept illustration"><rect width="400" height="250" fill="#FBFCFF"/>
    <rect y="0" width="400" height="160" fill="${c}" opacity=".16"/><rect y="150" width="400" height="100" fill="#EFE6D6"/><rect y="150" width="400" height="10" fill="#E2D6C0"/>
    <rect x="30" y="30" width="86" height="64" rx="8" fill="#fff" stroke="#D5DBEE" stroke-width="3"/><path d="M73 30v64M30 62h86" stroke="#D5DBEE" stroke-width="2"/><circle cx="96" cy="48" r="6" fill="#FFB62E" opacity=".6"/>
    <rect x="150" y="26" width="140" height="82" rx="8" fill="#fff" stroke="${c}" stroke-width="3"/><path d="M164 50h60M164 66h92M164 82h44" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity=".55"/>
    <g transform="translate(318 30)">${planet(planetKind, 56).replace('<svg ', '<svg x="0" y="0" ')}</g>
    <rect x="30" y="112" width="70" height="40" rx="6" fill="#fff" stroke="#D5DBEE" stroke-width="2"/><rect x="36" y="118" width="14" height="28" rx="3" fill="${c}" opacity=".7"/><rect x="54" y="118" width="14" height="28" rx="3" fill="#FFB62E" opacity=".7"/><rect x="72" y="118" width="14" height="28" rx="3" fill="#3DA9FC" opacity=".7"/>
    <ellipse cx="200" cy="205" rx="105" ry="30" fill="${c}" opacity=".35"/><ellipse cx="200" cy="205" rx="70" ry="19" fill="#fff" opacity=".55"/>
    <rect x="140" y="170" width="46" height="26" rx="13" fill="#fff" stroke="${c}" stroke-width="2.500"/><rect x="214" y="170" width="46" height="26" rx="13" fill="#fff" stroke="${c}" stroke-width="2.500"/>
    <path d="M300 160h70v50a6 6 0 01-6 6h-58a6 6 0 01-6-6z" fill="#fff" stroke="#D5DBEE" stroke-width="2"/><rect x="310" y="170" width="50" height="8" rx="4" fill="${c}" opacity=".6"/><rect x="310" y="184" width="50" height="8" rx="4" fill="#FFB62E" opacity=".6"/><rect x="310" y="198" width="50" height="8" rx="4" fill="#3DA9FC" opacity=".6"/>
    <circle cx="40" cy="190" r="22" fill="${c}" opacity=".55"/><circle cx="40" cy="190" r="12" fill="#fff" opacity=".6"/></svg>`;
}