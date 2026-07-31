"use client"
import React from 'react'
import ContentWrapper from './ContentWrapper'

const Contact = () => {
    return (
        <ContentWrapper>
            <div id="contact" className="flex flex-col justify-start items-start mt-40 scroll-mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">Start a project</p>
                <h1 className="uppercase text-5xl">Tell us what needs to work better.</h1>
                <p className="uppercase text-xs text-pretty text-white/55 mt-4">Tell us about the product, operation or technical problem you need to solve. We will help define the next practical step.</p>

                <div className="flex items-center mt-6 gap-5">
                    <button onClick={() => window.location.href = "mailto:hello@dukehouse.tech?subject=Start%20a%20project"} className="text-black uppercase tracking-[0.2em] text-xs font-sans bg-white py-5 px-10 cursor-pointer hover:bg-white/75 transition-all">Start a Project +</button>
                    <button onClick={() => window.location.href = "mailto:hello@dukehouse.tech?subject=Production%20Readiness%20Audit"} className="text-white uppercase tracking-[0.2em] text-xs font-sans bg-none py-5 px-10 border border-white/55 cursor-pointer hover:border-gray-100 transition-all">Request an Audit +</button>
                </div>
                <p className="type-label uppercase tracking-[0.2em] text-pretty font-mono text-xs mt-8 flex items-center gap-2.5 text-white/40 md:mt-10"><span className="size-1.5 rounded-full bg-white/35" aria-hidden="true"></span>From Nigeria · Est. 2026</p>
            </div>
        </ContentWrapper>
    )
}

export default Contact