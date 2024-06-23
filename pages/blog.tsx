import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import { fetchCategories } from '../utils/fetchCategories'; 
import { BlogPost } from '../types/BlogPost';
import { GetServerSideProps } from 'next';
import { fetchBlogPosts } from '../utils/fetchBlogPosts';
import { NextPage } from 'next';
import clientPromise from '../lib/mongodb';

type BlogProps = {
    initialPosts: BlogPost[];
    categories: string[];
    totalPages: number;
};

export const getServerSideProps: GetServerSideProps<BlogProps> = async (context) => {
    const category = context.query.category as string;
    const page = parseInt(context.query.page as string) || 1;
    const limit = 3;

    try {
        const client = await clientPromise;
        const db = client.db('blog');

        const posts = await fetchBlogPosts(page, limit, category);
        const categories = await fetchCategories();

        const totalPosts = await db.collection('posts').countDocuments();
        const totalPages = Math.ceil(totalPosts / limit);

        return { 
            props: { 
                initialPosts: posts, 
                categories, 
                totalPages 
            } 
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);
        return { 
            props: { 
                initialPosts: [], 
                categories: [], 
                totalPages: 0 
            } 
        };
    }
};

const Blog: NextPage<BlogProps> = ({ initialPosts, categories, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

    useEffect(() => {
        const fetchPosts = async () => {
            let url = `/api/posts?page=${currentPage}`;
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const newPosts = await response.json();
            setPosts(newPosts);
        };

        fetchPosts();
    }, [currentPage, selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className={styles.blogContainer}>
            <h1>In My Opinion Blog</h1>
            <div className={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        className={styles.categoryButton}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.postsContainer}>
                {posts.map((post) => (
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
                        className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.currentPage : ''}`}
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
