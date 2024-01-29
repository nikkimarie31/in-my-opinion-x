// pages/api/subscribe.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db("blog"); // Replace with your actual database name
    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      throw new Error('Invalid email address');
    }

    await db.collection("subscriptions").insertOne({ email });
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error subscribing' });
  }
}
