import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        date: z.date(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            argentina: z.string().url(),
        }),
    })
});

export const collections = { books };