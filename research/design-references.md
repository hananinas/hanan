# Working design references

Research notes for the local site. Are.na is an index of links and scans, not a source of licensed images or published facts. Do not import the referenced PDFs or artwork.

## Are.na channels checked

- [Web Design, curated by Zach Krall](https://www.are.na/zach-krall/web-design-wnuiok426ru), API slug `web-design-wnuiok426ru`: large mixed list of contemporary sites. The sampled links included [dany.works](https://dany.works/), [Channel Studio](https://channel.studio/), and [Obys' Design Books](https://library.obys.agency/). These original sites responded successfully when checked on October 3, 2026. Study how they present authorship and navigation; do **not** copy their visual signatures wholesale, or their images.
- [Design Books, curated by Serena Milesi](https://www.are.na/serena-milesi/design-books-9ttwuxdikaq), API slug `design-books-9ttwuxdikaq`: indexed PDFs included Robert Bringhurst's *The Elements of Typographic Style* and Josef Müller-Brockmann's *Grid Systems in Graphic Design*. This is a discovery list, not authorized distribution. Find publisher/author sources before quoting either book.
- [Design Books, curated by Jacob Diaz](https://www.are.na/jacob-diaz/design-books-mchhmibew2i), API slug `design-books-mchhmibew2i`: indexed *Making and Breaking the Grid* and David Reinfurt's *A New Program for Graphic Design*. Useful leads for thinking about grids, not content for republication.

## Reading and practical decisions

- [Ellen Lupton, *Thinking with Type*, third edition](https://papress.com/products/thinking-with-type-3-edition). Its remit covers the relationship between letters, text and grids. For this site, prioritize a clear visual sequence: identity, work, writing, and contact. Don't falsely present this site-specific choice as a quotation from Lupton.
- [Matthew Butterick, *Practical Typography*, line length](https://practicaltypography.com/line-length.html) and [key rules](https://practicaltypography.com/summary-of-key-rules.html). He recommends an average of 45–90 characters per line, web body size 15–25px and line spacing of 120–145%. Set article width and type accordingly; verify at mobile and desktop widths.
- Müller-Brockmann's grid book prompts alignment discipline: date, title and description should sit on a predictable baseline in project indexes. This is our application, not a quoted rule.

## Decisions not to copy

No scanned covers, images or type specimens from are.na. No stock picture labeled as Hanan's work. No terminal-themed chrome simply because he codes. No ornamental cards around every project. No invented metrics or anonymous testimonials.

## Personal-sites channel, sampled October 2026

Channel: [Personal Sites](https://www.are.na/kelindi/personal-sites-_sxervw2jmu), curated by kelindi, 32 blocks. Fetched via the v3 API and each original URL opened rather than judged from the thumbnail. The collection is mostly designer and engineer portfolios. Shared grammar: a statement, then a flat index of work, one accent, no card grids. Sizes observed: statements set 1.6 to 2.4rem light, indexes 0.85 to 1rem, labels in mono or small caps.

Per-site lesson and what not to take:

- **Kelindi** ([kelindi.ca](https://www.kelindi.ca/)): a current-interests list drawn as a file tree, one hairline spine with a tick per item, and a narrow left column against a wide text column. The page's personality comes from that diagram, not from color or type. Not to copy: the skeuomorphic floppy-disk and glossy desktop icons; the metaphor only works once, and it dates.
- **Justin Rands** ([jrands.com](https://jrands.com/)): a live status line, tiny green dot plus "Currently at", and mono uppercase footer data including local time. This is the cleanest way the collection states current state. Not to copy: the glassy floating dock and iOS-style pill chrome.
- **Kevin Shay** ([kevinshay.me](https://kevinshay.me/)): the bio at display size, around 2rem light, as the loudest thing on the page rather than a small paragraph. Not to copy: the pale gray on white, which sits near 2:1 contrast, and the four-up product screenshot strip.
- **Sarim Malik** ([sarimmalik.com](https://www.sarimmalik.com/)): writing index with no rules at all, only spacing; the arrow glyph trails the title inline instead of sitting in its own column; small inline "New" labels after a title. Read more casual than our aligned table. Not to copy: the inline pill labels, which drift toward badges.
- **Victor Guo** ([victorguo.com](https://www.victorguo.com/)): one real number with a real chart, labeled in tracked mono above it, and a year divider with a downward arrow. The move is the honesty of showing the data behind a claim. Not to copy: the hero-metric template itself, and any metric we cannot source.
- **Melike Turgut** ([meliketurgut.com](https://meliketurgut.com/)): the whole first screen is one enormous lowercase wordmark in olive on a warm gray, chapters behind it. Confident silence. Not to copy: nothing actionable above the fold; a visitor who does not already know the name leaves.
- **Mitch Ivin** ([mitchivin.com](https://mitchivin.com/)): a drenched single hue and full art direction. Not to copy: CRT boot screens, scanlines and login cosplay; decoration standing in for identity.
- **Tom Johnson** ([tomjohn.design](https://www.tomjohn.design/)), **Sam Peitz** ([sam-peitz.com](https://www.sam-peitz.com/)), **Eduard Povierin** ([night-ed.com](https://night-ed.com/)), **Luc Palombo** ([lucp.xyz](https://lucp.xyz/)), **Laurent del Rey** ([laurent.fyi](http://laurent.fyi)): the dark-canvas cluster. Strong atmosphere, large display type, motion on load. Their density is the anti-lesson for a site whose job is letting a recruiter or supervisor find the work in seconds.
- **Neel Saswade** ([neelsaswade.com](https://neelsaswade.com/)), **Shravani Kasralikar** ([shravani.design](https://shravani.design/)): serif display over a quiet body, which several sites in the channel share. Tempting, but our type pairing is committed; swapping fonts here would chase the channel rather than extend the site.

First pass applied the structure: status dot before the location line (Rands), the statement at display size (Shay), mono tracked labels (Guo), the file-tree Now list (kelindi). Hanan rejected keeping the old type and palette, so the second pass replaced them.

Second pass, committed direction:

- Display type is Instrument Serif, set large for the statement and at 1.5 to 1.8rem for work titles and article headings. It is the face several sites in the channel use (Neel Saswade, Shravani Kasralikar), so it is a shared move rather than a personal one; chosen because it is the strongest readable serif that pairs with a technical body and because Hanan asked for the channel's styling directly. Instrument Serif is on our reflex-reject list and this override is deliberate, recorded so a later pass does not "restore" it.
- Body and UI are Geist, labels are Geist Mono, uppercase and tracked. One superfamily plus the serif, replacing Manrope and DM Mono entirely. Geist appears in the channel too (Neel, Sparsh).
- Paper moved warm, `#fafaf8` to `#f7f4ed`; ink moved warm near-black, `#242923` to `#1a1a15`; the accent deepened to forest `#2c4433`.
- The statement is set roman then italic, the italic line one step down in color. Work titles are serif, descriptions stay in the body face.

Rejected from the channel: the dark canvas as a site default, CRT and boot-screen cosplay, glass docks, oversized empty first screens, hero metrics, and image strips standing in for the work index.


## Refreshing this notebook

Fetch a channel with `curl -H 'Accept: application/json' 'https://api.are.na/v3/channels/SLUG/contents?page=1&per=15'`. Check `meta.has_more_pages` before advancing. Treat null `source` values and missing titles as ordinary. Record a concrete site-specific lesson and an anti-reference for each new link; discard anything without both.
