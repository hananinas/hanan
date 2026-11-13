# Homepage redesign from two references (shravani.design + kelindi.ca)

Date: 2026-11-01. Working copy: `/home/hanan/site-redesign-two-refs-20261101`, branch `master`. Nothing was pushed or deployed. No remote, tunnel or PR was used.

## What the homepage is now

The page opens with about 130px of air under the chrome. On the left is a small rotated print of the portrait inside crop marks, then the name in italic Instrument Serif and four short first-person paragraphs with green italic inline links. On the right is a plate of real work: a dashed pale field holding a browser-framed screenshot of elusivecph.com, a sneaker photo from the Elusive article and the kd-tree diagram, each with a small caption. Below that comes "On my desk right now:", a branch tree with elbows off one spine, then "Things I make:", a 2x2 index of the four projects. After that is one wide browser-framed plate of the older Friegrønne site, and the page closes with a contact sentence. The canvas is warm off-white with an SVG noise texture.

## Changes by file

| File | Change | Reference move |
|---|---|---|
| `src/components/Header.astro` | Replaced the wordmark and the mono text nav. A small dimensional "h" pebble mark sits top left and links home. The nav is a row of four original inline-SVG objects (Work: a project window, Studies: an open book with bookmark, About: an ID card, Search: a glass lens). They share top-light gradients, contact shadows and one accent dot. Inactive objects are warm grey, the active one is ink with a green dot and a bold label. All labels stay visible. Hover lifts 3px, and lift and spin are disabled under `prefers-reduced-motion`. Skip link and `aria-current` are kept. | Kelindi object nav; Shravani corner mark |
| `src/pages/index.astro` | Full rewrite of the composition described above. The `now` and `work` data is kept from the old page. | Both, see the summary above |
| `src/components/Footer.astro` | Same links (Email, GitHub, RSS). Dashed hairline, small sans, italic green links. "Copenhagen" added after the name. | Shravani link register |
| `src/styles/base.css` | Palette 148: sulphur-tinted canvas `#f4f2e4`, mineral ink `#23241e`, secondary `#545749`, pistachio accent `#536342`, red orange hover/focus `#a9401f` (see Palette below). `--display` is now Instrument Serif. Tailwind `skin` tokens are synced. Article typography rules are unchanged apart from the colours. | Kelindi canvas |
| `src/layouts/Layout.astro` | Google Fonts link: Spectral is replaced by Instrument Serif (roman and italic). Schibsted Grotesk gains its italic. Azeret Mono is kept for existing metadata on other pages. | |
| `public/images/elusive-home-2026-11.jpg` | New file: a 1440x900 screenshot of elusivecph.com I captured today with the local Chromium, after dismissing the analytics banner with its "No analytics" button. | Shravani browser plate |
| `docs/agents/scripts/crawl.mjs`, `shoot.cjs` | Link crawler and Playwright screenshot/assertion script | |

## Palette 148 (from the owner's swatch photos, 2026-11-01)

This palette replaces the earlier emerald-on-white and warm-cream palettes. Layout, icons, type, photos and copy are unchanged. Source: the upper row of palette 148 in `~/refs-two/palette148-primary.jpeg`. I sampled each swatch with an ImageMagick 15x15 median over a 200x200 crop from its interior and got mineral gray `#919481`, sulphur yellow `#cec696`, red orange `#b34525` and pistachio green `#657651`. The secondary photo was only used for a visual check.

| Role | Value | Swatch |
|---|---|---|
| Page canvas (`--page`, `skin-fill`, `skin-inverted`) | `#f4f2e4` | sulphur yellow, about 25% over white |
| Ink (`--ink`, `skin-base`) | `#23241e` | mineral gray, shadow end |
| Secondary text (`--secondary`) | `#545749` | mineral gray, darkened |
| Links, section labels, plate tag, active nav label (`--accent`, `skin-accent`) | `#536342` | pistachio, darkened to pass 4.5:1 on card |
| Home-mark dot (`--accent-bright`) | `#657651` | pistachio, as sampled |
| Hover ink on links and titles, focus ring (`--hover`) | `#a9401f` | red orange, slightly darkened |
| Active nav object dot (`--hover-bright`) | `#b34525` | red orange, as sampled |
| Plate field, browser bar, inline code (`--card`, `skin-card`) | `#e3e2d4` | mineral gray over page |
| URL pill, selection (`--card-muted`, `skin-card-muted`) | `#d6d5c6` | mineral gray over page |
| Hairlines, dashed frames, tree spine, bar dots (`--line`, `skin-border`, `skin-line`) | `#c2c3b2` | mineral gray, about 50% over page |

Other notes:

- The nav object artwork is unchanged: its gradients, shading and inactive warm-grey fills are as before.
- The white photo-print borders and the white browser and snapshot frames stay white, because they represent physical prints and screens.
- Photos are not filtered or recoloured.
- The brief asked for the icon active dot to be pistachio and also suggested red orange for the active nav dot. I made the active nav object dot red orange and left the home-mark dot pistachio.

