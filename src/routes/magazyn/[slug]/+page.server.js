import { getPostBySlug, getAllPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { slug } = params;
  
  try {
    const post = await getPostBySlug(slug);
    
    if (!post) {
      throw error(404, 'Article not found');
    }
    
    // Get related posts (same category, excluding current post)
    const allPosts = await getAllPosts();
    const relatedPosts = allPosts
      .filter(p => 
        p._id !== post._id && 
        p.categories && 
        post.categories &&
        p.categories.some(cat => post.categories.includes(cat))
      )
      .slice(0, 3);
    
    return {
      post,
      relatedPosts
    };
  } catch (err) {
    console.error('Error loading post:', err);
    throw error(err.status || 500, err.message || 'Failed to load post');
  }
} 