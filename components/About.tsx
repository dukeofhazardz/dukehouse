import React from 'react'
import ContentWrapper from './ContentWrapper'

const About = () => {
    return (
        <ContentWrapper>
            <div id="about" className="flex flex-col justify-start items-start mt-40 scroll-mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">05 / About</p>
                <h1 className="uppercase text-5xl">Built close to the work.</h1>

                <div className="flex flex-col max-w-150">
                    <p className="text-sm text-pretty text-white/55 mt-4">DUKEHOUSE is a software company from Nigeria. Since 2026, we have built products and operational systems across commerce, education, energy, finance, sports and public infrastructure.</p>
                    <p className="text-sm text-pretty text-white/55 mt-4">Senior specialists work directly on every project. We stay close to the problem, make decisions with the client and remain involved after launch.</p>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default About