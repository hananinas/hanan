import { defineCollection } from "astro:content";
import { blogSchema, notesSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const notes = defineCollection({
  schema: notesSchema,
});

export const collections = { blog, notes };
