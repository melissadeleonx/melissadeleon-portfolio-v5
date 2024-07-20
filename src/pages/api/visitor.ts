import type { NextApiRequest, NextApiResponse } from 'next';
import openDb from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();

    if (req.method === 'GET') {
        try {
            const count = await db.get('SELECT count FROM visitor_count WHERE id = 1');
            res.status(200).json({ count: count ? count.count : 0 });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch visitor count' });
        }
    } else if (req.method === 'POST') {
        try {
            // Increment the visitor count
            await db.run('UPDATE visitor_count SET count = count + 1 WHERE id = 1');
            const count = await db.get('SELECT count FROM visitor_count WHERE id = 1');
            res.status(200).json({ count: count ? count.count : 0 });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update visitor count' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
