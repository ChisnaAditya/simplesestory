import Link from "next/link";
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function Navbar(prop: any) {
    return (
        <div className={`navbar justify-center z-20 ${prop.textColor}`}>
            <ul className='menu menu-horizontal px-1 hidden md:flex'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>

            <button className={`btn btn-ghost text-3xl ${dancingScript.className}`}>Simplesestory</button>
            <div className="dropdown md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/gallery'>Gallery</Link></li>
                    <li><Link href='/price'>Price</Link></li>
                    <li><Link href='/'>Theme</Link></li>
                </ul>
            </div>

            <ul className='menu menu-horizontal px-1 hidden md:flex'>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/price'>Price</Link></li>
                <li><Link href='/'>Theme</Link></li>
            </ul>
        </div>
    )
}