import React from 'react'
import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import ContentWrapper from './ContentWrapper'

const Navbar = () => {
    return (
        <nav className="border-b border-b-gray-700 bg-black text-white py-6 w-full">
            <ContentWrapper>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="h-10 w-full" />
                    </Link>

                    <Link href="/" className="tracking-tight font-semibold uppercase">
                        Start a Project
                    </Link>
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar