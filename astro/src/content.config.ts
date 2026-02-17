import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    minititle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(reference("people")),
  })
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/people" }),
  schema: z.object({
    name: z.string(),
  })
});

export const collections = {
  posts,
  people,
};