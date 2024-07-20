// pages/guestbook.tsx
import { useState, useEffect } from 'react';
import { Layout } from '../containers';
import { GuestbookEntry, GuestbookResponse } from '../types/guestbook'; // Import types

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
};

const Guestbook = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/guestbook');
                const data: GuestbookResponse = await response.json();
                console.log('Fetched entries:', data.entries); // Debugging line
                setEntries(data.entries);
            } catch (error) {
                console.error('Failed to fetch entries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEntries();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && message.trim()) {
            try {
                const response = await fetch('/api/guestbook', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, message }),
                });
                const data: GuestbookResponse = await response.json();
                setEntries(data.entries);
                setName('');
                setMessage('');
            } catch (error) {
                console.error('Failed to submit entry:', error);
            }
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
                <h2 className="text-2xl font-semibold mb-4">Guestbook Entries:</h2>
                {loading ? (
                    <p>Loading entries...</p>
                ) : (
                    <ul>
                        {entries.length > 0 ? (
                            entries.map((entry, index) => (
                                <li key={index} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm">
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
