import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";


export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description,ogImage,tags } = frontmatter;
  return (
    <div className="my-6 w-[360px] h-[100%] border-solid border-[1px]">
        <img src={ogImage} alt="" />
        <div className="w-[360px] h-[37px] border-solid border-b-[1px] flex ">
            {tags.map(tag => <span className="ml-3 mt-1 ">{tag}</span>)}
       </div>
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-[24px] text-left mt-4 ml-5 text-[#6FCF97] font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      
      <p className="ml-3 mt-2 mb-1">{description}</p>

    </div>
  );
}
