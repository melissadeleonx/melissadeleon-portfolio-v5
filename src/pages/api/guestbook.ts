// src/pages/api/guestbook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../lib/supabaseClient';
import { GuestbookEntry } from '../../types/guestbook';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { data, error } = await supabase
                .from('entries')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            res.status(200).json({ entries: data });
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

            const { data, error } = await supabase
                .from('entries')
                .insert([{ name, message }]);

            if (error) throw error;

            const { data: entries, error: fetchError } = await supabase
                .from('entries')
                .select('*')
                .order('created_at', { ascending: false });

            if (fetchError) throw fetchError;

            res.status(200).json({ entries });
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit entry' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

