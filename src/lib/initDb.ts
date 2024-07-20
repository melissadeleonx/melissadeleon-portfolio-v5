// src/lib/initDb.ts
import openDb from './db';

const initDb = async () => {
    try {
        const db = await openDb();

        // Create the guestbook entries table
        await db.exec(`
            CREATE TABLE IF NOT EXISTS entries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create the visitor count table
        await db.exec(`
            CREATE TABLE IF NOT EXISTS visitor_count (
                id INTEGER PRIMARY KEY,
                count INTEGER NOT NULL
            )
        `);

        // Initialize visitor count
        const existingCount = await db.get('SELECT id FROM visitor_count WHERE id = 1');
        if (!existingCount) {
            await db.run('INSERT INTO visitor_count (id, count) VALUES (1, 0)');
        }

        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Failed to initialize database:', err);
        process.exit(1);
    }
};

initDb();
