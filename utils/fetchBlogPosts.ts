import clientPromise from '../lib/mongodb';
import { BlogPost } from '../types/BlogPost';



export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const documents = await db.collection('posts').find({}).toArray();

    return documents.map(doc => ({
        _id: doc._id.toString(),
        title: doc.title,
        excerpt: doc.excerpt,
        content: doc.content,
        category: doc.category,
        datePosted: doc.datePosted,
        slug: doc.slug,
        images: doc.images,
        tags: doc.tags,
        author: doc.author
    }));
};
