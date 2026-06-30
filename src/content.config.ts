import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Add a project by dropping a markdown file in src/content/projects/.
// Files beginning with "_" are ignored (so _template.md is a starter, not a page).
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one-line, shown on the card
    status: z.enum(['shipped', 'brewing', 'idea']).default('brewing'),
    role: z.string().optional(),
    tech: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: z.string().optional(), // path under /public, e.g. /projects/foo.png
    order: z.number().default(0), // manual sort; lower = first
    featured: z.boolean().default(false),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
