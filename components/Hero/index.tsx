import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tinos } from 'next/font/google'

const tinos = Tinos({ subsets: ['latin'], weight: '400' })

interface Props {
    heading: string;
    message: string;
}

export default function Hero({ heading, message }: Props) {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="p-5 text-white text-center z-[2] mt-[-10rem] max-w-xl mx-auto">
                <h2 className={`text-5xl font-bold ${tinos.className}`}>{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <Link href="/contact" passHref>
                    <button className="px-8 py-2 border">Contact Us</button>
                </Link>
            </div>
        </div>
    );
};
