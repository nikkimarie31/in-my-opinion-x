import { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Post.module.css';
import { fetchPostBySlug } from '../../utils/fetchPostBySlug';
import { BlogPost } from '../../types/BlogPost';

type PostPageProps = {
    post: BlogPost;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>; // Or handle the "not found" state differently
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

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (context) => {
    const slug = context.params?.slug;

    if (typeof slug === 'string') {
        const post = await fetchPostBySlug(slug);
        if (!post) {
            return { notFound: true }; // Redirect to 404 page if post not found
        }
        return { props: { post } };
    }

    return { notFound: true };
};

export default PostPage;
