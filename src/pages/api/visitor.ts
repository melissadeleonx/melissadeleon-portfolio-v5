// src/pages/api/visitor.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../lib/supabaseClient'; // Import the Supabase client

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        // Retrieve the current visitor count
        try {
            const { data, error } = await supabase
                .from('visitor_count')
                .select('count')
                .eq('id', 1)
                .single();

            if (error && error.code === 'PGRST116') {
                // Handle case where there are no rows
                return res.status(200).json({ count: 0 });
            } else if (error) {
                console.error('Failed to retrieve visitor count:', error);
                return res.status(500).json({ message: 'Failed to retrieve visitor count.' });
            }

            return res.status(200).json({ count: data?.count || 0 });
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        try {
            // Fetch current count
            const { data: currentData, error: fetchError } = await supabase
                .from('visitor_count')
                .select('count')
                .eq('id', 1)
                .single();

            let newCount;
            if (fetchError && fetchError.code === 'PGRST116') {
                // Handle case where there are no rows, start count from 1
                newCount = 1;
            } else if (fetchError) {
                console.error('Failed to fetch current count:', fetchError);
                return res.status(500).json({ message: 'Failed to fetch current count.' });
            } else {
                // Increment the count
                newCount = (currentData?.count || 0) + 1;
            }

            // Upsert the new count
            const { error: updateError } = await supabase
                .from('visitor_count')
                .upsert(
                    [{ id: 1, count: newCount }],
                    { onConflict: 'id' }
                );

            if (updateError) {
                console.error('Failed to update visitor count:', updateError);
                return res.status(500).json({ message: 'Failed to update visitor count.' });
            }

            return res.status(200).json({ message: 'Visitor count updated successfully.' });
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
};

export default handler;
