import clientPromise from '../lib/mongodb';

export const fetchCategories = async (): Promise<string[]> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const categories = await db.collection('categories').find({}).toArray();
    return categories.map(cat => cat.name);
};
