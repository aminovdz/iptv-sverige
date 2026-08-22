import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Erik Lindqvist'),
    heroImage: z.string().default('/images/hero-bg.webp'),
    imageAlt: z.string().default('IPTV Sverige Guide'),
    tags: z.array(z.string()).default(['IPTV Sverige', 'Svensk IPTV', 'Streaming']),
    featured: z.boolean().default(false),
    readingTime: z.string().default('6 min'),
    category: z.string().default('Guider'),
    targetKeyword: z.string().optional(),
  }),
});

export const collections = { guides };
