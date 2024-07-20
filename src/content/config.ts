import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    ogImage: z.string().optional(),
  }),
});

const links = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    }),
  ),
});

const talks = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    event: z.string(),
    description: z.string(),
    links: z
      .object({
        slides: z.string(),
        video: z.string(),
        post: z.string(),
      })
      .partial(),
  }),
});

const books = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    cover: z.string(),
    title: z.string(),
    author: z.string(),
    progress: z.string(),
  }),
});

const nytGames = defineCollection({
  type: "data",
  schema: z
    .object({
      isItfinished: z.boolean(),
      // Wordle / Connections
      results: z.string(),
      // Spelling Bee
      todaysPoints: z.string(),
      todaysRank: z.string(),
      // Mini / Crossword
      todaysTime: z.string(),
      // Crossword
      streak: z.string(),
    })
    .partial(),
});

export const collections = { posts, links, talks, books };
