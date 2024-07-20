// src/types/guestbook.ts

// Interface for a single guestbook entry
export interface GuestbookEntry {
    name: string;
    message: string;
}

// Interface for the response from the guestbook API
export interface GuestbookResponse {
    entries: GuestbookEntry[];
}