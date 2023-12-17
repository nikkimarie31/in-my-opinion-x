import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';
import clientPromise from '../lib/mongodb';


type BlogPost = {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    datePosted: Date;
    slug: string;
    image?: [string];
    author: string;
    tags?: [string];
  };
  
  type BlogProps = {
    posts: BlogPost[];
    error?: string;
  };
  
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
        images: doc.images, // Assuming this is an array of image URLs
        author: doc.author,
        tags: doc.tags, // Assuming this is an array of tags
        // ... map any other properties as needed
      }));
  
      return { props: { posts } };
    } catch (e) {
      console.error(e);
      return { props: { posts: [], error: 'Failed to fetch posts' } };
    }
  };
  
  
  const Blog: NextPage<BlogProps> = ({ posts,error }) => {
    console.log(posts);
    return (
      <div>
        {posts.map((post: BlogPost, index: number) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p>{post.content}</p>
            <p>{post.category}</p>
            <p>{post.slug}</p>
            <p>{post.image}</p>
            <p>{post.author}</p>
           <p>{post.datePosted ? post.datePosted.toDateString() : 'Date not available'}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Blog;
  