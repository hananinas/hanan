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

## Refreshing this notebook

Fetch a channel with `curl -H 'Accept: application/json' 'https://api.are.na/v3/channels/SLUG/contents?page=1&per=15'`. Check `meta.has_more_pages` before advancing. Treat null `source` values and missing titles as ordinary. Record a concrete site-specific lesson and an anti-reference for each new link; discard anything without both.
