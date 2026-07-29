import React from 'react'
import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import ContentWrapper from './ContentWrapper'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-b-white/25 bg-black/90 py-6 text-white backdrop-blur-md">
            <ContentWrapper>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="h-10 w-full" />
                    </Link>

                    <Link href="/" className="border-draw relative inline-block px-8 py-3 text-sm font-semibold uppercase tracking-tight">
                        Start a Project
                    </Link>
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar