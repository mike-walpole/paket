import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '2swairy5', // Replace with your actual Sanity project ID
  dataset: 'production',
  apiVersion: '2023-09-21', // Use current date in YYYY-MM-DD format
  useCdn: true,
});

// Helper function for Sanity images
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

// Query functions
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "authorName": author->name,
      "categories": categories[]->title,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }
  `);
}

export async function getPostBySlug(slug) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      "authorName": author->name,
      "authorImage": author->image,
      "categories": categories[]->title
    }
  `, { slug });
}

export async function getAllCategories() {
  return await client.fetch(`
    *[_type == "category"] {
      _id,
      title
    }
  `);
} 