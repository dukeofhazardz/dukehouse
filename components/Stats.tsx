import React from 'react'
import ContentWrapper from './ContentWrapper'

const Stats = () => {
    return (
        <ContentWrapper>
            <div className="grid grid-cols-4 bg-white/25 w-full h-fit p-px gap-[0.5px] max-md:grid-cols-2">
                <div className="flex flex-col justify-center items-center text-center w-full h-full bg-black py-15">
                    <h1 className="text-5xl font-sans uppercase mb-3 tracking-tight max-md:text-4xl max-sm:text-3xl">4+</h1>
                    <p className="text-white/55 text-xs uppercase">Years building software</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full h-full bg-black py-15">
                    <h1 className="text-5xl font-sans uppercase mb-3 tracking-tight max-md:text-4xl max-sm:text-3xl">Cloud</h1>
                    <p className="text-white/55 text-xs uppercase">Architecture expertise</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full h-full bg-black py-15">
                    <h1 className="text-5xl font-sans uppercase mb-3 tracking-tight max-md:text-4xl max-sm:text-3xl">Products</h1>
                    <p className="text-white/55 text-xs uppercase">Built and operated</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full h-full bg-black py-15">
                    <h1 className="text-5xl font-sans uppercase mb-3 tracking-tight max-md:text-4xl max-sm:text-3xl">Security</h1>
                    <p className="text-white/55 text-xs uppercase">Reviewed before scale</p>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Stats