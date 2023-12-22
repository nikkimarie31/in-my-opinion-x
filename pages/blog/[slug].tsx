// pages/blog/[slug].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Post.module.css';
import { fetchPostBySlug } from '../../utils/fetchPostBySlug';
import { BlogPost } from '../../types/BlogPost';

const PostPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (typeof slug === 'string') {
            fetchPostBySlug(slug).then(data => setPost(data));
        }
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.postContainer}>
            <h1>{post.title}</h1>
            <p className={styles.author}>By {post.author}</p>
            <p className={styles.datePosted}>Posted on: {new Date(post.datePosted).toDateString()}</p>
            {post.images && post.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} className={styles.postImage} />
            ))}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export default PostPage;
