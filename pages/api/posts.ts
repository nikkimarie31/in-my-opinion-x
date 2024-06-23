import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

type Data = {
  success: boolean;
  message?: string;
  data?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const client = await clientPromise;
    const db = client.db('blog');
    const collection = db.collection('posts');

    switch (req.method) {
      case 'GET':
        const posts = await collection.find({}).toArray();
        res.status(200).json({ success: true, data: posts });
        break;
      case 'POST':
        const newPost = req.body;
        newPost.createdAt = new Date();
        newPost.updatedAt = new Date();
        await collection.insertOne(newPost);
        res.status(201).json({ success: true, message: 'Post created successfully' });
        break;
      case 'PUT':
        const { id, ...updateData } = req.body;
        updateData.updatedAt = new Date();
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
        res.status(200).json({ success: true, message: 'Post updated successfully' });
        break;
      case 'DELETE':
        const { id: deleteId } = req.body;
        await collection.deleteOne({ _id: new ObjectId(deleteId) });
        res.status(200).json({ success: true, message: 'Post deleted successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
