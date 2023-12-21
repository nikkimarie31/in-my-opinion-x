import styles from '../styles/blog.module.css'; // Ensure this path is correct
import type { NextPage, GetServerSideProps } from 'next';
import { fetchBlogPosts } from '../utils/fetchBlogPosts'; // Adjust the path as necessary
import type { BlogPost } from '../types/BlogPost';

type BlogProps = {
    posts: BlogPost[];
    error?: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const posts = await fetchBlogPosts();
        return { props: { posts } };
    } catch (e) {
        console.error(e);
        return { props: { posts: [], error: 'Failed to fetch posts' } };
    }
};

const Blog: NextPage<BlogProps> = ({ posts, error }) => {
    if (error) {
        return <div className={styles.error}>Error loading posts: {error}</div>;
    }

    return (
        <div className={styles.blogPostContainer}>
            {posts.map((post, index) => (
                <article key={index}>
                    <h2 className={styles.blogPostTitle}>{post.title}</h2>
                    <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <p className={styles.blogPostAuthor}>Author: {post.author}</p>
                    <p className={styles.blogPostDate}>Posted on: {post.datePosted.toDateString()}</p>
                    <p className={styles.blogPostCategory}>Category: {post.category}</p>
                    <div className={styles.blogPostImages}>
                        {post.images && post.images.map((image, idx) => (
                            <img key={idx} src={image} alt={`Image ${idx}`} className={styles.blogPostImage} />
                        ))}
                    </div>
                    <div className={styles.blogPostTags}>
                        {post.tags && post.tags.map((tag, idx) => (
                            <span key={idx} className={styles.blogPostTag}>{tag}</span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Blog;
