import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'SIMPLESESTORY',
  description: 'Wedding / Prewedding Photography & Videography Kediri',
  verification: {
    google: "PCJgKqf7_1krHwDsc0pe7uor_J0dEHz-Xv1HEbBw_m0"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
