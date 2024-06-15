import { date } from 'astro/zod';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        author: z.string(),
        date: z.coerce.date(),
        readingTime: z.string(),
    }),
});

const links = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        title: z.string(),
        url: z.string(),
    })),
});

const talks = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        event: z.string(),
        description: z.string(),
        links: z.object({
            slides: z.string(),
            video: z.string(),
            post: z.string(),
        }).partial(),
    }),
});

export const collections = { blog, links, talks };

