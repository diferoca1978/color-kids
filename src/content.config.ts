import { defineCollection, reference, z } from 'astro:content';

import { glob } from 'astro/loaders';

const postCollection = defineCollection({
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

const authorCollection = defineCollection({
  loader: glob({ pattern: "**/*.(md|yml)", base: "./src/content/author" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
    instagram: z.string(),
    subtitle: z.string(),
    bio: z.string(),
  })
})


export const collections = {
  blog: postCollection,
  author: authorCollection
}