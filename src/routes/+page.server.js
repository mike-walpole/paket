import { getAllPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const posts = await getAllPosts();
    
    // Get the latest 3 posts for featured section
    const featuredPosts = posts.slice(0, 3);
    
    return {
      featuredPosts
    };
  } catch (err) {
    console.error('Error loading featured posts:', err);
    // Don't throw error, just return empty array so homepage still loads
    return {
      featuredPosts: []
    };
  }
} 