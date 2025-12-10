import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mayankkumar Patel | Fullstack Developer',
  description: 'Portfolio of Mayankkumar Patel, a Fullstack Developer specializing in React, Next.js, and Modern Web Tech.',
  icons: {
    icon: '/favicon.svg', // I will explain how to make the initials favicon below
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 antialiased`}>{children}</body>
    </html>
  );
}
