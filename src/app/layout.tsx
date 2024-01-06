import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Template Email',
  description: 'Web pengirim pesan Email mulai dari teks sampai file, dengan berbagai template yang disediakan',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={poppins.className}>
        {/* letakan CustomProvider disini jika ingin menggunakan redux-toolkit */}
        {children}
      </body>
    </html>
  );
}
