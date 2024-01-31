"use client"

import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [nomor, setNomor] = useState("")
    const [message, setMessage] = useState("")

    const txt = `Halo, saya ${name} nomor ${nomor} mau tanya ${message}`

    return (
        <>
            <Navbar textColor="text-text-brand-primary" />
            <div className="container flex flex-col pt-10 pb-10">
                <div className="text-center pb-20">
                    <h1 className="mb-3 mt-2 text-center text-2xl font-semibold tracking-tight lg:text-3xl lg:leading-snug">
                        Contact
                    </h1>
                    <p className="text-lg">We are here to help.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="container">
                        <h1 className="mb-3 mt-2 text-left text-lg font-medium tracking-tight dark:text-white lg:text-xl lg:leading-snug">
                            Contact Simplesestory
                        </h1>
                        <p className="text-md font-light">Have something to say? We are here to help. Fill up the to redirect you to ur admin or call by phone.</p>

                        <div className="flex flex-col gap-2 pt-5">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" height="16" width="16" viewBox="0 0 384 512" aria-label="contact"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <p className="text-sm">KEDIRI, Indonesia</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" height="16" width="16" viewBox="0 0 512 512" aria-label="contact"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                <p className="text-sm">simplesestory@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" height="16" width="16" viewBox="0 0 512 512" aria-label="contact"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                <p className="text-sm">0895-6060-77603 or 0858-4775-3757</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex flex-col max-w-lg gap-4">
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full" />
                            <input onChange={(e) => setNomor(e.target.value)} type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                            <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="textarea textarea-bordered"></textarea>

                            <Link href={`https://wa.me/62895606077603?text=${txt}`}>
                                <button className="btn w-full">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}