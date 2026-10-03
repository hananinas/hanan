import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import type { BlogFrontmatter } from "@content/_schemas";
export type SearchItem = { title: string; description: string; data: BlogFrontmatter; type: "blog"; slug: string; content?: string; };
export default function Search({ searchList }: { searchList: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const fuse = useMemo(() => new Fuse(searchList, { keys: ["title", "description", "content"], threshold: .35 }), [searchList]);
  useEffect(() => { setQuery(new URLSearchParams(window.location.search).get("q") || ""); }, []);
  const results = query.trim().length > 1 ? fuse.search(query).map(result => result.item) : [];
  function update(value: string) { setQuery(value); const url = new URL(window.location.href); value ? url.searchParams.set("q", value) : url.searchParams.delete("q"); window.history.replaceState(null, "", url); }
  return <div className="search-box"><label htmlFor="search-input">Search the archive</label><input id="search-input" type="search" value={query} onChange={event => update(event.target.value)} placeholder="Try Blop or Python" autoComplete="off" /><p className="result-count" aria-live="polite">{query.trim().length > 1 ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Type at least two characters"}</p><ul className="content-list">{results.map(item => <li key={item.slug}><a href={`/projects/${item.slug}`}><span className="meta">{new Date(item.data.pubDatetime).getFullYear()}</span><span className="entry-copy"><span className="entry-title">{item.title}</span><span className="entry-desc">{item.description}</span></span><span className="entry-arrow" aria-hidden="true">↗</span></a></li>)}</ul><style>{`.search-box{max-width:820px}.search-box label{display:block;font-size:.76rem;font-weight:650;margin-bottom:8px}.search-box input{width:100%;font:inherit;background:transparent;border:1px solid var(--line);border-radius:3px;padding:12px 14px;color:var(--ink)}.search-box input:focus{outline:2px solid var(--accent);outline-offset:2px}.result-count{font-size:.74rem;color:var(--secondary);margin:22px 0 15px}`}</style></div>;
}
