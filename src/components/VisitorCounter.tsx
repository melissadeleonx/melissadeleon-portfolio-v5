// components/VisitorCounter.tsx
import { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            const response = await fetch('/api/visitor');
            const data = await response.json();
            setCount(data.count);
        };

        fetchCount();
    }, []);

    useEffect(() => {
        const incrementCount = async () => {
            await fetch('/api/visitor', { method: 'POST' });
        };

        incrementCount();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>
                {count !== null ? count : 'Loading...'}
            </p>
            <p style={{ fontSize: '22px', fontWeight: 'bold' }}>
                You’re Space Explorer No. {count !== null ? count : 'Loading...'}
            </p>
        </div>
    );
};

export default VisitorCounter;
