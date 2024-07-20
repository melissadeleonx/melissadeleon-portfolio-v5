// pages/api/visitor.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'count.txt');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Read the count from file
        const count = fs.readFileSync(filePath, 'utf-8');
        res.status(200).json({ count: parseInt(count, 10) });
    } else if (req.method === 'POST') {
        // Increment the count and save it
        let count = fs.readFileSync(filePath, 'utf-8');
        count = (parseInt(count, 10) + 1).toString();
        fs.writeFileSync(filePath, count);
        res.status(200).json({ count });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
