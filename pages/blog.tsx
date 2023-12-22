// pages/blog.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import { fetchCategories } from '../utils/fetchCategories'; // Adjust the import paths
import { BlogPost } from '../types/BlogPost';
import { GetServerSideProps } from 'next';
import { fetchBlogPosts } from '../utils/fetchBlogPosts';
import { NextPage } from 'next';


type BlogProps = {
    initialPosts: BlogPost[];
    categories: string[];
    totalPages: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const page = parseInt(context.query.page as string) || 1;
    const categories = await fetchCategories();
    const posts = await fetchBlogPosts(page);
    const totalPages = 5; // Replace with actual logic to calculate total pages

    return { props: { initialPosts: posts, categories, totalPages } };
};

const Blog: NextPage<BlogProps> = ({ initialPosts, categories, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        const fetchPosts = async () => {
            const newPosts = await fetchBlogPosts(currentPage);
            const formattedPosts = newPosts.map(post => ({...post,
            datePosted: new Date(post.datePosted)}));
            setPosts(formattedPosts);
        };

        if (currentPage !== 1) {
            fetchPosts();
        }
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={styles.blogContainer}>
            <h1>In My Opinion Blog</h1>
            <div className={styles.categoryContainer}>
                {categories.map((category: string, index: number) => (
                    <button key={index} className={styles.categoryButton}>
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.postsContainer}>
                {posts.map((post: BlogPost) => (
                    <div key={post._id} className={styles.postPreview}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a className={styles.readMoreLink}>Read More</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.paginationContainer}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={styles.paginationButton}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Blog;
