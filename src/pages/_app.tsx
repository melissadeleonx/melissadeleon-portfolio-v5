// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
