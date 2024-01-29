// pages/api/posts.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello, this is the basic posts API' });
}
