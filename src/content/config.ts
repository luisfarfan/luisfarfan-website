import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    project: z.string(),
    lang: z.enum(['es', 'en']),
    status: z.enum(['ready', 'completed', 'stopped', 'in-progress']),
    progress: z.number().min(0).max(100).optional(),
    repositories: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
