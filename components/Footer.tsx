import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import ContentWrapper from './ContentWrapper'

const Footer = () => {
    return (
        <footer className="w-full border-t border-t-white/10 bg-black/90 py-6 text-white backdrop-blur-md mt-40">
            <ContentWrapper>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-start py-10">
                        <div className="flex flex-col justify-start items-start max-w-70">
                            <Link href="/">
                                <Image src={Logo} alt="Logo" className="h-5 w-full" />
                            </Link>
                            <p className="text-pretty text-white/55 mt-4">Product engineering, AI systems,
                                cloud architecture and security reviews.</p>
                        </div>
                        <div className="flex flex-col">
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Work
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Capabilities
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Architecture
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                About
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Working with DUKEHOUSE
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Contact
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                LinkedIn
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Instagram
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                X
                            </Link>
                            <Link href="#" className="text-white/55 text-sm mb-1">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            <div className="w-full border-t border-t-white/10 bg-black/90 py-10">
                <ContentWrapper>
                    <p className="justify-self-end type-label uppercase tracking-widest text-pretty font-mono text-[10px] mt-8 flex items-center gap-2.5 text-white/40 md:mt-10">© 2026 DUKEHOUSE. All rights reserved.</p>
                </ContentWrapper>
            </div>
        </footer>
    )
}

export default Footer