## Contrast (WCAG, measured with `/tmp/contrast.mjs`)

| Colour | on page `#f4f2e4` | on card `#e3e2d4` | on card-muted `#d6d5c6` |
|---|---|---|---|
| Ink `#23241e` | 13.90 | 11.99 | 10.57 |
| Secondary `#545749` | 6.58 | 5.67 | 5.00 |
| Links `#536342` | 5.78 | 4.98 | 4.39 (no links on card-muted) |
| Hover / focus `#a9401f` | 5.43 | 4.68 | 4.13 |
| Pistachio dot `#657651` (non-text) | 4.38 | 3.78 | n/a |
| Red orange dot `#b34525` (non-text) | 4.92 | 4.24 | n/a |
| Hairline `#c2c3b2` (decorative) | 1.59 | 1.37 | n/a |

All text passes 4.5:1 on the page and on the card surface. The focus ring passes 3:1 on all three surfaces. Red orange works as hover text, at 4.68 or higher on page and card.

## Image assets used

- `public/images/hanan.png`: the portrait print. It is cropped with `object-fit` to the face area, and the black field is kept as black inside a white print border. No recolouring or fake transparency.
- `public/images/elusive-home-2026-11.jpg`: main plate, captioned "Elusive's front page, captured November 2026". Links to elusivecph.com.
- `public/images/IMG_1642-6.png`: captioned "Photo from my Elusive write-up". Links to `/projects/my-work-on-elusive`.
- `public/blog-images/kdtree.png`: captioned "kd-tree diagram from my write-up". Links to `/projects/kd-tree`.
- `public/blog-images/oldfriegronne.png`: the "Something older" plate. Links to the Friegrønne article.
- Not used: `figma-first.png`, `logofrie.png`, `favicon.svg`, `logo.svg`. The corner mark is a new SVG.

## Copy

- Rephrased for rhythm from `index.astro` and `about.md`:
  - "MSc computer science at DTU, part-time engineer at Context&, founder of Unravel AI" became "I study computer science at DTU, work part time as an engineer at Context&, and founded Unravel AI. I live in Copenhagen."
  - Arvel became "a local-first agent workspace".
  - Blop became "tests browsers by intent and checks what agents did". This combines its two stated facts: intent-based browser testing, and deterministic checks over agent traces.
  - Elusive and Unravel Search are described as stated in the source copy.
- Now items: the text is kept, apart from "blop" capitalised to "Blop" and "School: Python" changed to "School for Python". The thesis line is kept unstrengthened.
- The stamp still reads "Updated October 2026". I did not move it because I cannot verify that the items are current for November.
- Removed: the "Copenhagen, Denmark / October 2026" masthead, the slogan headline "I build software for working with AI agents", and the mono uppercase link chips. The project meta column changed from years and "Live" to short descriptors ("Agent workspace", "Testing", and the two domains).
- Added a factual caption about Friegrønne. It is paraphrased from the article: mapped pages, Figma layouts, built in WordPress.

## Commands and results

```
export PATH=$HOME/.bun/bin:$HOME/.local/bin:$HOME/.nix-profile/bin:$PATH
bun run build                                   -> exit 0, "29 page(s) built", 0 lines matching "error" (log /tmp/hp2/build.log)
node docs/agents/scripts/crawl.mjs dist         -> html files: 29, internal links checked: 318, missing: 0
bun x serve dist -l 8911  (background)
node docs/agents/scripts/shoot.cjs docs/agents/evidence -> 30/30 assertions passed (log /tmp/hp2/shoot.log)
git diff --check                                -> clean
grep for en/em dashes in index/Header/Footer    -> none
```

Assertions, at both 1440x900 and 390x844 (all PASS):
- Homepage: all 5 images `complete && naturalWidth > 0`, all with alt text.
- `document.fonts.check` is true for Instrument Serif and Schibsted Grotesk. This is a weak check, but I confirmed visually in the screenshots that the italic serif renders.
- `scrollWidth <= innerWidth + 1` on `/`, `/projects`, `/about` and `/search`.
- `aria-current="page"` sits on the matching nav item for `/projects`, `/about` and `/search`.
- Clicking the Work, Studies, About and Search objects lands on `/projects`, `/studies`, `/about` and `/search`. The corner mark goes back to `/`.
- On `/search`, typing "elusive" shows 1 result link.

## Evidence (`docs/agents/evidence/`)

`home-1440.png`, `home-390.png`, `home-1440-full.png`, `home-390-full.png`, `projects-1440.png`, `projects-390.png`, `about-1440.png`, `about-390.png`, `search-1440.png`, `search-390.png`, `search-390-results.png`. I opened and looked at the home shots at both widths, plus about-1440, projects-390 and search-390-results. While looking, I fixed two problems I found:
- On mobile, the sneaker photo covered the Elusive caption and its own caption was clipped.
- The kd-tree caption said "map project", which claimed more than the article supports.

