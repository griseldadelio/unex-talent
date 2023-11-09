import { Inter } from 'next/font/google';
import { AOSInit } from './lib/aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Unex Talent',
  description: 'Your Next Talent - HHRR consulting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <AOSInit />
    </html>
  );
}
