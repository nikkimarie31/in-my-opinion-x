
import clientPromise from '../lib/mongodb';

export const fetchCategories = async (): Promise<string[]> => {
    const client = await clientPromise;
    const db = client.db('blog');
    const categoriesCollection = db.collection('categories'); 
    const categories = await categoriesCollection.find({}).toArray();
    return categories.map(cat => cat.name); 
};
