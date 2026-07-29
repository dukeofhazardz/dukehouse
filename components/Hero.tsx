import React from 'react'
import ContentWrapper from './ContentWrapper'

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full items-center justify-start text-start text-white">
                <ContentWrapper>
                    <div className="max-w-4xl">
                        <h1 className="text-7xl font-bold tracking-tight uppercase">
                            We turn your Vision into Systems.
                        </h1>

                        <p className="mt-6 text-sm uppercase tracking-tighter text-white/55">
                            We design and build digital products, AI systems and cloud systems without compromise — from idea to launch, we help you every step of the way.
                        </p>
                        <div className="flex items-center mt-6 gap-5">
                            <button className="text-black uppercase tracking-[0.2em] text-xs font-sans bg-white py-5 px-10 cursor-pointer hover:bg-white/75 transition-all">View Our Work +</button>
                            <button className="text-white uppercase tracking-[0.2em] text-xs font-sans bg-none py-5 px-10 border border-white/55 cursor-pointer hover:border-gray-100 transition-all">Start a Project +</button>
                        </div>
                        <p className="type-label uppercase tracking-[0.2em] text-pretty font-mono text-xs mt-8 flex items-center gap-2.5 text-white/40 md:mt-10"><span className="size-1.5 rounded-full bg-white/35" aria-hidden="true"></span>From Nigeria · Est. 2026</p>
                    </div>
                </ContentWrapper>
            </div>
        </section>
    )
}

export default Hero