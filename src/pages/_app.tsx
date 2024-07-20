// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Function to increment visitor count
    const incrementVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor', {
          method: 'POST',
        });
        if (!response.ok) {
          console.error('Failed to increment visitor count');
        }
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    incrementVisitorCount();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
