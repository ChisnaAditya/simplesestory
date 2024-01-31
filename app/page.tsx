import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CTA1 from '@/components/CTA/CTA1'
import CTA2 from '@/components/CTA/CTA2'
import CTA3 from '@/components/CTA/CTA3'

export default function Home() {
  return (
    <div>
      <Hero heading={`S ${'\xa0'} I ${'\xa0'} M ${'\xa0'} P ${'\xa0'} L ${'\xa0'} E ${'\xa0'} S ${'\xa0'} E ${'\xa0'} S ${'\xa0'} T ${'\xa0'} O ${'\xa0'} R ${'\xa0'} Y`} message='Join us on this journey, where every detail is crafted with care and every moment is a celebration of your love story.' />
      <div className="py-10">
        <CTA1 />
        <CTA2 />
        <CTA3 />
      </div>
    </div>
  )
}
