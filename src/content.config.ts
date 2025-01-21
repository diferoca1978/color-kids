import { defineCollection, reference, z } from 'astro:content';

import { glob } from 'astro/loaders';

const postCollections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    draft: z.boolean(),
    pubDate: z.date(),
    description: z.string(),
    image: image(),
    author: reference('author'),
    tags: z.array(z.string()),
  })
})

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/author" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
    instagram: z.string(),
    subtitle: z.string(),
  })
})


export const collections = {
  blog: postCollections,
  author: authorsCollection
}