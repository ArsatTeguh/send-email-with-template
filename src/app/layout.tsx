import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Template Email',
  description: 'Web pengirim pesan Email mulai dari teks sampai file, dengan berbagai template yang disediakan',
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
