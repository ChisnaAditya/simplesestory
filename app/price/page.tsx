import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'PRICE | SIMPLESESTORY',
    description: 'Unveil the path to your dream wedding with our transparent and customizable pricing options. Explore our comprehensive wedding packages designed to cater to every need and budget.',
}

export default function Price() {
    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                Price
            </h1>
            <p className="text-lg">We are a small passionate team.</p>
        </div>
    )
}