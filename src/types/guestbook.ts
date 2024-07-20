// src/types/guestbook.ts

// Interface for a single guestbook entry
export interface GuestbookEntry {
    id: number;
    name: string;
    message: string;
    created_at?: string;
}

