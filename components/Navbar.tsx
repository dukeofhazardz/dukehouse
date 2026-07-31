"use client"
import React from 'react'
import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import ContentWrapper from './ContentWrapper'
import { handleScroll } from './lib/scroll'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-b-white/25 bg-black/90 py-6 text-white backdrop-blur-md">
            <ContentWrapper>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="h-10 w-full" />
                    </Link>

                    <div className="flex flex-row justify-center items-center gap-5 max-lg:hidden">
                        <Link href="#work" className="text-sm text-pretty uppercase tracking-tight text-white/55 hover:text-white transition-all"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'work')}>
                            Work
                        </Link>
                        <Link href="#capabilities" className="text-sm text-pretty uppercase tracking-tight text-white/55 hover:text-white transition-all"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'capabilities')}>
                            Capabilities
                        </Link>
                        <Link href="#architecture" className="text-sm text-pretty uppercase tracking-tight text-white/55 hover:text-white transition-all"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'architecture')}>
                            Architecture
                        </Link>
                        <Link href="#about" className="text-sm text-pretty uppercase tracking-tight text-white/55 hover:text-white transition-all"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'about')}>
                            About
                        </Link>
                    </div>

                    <Link href="#contact" className="border-draw relative inline-block px-8 py-3 text-sm font-sans uppercase tracking-widest max-sm:text-xs"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, 'contact')}>
                        Start a Project +
                    </Link>
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar