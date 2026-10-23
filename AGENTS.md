# AGENTS.md

Context for LLM sessions working on this repo.

## What this is

Personal portfolio site for Will Leece (wjleece.dev). Next.js app: a single-page homepage plus a case-study page per project under `app/projects/`. No API routes, no database. Hosted on Vercel.

## Stack

- **Next.js 16 / React 19** — App Router, statically prerendered
- **Tailwind CSS v4** — utility-first, no custom theme config file; uses CSS vars via `globals.css`
- **TypeScript 6** (pinned to ~6.0: typescript-eslint does not support TS 7 yet, so `npm run lint` breaks on 7. Revisit when TS 7.1 and a matching typescript-eslint ship.)
- **shadcn/ui** — only `Button` primitive installed (`components/ui/`)
- **lucide-react** — icons
- **react-icons** — Simple Icons (`si`) for tech badges and GitHub, `FaLinkedin` (Font Awesome)
- No test framework. `npm run build` is the only check that matters before committing.

## File map

```
app/
  layout.tsx      — metadata, OG tags, theme-flash prevention script, Geist fonts
  page.tsx        — homepage (about, experience, projects with inline case studies)
  projects/       — standalone case-study pages (meducate-api, wayfarer) with their own metadata/OG images
  globals.css     — Tailwind base + CSS custom properties for light/dark tokens
  sitemap.ts      — static sitemap
  robots.ts       — robots.txt
  favicon.ico / apple-icon.png / icon.svg
components/ui/
  button.tsx      — shadcn Button (2 variants: default, ghost; 2 sizes: default, sm)
lib/utils.ts      — cn() helper (clsx + tailwind-merge)
next.config.ts    — only 301 redirects, nothing else
```

Homepage content lives in `app/page.tsx`. Tech badges (with brand logos) come from `components/tech-badge.tsx` + `lib/tech-icons.tsx`; every tag used must have an entry there. The CV is a static `public/cv.pdf`.

## Architecture / constraints

- **Single page, scroll-based navigation.** Navbar smooth-scrolls to `#about`, `#experience`, `#projects`. No client-side routing.
- **Dark mode** defaults to dark, persisted in `localStorage`. Theme flash is prevented by an inline script in `layout.tsx` that runs before hydration.
- **State is minimal:** `meducateExpanded` (bool) toggles the Meducate case study inline. `darkMode` (bool) drives the theme toggle. Both are `useState` in `Home()`.
- **Case studies exist in two places on purpose:** expandable on the homepage card, and as standalone pages under `app/projects/` for SEO. Keep their facts in sync.
- **No data fetching.** No server components with data fetching, no API routes. Keep it that way unless there is a strong reason.
- **JSON-LD** structured data (`Person` schema) is inlined in `page.tsx` via `dangerouslySetInnerHTML`.

## Projects currently shown

### Meducate API
- Live at meducateapi.com
- GitHub: github.com/kino1307/MeducateAPI
- Free tier: 1,000 req/day, no credit card — demo key at meducateapi.com/docs
- Key technical differentiator: nightly QC jobs that compare LLM-generated summaries against upstream source content and flag drift for re-processing
- Case study covers: Problem → Architecture & Tech Decisions (5 bullets) → Outcome
- Card CTA: "Try with demo key →" → meducateapi.com/docs

### Wayfarer
- Live at wayfarer.wjleece.dev, GitHub: github.com/kino1307/Wayfarer
- Natural-language query → map, grounded in Wikidata (not guessed by an LLM)
- Key technical differentiator: an agent reads Wikidata's schema live and builds/tests SPARQL at query time (no fixed template library), gated by an independent verification pass before anything reaches the map
- BYOK: no server-side LLM key, users bring their own Anthropic or OpenAI key
- Case study covers: Problem → Architecture & Tech Decisions (6 bullets) → Outcome
- Card CTA: "Try it live →" → wayfarer.wjleece.dev

## Tone / content rules

- No marketing language ("powerful", "cutting-edge", "innovative")
- No padding — every sentence earns its place
- Case study structure: problem → architecture decisions → outcome
- Active status must be accurate: don't imply something is live if it isn't, and don't imply it's in development if it's shipped

## SEO

- Canonical: `https://wjleece.dev/`
- Metadata and OG tags in `layout.tsx` — update there if title/description changes
- Sitemap and robots are generated via Next.js route handlers in `app/`
- `next.config.ts` has one 301 redirect (index.html → /) — don't remove it

## Dev commands

```bash
npm run dev      # local dev server
npm run build    # production build — run this to verify before committing
npm run lint     # ESLint
```

## What not to do

- Don't add new pages/routes without a clear reason
- Don't add new dependencies for things a few lines of Tailwind/React can do
- Don't commit secrets, API keys, or personal info beyond what is already public (email in footer is intentional)

## Naming and CV rules

- Write ".NET" (not "Dotnet") everywhere: titles, meta, tags, CV. Recruiters search ".NET".
- The public CV must not contain a phone number. Location is "Fife, Scotland · Remote".
- The current role is remote for a Chesterfield-based employer; the junior role (Oct 2022 to Mar 2025) was hybrid, on-site in Chesterfield. Say so.
- Never invent metrics. Numbers on the CV/site must be real (Meducate figures already on the site are fine to reuse).
