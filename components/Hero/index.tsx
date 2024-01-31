import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tinos } from 'next/font/google'
import Navbar from "../Navbar";

const tinos = Tinos({ subsets: ['latin'], weight: '400' })

interface Props {
    heading: string;
    message: string;
}

export default function Hero({ heading, message }: Props) {
    return (
        <>
            <div className="flex flex-col justify-evenly h-screen bg-fixed bg-center bg-cover custom-img">
                <div className="-mt-20 z-[4]">
                    <Navbar textColor="text-white" />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
                <div className="p-5 text-white text-center z-[2] mx-auto">
                    <h2 className={`text-5xl font-bold ${tinos.className}`}>{heading}</h2>
                    <p className="pt-5 pb-10 text-xl max-w-xl text-center mx-auto">{message}</p>
                    <Link href="/contact" passHref>
                        <button className="px-8 py-2 border rounded-lg hover:bg-black/40">Contact Us</button>
                    </Link>
                </div>
                <div className="text-white z-[2] text-center">
                    <p className="pt-10 pb-4 mx-auto">Find us on</p>
                    <div className="flex items-center justify-center w-full gap-5 mx-auto">
                        <Link href='/' aria-label="sosmed"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current animate-bounce" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link href='/' aria-label="sosmed"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current animate-bounce-normal" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                        <Link href='/' aria-label="sosmed"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current animate-bounce-fast" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path></svg></Link>
                    </div>
                </div>
            </div>
        </>
    );
};
