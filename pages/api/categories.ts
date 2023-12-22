import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCategories } from '../../utils/fetchCategories';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const categories = await fetchCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching categories" });
    }
}
