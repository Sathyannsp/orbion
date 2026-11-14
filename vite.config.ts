import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Old URLs are redirected by the host (public/_redirects), so don't prerender stub pages for them.
const REDIRECTED = ['team', 'testimonials', 'facilities', 'safety', 'gallery', 'events', 'blog']

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: (paths: string[]) => paths.filter(p => !REDIRECTED.includes(p.replace(/^\//, '')))
  }
})
