// src/pages/api/guestbook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import openDb from '../../lib/db';
import { GuestbookEntry } from '../../types/guestbook';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDb();
    if (req.method === 'GET') {
        try {
            const entries = await db.all('SELECT * FROM entries ORDER BY created_at DESC');
            res.status(200).json({ entries });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch entries' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, message } = req.body as GuestbookEntry;
            if (!name || !message) {
                res.status(400).json({ error: 'Name and message are required' });
                return;
            }
            await db.run('INSERT INTO entries (name, message) VALUES (?, ?)', [name, message]);
            const entries = await db.all('SELECT * FROM entries ORDER BY created_at DESC');
            res.status(200).json({ entries });
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit entry' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
