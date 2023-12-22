
import clientPromise from '../lib/mongodb'; // Adjust the path as necessary

export const fetchCategories = async (): Promise<string[]> => {
    const client = await clientPromise;
    const db = client.db('yourDatabaseName'); // Replace with your database name
    const categoriesCollection = db.collection('categories'); // Replace with your categories collection name

    const categories = await categoriesCollection.find({}).toArray();
    return categories.map(cat => cat.name); // Assuming each category has a 'name' field
};
