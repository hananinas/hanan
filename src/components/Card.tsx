import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href = "#", frontmatter, secHeading = true }: Props) {
  const { title, description, ogImage, tags = [] } = frontmatter;

  return (
    <li className="group relative list-none">
      <a
        href={href}
        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F8F5B]/60 dark:focus-visible:outline-[#6FCF97]/60"
        aria-label={`View ${title}`}
      >
        <article className="flex h-full flex-col overflow-hidden rounded-[24px] border-2 border-[#d9ccb6] dark:border-[#6FCF97]/15 bg-[#f7f1e5] dark:bg-[#0d0d0d]/80 shadow-lg shadow-gray-300/50 dark:shadow-[#0b2421]/30 transition duration-200 group-hover:-translate-y-2 group-hover:border-[#2F8F5B] dark:group-hover:border-[#6FCF97]/40 group-hover:shadow-xl group-hover:shadow-[#2F8F5B]/25 dark:group-hover:shadow-[#6FCF97]/25">
          {ogImage && (
            <div className="relative aspect-[5/3] overflow-hidden border-b-2 border-[#d9ccb6] dark:border-[#6FCF97]/10 bg-[#efe7d6] dark:bg-[#071410]">
              <img
                src={ogImage}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col gap-4 p-6">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2F8F5B] dark:border-[#6FCF97]/40 bg-[#2F8F5B]/10 dark:bg-[#6FCF97]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2F8F5B] dark:text-[#6FCF97]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {secHeading ? (
              <h2 className="text-xl font-semibold text-[#2B2A26] dark:text-skin-base transition group-hover:text-[#2F8F5B] dark:group-hover:text-[#6FCF97]">
                {title}
              </h2>
            ) : (
              <h3 className="text-xl font-semibold text-[#2B2A26] dark:text-skin-base transition group-hover:text-[#2F8F5B] dark:group-hover:text-[#6FCF97]">
                {title}
              </h3>
            )}

            {description && (
              <p className="flex-1 text-sm leading-relaxed text-gray-800 dark:text-skin-base/90">
                {description}
              </p>
            )}

            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2F8F5B] dark:text-[#D9B95B]">
              <span>Open project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="m13 5.586 4.707 4.707-9.586.001V13.7h9.586L13 18.414 14.414 19.8 21.828 12.384 14.414 4.97 13 5.586z"
                ></path>
              </svg>
            </span>
          </div>
        </article>
      </a>
    </li>
  );
}
