"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <div style={{ backgroundColor: `${color}`, }} className="navbar justify-center fixed z-10 ease-in duration-300">
            <ul style={{ color: `${textColor}` }} className='menu menu-horizontal px-1 hidden md:flex'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>

            <button style={{ color: `${textColor}` }} className={`btn btn-ghost text-3xl ${dancingScript.className}`}>Simplesestory</button>
            <div className="dropdown md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} style={{ color: `${textColor}` }} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/gallery'>Gallery</Link></li>
                    <li><Link href='/price'>Price</Link></li>
                    <li><Link href='/'>Theme</Link></li>
                </ul>
            </div>

            <ul style={{ color: `${textColor}` }} className='menu menu-horizontal px-1 hidden md:flex'>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/price'>Price</Link></li>
                <li><Link href='/'>Theme</Link></li>
            </ul>
        </div>
    )
}