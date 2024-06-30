import clientPromise from '../lib/mongodb';
import { BlogPost } from '../types/BlogPost';

export const fetchBlogPosts = async (page: number = 1, limit: number = 3, category?: string): Promise<BlogPost[]> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const skip = (page - 1) * limit;

    let query = {};
    if (category) {
        query = { ...query, category };
    }

    const documents = await db.collection('posts')
        .find(query)
        .sort({ datePosted: -1 })
        .skip(skip)
        .limit(limit)
        .toArray();

    return documents.map(doc => ({
        _id: doc._id.toString(),
        title: doc.title,
        excerpt: doc.excerpt,
        content: doc.content,
        category: doc.category,
        datePosted: new Date(doc.datePosted).toISOString(), // Ensure it's a string for serialization
        slug: doc.slug,
        images: doc.images,
        tags: doc.tags,
        author: doc.author
    }));
};
