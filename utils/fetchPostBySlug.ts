// utils/fetchPostBySlug.ts
import clientPromise from '../lib/mongodb';
import { BlogPost } from '../types/BlogPost';

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const document = await db.collection('posts').findOne({ slug });

    if (!document) {
        return null; // No post found for the given slug
    }

    // Convert MongoDB document to BlogPost type
    return {
        _id: document._id.toString(),
        title: document.title,
        excerpt: document.excerpt,
        content: document.content,
        category: document.category,
        datePosted: document.datePosted,
        slug: document.slug,
        images: document.images,
        tags: document.tags,
        author: document.author
    };
};
