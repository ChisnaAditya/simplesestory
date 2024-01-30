import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'GALLERY | SIMPLESESTORY',
    description: 'Indulge in a visual feast of love and beauty with our enchanting wedding photo gallery. Immerse yourself in a collection of breathtaking moments, capturing the essence of joy, romance, and timeless elegance',
}

export default function Gallery() {
    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                Gallery
            </h1>
            <p className="text-lg">We are a small passionate team.</p>
        </div>
    )
}