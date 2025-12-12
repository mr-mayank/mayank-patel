import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// --- SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL('https://mayankpatel.in'),
  title: {
    default: 'Mayankkumar Patel | Fullstack Developer & Odoo Expert',
    template: '%s | Mayankkumar Patel'
  },
  description: 'Portfolio of Mayankkumar Patel, a Fullstack Engineer based in Ahmedabad, India. Specializing in Next.js, React, Node.js, and Odoo development.',
  keywords: [
    'Mayankkumar Patel',
    'Fullstack Developer',
    'Odoo Developer',
    'Next.js Developer',
    'React Developer',
    'Software Engineer Ahmedabad',
    'Web Developer India',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: 'Mayankkumar Patel', url: 'https://www.linkedin.com/in/mayankkumar-d-patel/' }],
  creator: 'Mayankkumar Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayankpatel.in',
    title: 'Mayankkumar Patel | Fullstack Developer',
    description: 'Building scalable digital experiences with Next.js, Node, and Odoo.',
    siteName: 'Mayankkumar Patel Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayankkumar Patel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayankkumar Patel | Fullstack Developer',
    description: 'Building scalable digital experiences with Next.js, Node, and Odoo.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
