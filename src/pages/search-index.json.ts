import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const reviews = await getCollection('reviews');

  const data = reviews.map((r) => ({
    slug: r.id,
    url: `/reviews/${r.data.category}/${r.id}/`,
    title: r.data.productName,
    brand: r.data.brand,
    image: r.data.image,
    imageAlt: r.data.imageAlt,
    rating: r.data.rating,
    priceRange: r.data.priceRange,
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
