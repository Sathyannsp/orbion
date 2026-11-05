# Orbion Prep School website

Vite + React 18 + TypeScript + React Router. Every route is prerendered to static HTML at build time (`vite-react-ssg`), so search engines and WhatsApp previews see real content. Forms post to a Google Apps Script backend.

```
src/main.tsx, routes.tsx     entry + 18 routes
src/pages/                   one component per page
src/components/              Layout, sections, forms, Booking, lists, HeroScene, ui
src/data/content.ts          events, blog posts, team, testimonials (edit this file)
src/lib/                     config (env), submit, useGuards (honeypot + Turnstile), validate, art
src/styles.css               design system
backend/Code.gs              Google Apps Script backend
```

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + prerender into dist/
npm run preview
```

## Content

Events, blog posts, team members and testimonials live in `src/data/content.ts`; everything else is JSX in `src/pages/`. Change, commit, redeploy. Mark testimonials `sample: false` only once the person has given written permission.

## Forms backend (school owner's Google account)

1. Create a Google Sheet "Orbion Submissions" and copy its ID.
2. script.google.com → new project → paste `backend/Code.gs`.
3. Project Settings → Script Properties: `SHEET_ID`, `OWNER_EMAIL`, `TURNSTILE_SECRET` (optional `CALENDAR_ID`, `CV_FOLDER_ID`).
4. Deploy → New deployment → Web app → Execute as **Me**, access **Anyone**. Copy the `/exec` URL into `VITE_ENDPOINT`. Redeploy after any change to `Code.gs`.

What happens:
- **Enquiry:** a row in the sheet and an alert email to the owner. No email goes to the parent.
- **Campus visit:** slot availability check, a Google Calendar event, a sheet row, a confirmation email to the parent and an alert to the owner.
- **Careers:** a sheet row, the CV saved to Drive, an alert to the owner.

Spam protection: Cloudflare Turnstile, honeypot field, minimum fill time, one submission per phone number per minute, server-side validation, spreadsheet formula-injection blocking. The server rejects everything if `TURNSTILE_SECRET` is not set.

Turnstile: dash.cloudflare.com → Turnstile → add your domain and `localhost`; site key → `VITE_TURNSTILE_SITE_KEY`, secret → the Apps Script property.

## Environment variables

Copy `.env.example` to `.env.local` (and set the same in your host). They are baked in at build time, so changing one needs a redeploy.

| Variable | Purpose |
| --- | --- |
| `VITE_ENDPOINT` | Apps Script `/exec` URL. Empty = demo mode (forms look successful but send nothing). |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile site key. |
| `VITE_IG_EMBED_SRC`, `VITE_IG_EMBED_HTML`, `VITE_IG_PROFILE_URL` | Instagram widget (Behold, Elfsight). Empty = placeholder grid. |

Visit slot times are in `src/components/Booking.tsx` and must match `SLOTS` in `backend/Code.gs`.

## Before launch

- Replace the polaroid photo placeholders (`<Ph />`) with real photographs.
- Confirm ages, timings, class sizes, transport and the safety provisions on `/safety`.
- Add the final address and map to `/contact`, and the social links in the footer.
- Add the brochure PDF, and a privacy policy page (the forms collect parents' and children's details).
