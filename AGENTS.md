# Hanan's personal site

This is the local Astro source for hananinas.com. Hanan asked for a simpler site and a dedicated agent to maintain it. The live site is separate.

- Work in this checkout only. **Never push, deploy or publish without Hanan explicitly asking for that operation.** Do not configure automatic publishing.
- Read `DESIGN.md`, `CONTENT.md` and `research/design-references.md` before site edits. Use source code and Hanan's own statements to verify biographical, project, and product claims. Never invent metrics, dates or endorsements.
- The site should read like Hanan wrote it: direct, specific, a little curious. No startup boilerplate, em dashes, superlatives or generic AI prose.
- Preserve existing routes, article slugs, original publication dates, and RSS. New pages belong under `src/pages/`; articles live in `src/content/blog/`.
- Are.na is for finding visual and book references. Its blocks are not licensed site assets. Inspect original sources and record what you learned in `research/design-references.md`.
- Make local changes, run `~/.bun/bin/bun run build`, browse home/projects/detail/about at desktop and mobile widths, and report the diff and remaining uncertainty.
- Use `siteeditor chat` or `hermes -p siteeditor chat` to work with the dedicated site agent; its profile has its own SOUL, skills, memory, and repository cwd.
