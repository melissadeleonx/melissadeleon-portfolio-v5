// src/pages/guestbook.tsx
import { useState, useEffect } from 'react';
import { Layout } from '../containers';
import supabase from '../lib/supabaseClient'; // Import the Supabase client
import { GuestbookEntry } from '../types/guestbook'; // Import types

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

const Guestbook = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const fetchEntries = async () => {
            const { data, error } = await supabase
                .from('guest_entries') // Ensure this matches your actual table name
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Failed to fetch entries:', error);
                setFeedback('Failed to fetch entries. Please try again later.');
            } else {
                setEntries(data);
            }
            setLoading(false);
        };

        fetchEntries();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && message.trim()) {
            const { data: newEntry, error } = await supabase
                .from('guest_entries') // Ensure this matches your actual table name
                .insert([{ name, message }])
                .single(); // Fetch the inserted row

            if (error) {
                setFeedback('Failed to submit entry. Please try again.');
                console.error('Failed to submit entry:', error);
            } else {
                setName('');
                setMessage('');
                setFeedback('Entry submitted successfully!');
                setEntries([newEntry, ...entries]); // Optimistically add new entry
            }
        } else {
            setFeedback('Name and message are required.');
        }
    };

    return (
        <Layout className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg mt-4 lg:mt-12">
                <h1 className="text-3xl font-bold mb-4 text-center">Guestbook</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Your Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Your Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="w-75 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Sign Guestbook
                    </button>
                </form>
                {feedback && <p className="text-red-500">{feedback}</p>} {/* Feedback message */}
                <h2 className="text-2xl font-semibold mb-4">Guestbook Entries:</h2>
                {loading ? (
                    <p>Loading entries...</p>
                ) : (
                    <ul>
                        {entries.length > 0 ? (
                            entries.map((entry) => (
                                <li key={entry.id} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm">
                                    <p className="text-lg font-semibold">{entry.name}</p>
                                    <p className="text-gray-900 mt-2">{entry.message}</p>
                                    <p className="text-gray-500 mt-2 text-sm">Signed on: {formatDate(entry.created_at || '')}</p>
                                </li>
                            ))
                        ) : (
                            <p>No entries yet. Be the first to sign!</p>
                        )}
                    </ul>
                )}
            </div>
        </Layout>
    );
};

export default Guestbook;
