// src/lib/db.ts
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { join } from 'path';

const openDb = async (): Promise<Database> => {
    return open({
        filename: join(process.cwd(), 'db', 'guestbook.db'),
        driver: sqlite3.Database,
    });
};

export default openDb;
