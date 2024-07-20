// src/pages/api/guestbook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { GuestbookEntry, GuestbookResponse } from '../../types/guestbook';

const filePath = path.join(process.cwd(), 'public', 'guestbook.json');

const readEntries = (): GuestbookEntry[] => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);
        return data.entries || [];
    } catch (error) {
        console.error('Error reading guestbook file:', error);
        return [];
    }
};

const writeEntries = (entries: GuestbookEntry[]): void => {
    try {
        fs.writeFileSync(filePath, JSON.stringify({ entries }, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing guestbook file:', error);
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const entries = readEntries();
        res.status(200).json({ entries });
    } else if (req.method === 'POST') {
        try {
            const { name, message } = req.body as GuestbookEntry;
            if (!name || !message) {
                res.status(400).json({ error: 'Name and message are required' });
                return;
            }

            const entries = readEntries();
            entries.push({ name, message });
            writeEntries(entries);

            res.status(200).json({ entries });
        } catch (error) {
            console.error('Error handling POST request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
