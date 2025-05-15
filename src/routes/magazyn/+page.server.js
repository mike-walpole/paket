import { getAllPosts, getAllCategories } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const [posts, categories] = await Promise.all([
      getAllPosts(),
      getAllCategories()
    ]);
    
    return {
      posts,
      categories
    };
  } catch (err) {
    console.error('Error loading posts:', err);
    throw error(500, 'Failed to load posts');
  }
} 