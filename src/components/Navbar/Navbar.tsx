'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const linkTextColor = `text-[#2F00A8] text-lg`

    const navLinks = <>
        <li>
            <Link href='/' className={`${pathname === '/' ? linkTextColor : ''}`}>Home</Link>
        </li>
        <li>
            <Link href='/courses' className={`${pathname === '/courses' ? linkTextColor : ''} `}>Courses</Link>
        </li>
        <li>
            <Link href='/programs' className={`${pathname === '/programs' ? linkTextColor : ''}`}>Special Programs</Link>
        </li>
        <li>
            <Link href='/gallery' className={`${pathname === '/gallery' ? linkTextColor : ''}`}>Gallery</Link>
        </li>
        <li>
            <Link href='/faq' className={`${pathname === '/faq' ? linkTextColor : ''}`}>FAQ</Link>
        </li>
        <li>
            <Link href='/career-guide' className={`${pathname === '/career-guide' ? linkTextColor : ''}`}>Career Guide</Link>
        </li>
        <li>
            <Link href='/about' className={`${pathname === '/about' ? linkTextColor : ''}`}>About Us</Link>
        </li>
        <li>
            <Link href='/contact' className={`${pathname === '/contact' ? linkTextColor : ''}`}>Contact Us</Link>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#102136]">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <Link href={'/'}>
                    <Image src={'/logo.png'} width={220} height={220} alt="Career Builder" priority={true}></Image>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-5 px-1 text-[#102136] text-base font-medium">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/register'}>
                    <button className="btn btn-primary px-7 text-white">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;