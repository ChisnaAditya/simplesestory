import Hero from '@/components/Hero'
import Portfolio from '@/components/Portofolio'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Hero heading='SIMPLESESTORY' message='WEDDING PREWEDDING || KEDIRI' />
      <Portfolio />
    </div>
  )
}