## Not done / uncertain

- On a 390px screen, the first screen shows Hanan and the intro, and the work plate starts just below the fold. It is "immediately under", not in the first screen.
- Article titles on `/projects` still contain em dashes ("Khadim — Building…"). They come from existing frontmatter titles, and I left them to preserve the content.
- The Search page's clear button is still the old blue X from `Search.tsx`. I did not restyle it.
- `DESIGN.md` still describes the old "quiet index" direction and says "never glossy icons". It now contradicts the build and needs Hanan's call before it is rewritten. `research/design-references.md` has not been updated with these two references yet.
- Studies, 404 and article detail pages are only covered by the build, the crawl and the nav-click test. I did not screenshot them.

## Scope addition: Arvel desk buddy

Brief: `/tmp/brief-deskbuddy.md`. Content addition only. No styles, nav objects, intro, plate or tree list touched.

### README facts actually read
Source: `gh api repos/hananinas/arvel` (default branch `main`, `private: false`) and `gh api repos/hananinas/arvel/readme`.
- "Arvel is a desk companion for the Waveshare ESP32-S3-Touch-LCD-3.49. It runs ESP-IDF firmware with a touchscreen interface, a SvelteKit web app, and the Rust unravel-agent-runtime on the board."
- "You can type or talk to it, set timers, keep notes, check the weather, and search the web. Cloud models handle conversation. The board runs the agent loop and device tools."
- Owner web app shows the screen live and keeps conversation history. It is HTTP only, trusted LAN only.
- Timers, notes, calculations, conversions run locally. Weather uses Open-Meteo. Web search needs a key and starts disabled.
- "The NVIDIA deployment has not been GPU-tested in this project."
- "The current firmware has host-test and build coverage, but not physical display, audio, or SD-fault verification."
- Local speech is an English formant voice, not neural TTS. C++ binding runs the Rust agent via a C ABI; C++ supplies model transport and tool callbacks. Panel is 172 x 640.

Differences from the brief summary: nothing contradicts it. The README is more specific in two places, both reflected in the article: the Rust runtime is the separate `unravel-agent-runtime` repo, and "the board runs the agent loop and device tools". The README also covers Nebius sandbox tools and a Codex voice mode; left out because they were not on the verified list.

### Image
- URL: `https://raw.githubusercontent.com/hananinas/arvel/main/docs/images/arvel-device.jpg`
- Saved as `public/images/arvel-desk-buddy.jpg`, 120334 bytes, JPEG 1200x800, unmodified (already under 400KB, no downscale).
- Alt text adapted from the README's own alt for the same photo.

### Files
- Added `src/content/blog/arvel-desk-buddy.md` (347 body words, pubDatetime `2026-11-01T19:36:13Z` from `date -u`, no `draft` key because no other post uses one). Route: `/projects/arvel-desk-buddy`.
- Added `public/images/arvel-desk-buddy.jpg`.
- Changed `src/pages/index.astro`: one new `work` entry (meta "Desk companion") directly after the desktop Arvel entry. The grid has no thumbnails, so none was added.
- Added `docs/agents/scripts/shoot-deskbuddy.cjs` (new script with the same playwright-core path, chromium-1248 executablePath and port 8911 as `shoot.cjs`; `shoot.cjs` unchanged).

### Commands and results
- `bun run build` -> exit 0, "33 page(s) built", log `/tmp/deskbuddy-build.log`.
- `node docs/agents/scripts/crawl.mjs dist` -> "html files: 33, internal links checked: 366, missing: 0".
- `python3 -m http.server 8911` in `dist`, then `node docs/agents/scripts/shoot-deskbuddy.cjs <outdir>` -> ALL PASS (log `/tmp/deskbuddy-shoot.log`): article image `/images/arvel-desk-buddy.jpg` complete, naturalWidth 1200, at 1440 and 390; all 5 homepage images loaded; scrollWidth 1440/1440 and 390/390 on both pages; desk buddy href directly after `/projects/khadim-local-first-ai-coding-agent`.
- Em/en dash grep on the article: none.

### Screenshots (opened and checked)
`docs/agents/evidence/deskbuddy/`: `home-made-1440.png`, `home-made-390.png`, `home-1440-full.png`, `home-390-full.png`, `arvel-desk-buddy-1440.png`, `arvel-desk-buddy-390.png`, plus `-full` variants of the article.

### Not verified / open
- The work grid went from 4 to 5 items, so at desktop width Elusive now sits alone on the last row. No styling changed per the brief; Hanan may want to decide whether that is fine.
- The article's opening line linking back to the desktop Arvel post is my wording to keep the two apart, not a README claim.
- `unravel-agent-runtime` itself was not inspected beyond the README link.
