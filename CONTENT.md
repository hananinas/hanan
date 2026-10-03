# Editorial workflow

The public site is not automatically connected to this local checkout. Local edits are drafts until Hanan separately authorizes a push and deployment.

## Update a page

1. Check the current local page and live page separately. Don't assume either has the newer factual version.
2. Verify dates, roles, product names and links from Hanan's own repositories or firsthand statements. Ask when a fact cannot be verified. A dated post can remain historically accurate even when the project has moved on; add a dated note rather than pretending its earlier architecture is current.
3. Write first person, short sentences and specific details. Avoid generic claims like "seamless," "innovative," and unmeasured SEO or performance results.
4. Keep frontmatter slugs and `pubDatetime` stable unless Hanan asks to migrate them. Existing `/projects/.../` URLs must keep working. Set `draft: true` for unfinished new posts.
5. Build locally with `~/.bun/bin/bun run build`, inspect rendered output and `git diff --check`, then show Hanan the changed paths. Do not push.

## Adding an article

Add a Markdown file to `src/content/blog/` with `author`, `pubDatetime`, `title`, `postSlug`, `description`, and `tags`. Check `src/content/_schemas.ts` for the current schema. Feature it only if it genuinely belongs on the homepage. Cite external claims with original sources in the article body; don't turn are.na research blocks into a public bibliography. Check rights before using any external image.

## Are.na research

Use the channel and source list in `research/design-references.md`. Collect concrete lessons such as "dates align on a fixed column" rather than vague moods. Record one thing *not* to copy. Are.na links are leads, not evidence of image rights, product facts, or a book's exact wording.
