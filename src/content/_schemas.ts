import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export const notesSchema = z
  .object({
    title: z.string(),
    semester: z.string(),
    semesterOrder: z.number().optional(),
    timeframe: z.string(),
    course: z.string(),
    courseCode: z.string().optional(),
    courseOrder: z.number().optional(),
    week: z.string(),
    weekOrder: z.number().optional(),
    focus: z.string().optional(),
    draft: z.boolean().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
export type NotesFrontmatter = z.infer<typeof notesSchema>;
