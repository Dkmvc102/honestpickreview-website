import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = z.enum([
  'home-kitchen',
  'electronics',
  'fitness-outdoor',
  'tools-diy',
  'baby-kids',
  'beauty-personal-care',
  'health-supplements',
  'fashion-accessories',
  'automotive',
]);

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    brand: z.string(),
    category: categories,
    image: z.string(),
    imageAlt: z.string(),
    rating: z.number().min(0).max(5),
    priceRange: z.string(),
    bestFor: z.string(),
    shortSummary: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    affiliateUrl: z.string().default('#'),
    author: z.string().default('HonestPick Editorial Team'),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

const bestof = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bestof' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: categories,
    image: z.string(),
    imageAlt: z.string(),
    items: z.array(
      z.object({
        reviewSlug: z.string(),
        rank: z.number(),
        blurb: z.string(),
      })
    ),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: categories,
    image: z.string(),
    imageAlt: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

const compare = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compare' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: categories,
    productA: z.object({ reviewSlug: z.string(), verdict: z.string() }),
    productB: z.object({ reviewSlug: z.string(), verdict: z.string() }),
    winner: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = { reviews, bestof, blog, compare };
