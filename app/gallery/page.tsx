import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'GALLERY | SIMPLESESTORY',
    description: 'Indulge in a visual feast of love and beauty with our enchanting wedding photo gallery. Immerse yourself in a collection of breathtaking moments, capturing the essence of joy, romance, and timeless elegance',
}

export default function Gallery() {
    return (
        <>
            <Navbar textColor="text-text-brand-primary" />
            <div className="container min-h-screen flex flex-col gap-10 items-center justify-center">
                <div className="justify-center">
                    <h1 className="text-brand-primary mb-3 mt-2 text-center text-2xl font-semibold tracking-tight lg:text-3xl lg:leading-snug">
                        Gallery
                    </h1>
                    <p className="text-md text-center max-w-3xl">
                        Indulge in a visual feast of love and beauty with our enchanting wedding photo gallery. Immerse yourself in a collection of breathtaking moments, capturing the essence of joy, romance, and timeless elegance
                    </p>
                </div>

                <div className="columns-4 gap-3 ">
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-1.jpg" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-2.jpg" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-5.JPG" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-4.JPG" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-6.JPG" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-3.jpg" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-9.jpg" width={300} height={300} />
                    <Image alt="gallery" className="mb-3 rounded-lg" src="/gallery-7.JPG" width={300} height={300} />
                </div>
            </div>
        </>
    )
}