import clientPromise from '../lib/mongodb';

interface Category {
    name: string;
}

export const fetchCategories = async (): Promise<string[]> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const categoryCollection = db.collection('category'); 
    const categories = await categoryCollection.find({}).toArray();
    return categories.map(cat => cat.name); 
};
