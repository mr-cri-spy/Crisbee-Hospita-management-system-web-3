import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crisbee Hospital Management System',
  description: 'Smart Hospital Management with Web3, IPFS and AI support.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl p-6">{children}</body>
    </html>
  );
}
