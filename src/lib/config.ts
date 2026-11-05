const env = import.meta.env
export const CFG = {
  endpoint: (env.VITE_ENDPOINT as string) || '',
  turnstileSiteKey: (env.VITE_TURNSTILE_SITE_KEY as string) || '',
  ig: {
    embedSrc: (env.VITE_IG_EMBED_SRC as string) || '',
    embedHtml: (env.VITE_IG_EMBED_HTML as string) || '',
    profileUrl: (env.VITE_IG_PROFILE_URL as string) || 'https://www.instagram.com/'
  }
}
export const PHONE1 = '8531908868'
export const PHONE2 = '8148756418'
export const WA = 'https://wa.me/918531908868'
export const PROGRAMMES = ['Playgroup', 'Pre-KG', 'LKG', 'UKG', 'Daycare', 'Academic Excellence', 'Speak & Shine', 'Young Leaders', 'AI & STEM Lab']
