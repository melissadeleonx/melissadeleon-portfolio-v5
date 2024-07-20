import openDb from './db';

const initDb = async () => {
    const db = await openDb();
    await db.exec(`
    CREATE TABLE IF NOT EXISTS entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
    await db.exec(`
    CREATE TABLE IF NOT EXISTS visitor_count (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      count INTEGER NOT NULL
    )
  `);

    // Initialize visitor count
    const count = await db.get('SELECT count FROM visitor_count WHERE id = 1');
    if (!count) {
        await db.run('INSERT INTO visitor_count (count) VALUES (0)');
    }

    console.log('Database initialized');
};

initDb().catch((err) => {
    console.error(err);
    process.exit(1);
});

export { };
