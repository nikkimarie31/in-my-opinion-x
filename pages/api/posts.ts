import clientPromise from '../../lib/mongodb';
import type { BlogPost } from '../../types/BlogPost';
import type { GetServerSideProps } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';


export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogPost[] | { message: string }>) {
  const categories = req.query.categories as string;
  let query = {};
  if (categories) {
    query = { category: categories };
  }
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 3;

    try {
        const posts = await fetchBlogPosts(page, limit);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const client = await clientPromise;
    const db = client.db('blog');
    const documents = await db.collection('posts').find({}).toArray();

    const posts: BlogPost[] = documents.map(doc => ({
      _id: doc._id.toString(), // Convert ObjectId to string
      title: doc.title,
      excerpt: doc.excerpt,
      content: doc.content,
      category: doc.category,
      datePosted: doc.datePosted,
      slug: doc.slug,

      author: doc.author,

      images: doc.images, // Include the images property, assuming it's correctly formatted
      tags: doc.tags,   // Include the tags property
    }));

    return { props: { posts } };
  } catch (e) {
    console.error(e);
    return { props: { posts: [], error: 'Failed to fetch posts' } };
  }
};

