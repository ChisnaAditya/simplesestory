import Image from 'next/image'
import React from 'react'

export default function CTA1() {
    return (
        <div className='container flex items-center justify-center gap-10'>
            <div className="desc basis-1/2">
                <article className='prose'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eveniet.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sunt dolores dignissimos in quo tenetur, quis unde modi iste eius quisquam possimus a non molestiae. Enim delectus corporis laudantium omnis?</p>
                </article>
            </div>
            <div className="imag basis-1/2">
                <Image alt="cta" className="w-full rounded-lg" src="/cta-1.jpg" width={300} height={300} />
            </div>
        </div>
    )
}
