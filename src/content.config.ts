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
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  })
});

const poems = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/poems" }),
  schema: z.object({
    title: z.string(),
    minititle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(reference("people")),
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  })
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/people" }),
  schema: z.object({
    name: z.string(),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    minititle: z.string().optional(),
    description: z.string(),
    descriptionPtBr: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    repoUrl: z.string().url(),
    tags: z.array(z.string()).optional(),
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  })
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/books" }),
  schema: z.object({
    title: z.string(),
    minititle: z.string().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    hasPage: z.boolean().optional().default(false),
    pinned: z.boolean().optional().default(false),
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  })
});

export const collections = {
  posts,
  poems,
  people,
  projects,
  books,
};