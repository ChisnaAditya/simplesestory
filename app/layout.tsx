import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'SIMPLESESTORY',
  description: 'Discover the perfect blend of elegance and romance on our wedding website SIMPLESESTORY. Explore exquisite wedding themes, timeless decor ideas, and expert tips to plan your dream celebration. Immerse yourself in a world of love as we guide you through inspiring real-life weddings, helpful planning resources, and breathtaking venues. Let us be your companion on this enchanting journey to create unforgettable memories. Begin your wedding adventure with us, where love stories come to life.',
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
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
