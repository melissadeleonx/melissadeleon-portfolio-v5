// src/types/guestbook.ts

// Interface for a single guestbook entry
export interface GuestbookEntry {
    id: number;
    name: string;
    message: string;
    created_at?: string;
}

// Interface for the response from the guestbook API
export interface GuestbookResponse {
    entries: GuestbookEntry[];
}