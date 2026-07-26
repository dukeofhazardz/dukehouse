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

                        <p className="mt-6 text-sm uppercase tracking-tighter">
                            We design and build digital products, AI systems and cloud systems without compromise — from idea to launch, we help you every step of the way.
                        </p>
                    </div>
                </ContentWrapper>
            </div>
        </section>
    )
}

export default Hero