import { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Post.module.css';
import { fetchPostBySlug } from '../../utils/fetchPostBySlug';
import { BlogPost } from '../../types/BlogPost';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect } from 'react';

type PostPageProps = {
    post: BlogPost;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

    if (!post) {
        return <div>Loading...</div>; 
    }

    const formattedContent = (content: string) => content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    return (
        <div className={styles.postContainer}>
            <h1>{post.title}</h1>
            <p className={styles.author}>By {post.author}</p>
            <p className={styles.datePosted}>Posted on: {new Date(post.datePosted).toDateString()}</p>
            {post.images && post.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} className={styles.postImage} />
            ))}
            <div className="postContent">
                {formattedContent(post.content)}
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (context) => {
    const slug = context.params?.slug;

    if (typeof slug === 'string') {
        const post = await fetchPostBySlug(slug);
        if (!post) {
            return { notFound: true };
        }
        return { props: { post } };
    }

    return { notFound: true };
};

export default PostPage;
