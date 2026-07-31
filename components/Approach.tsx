import React from 'react'
import ContentWrapper from './ContentWrapper'
import Link from 'next/link'

const Approach = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col justify-start items-start mt-40">
        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">05 / Approach</p>
        <h1 className="uppercase text-5xl max-sm:text-3xl">Senior specialists, close to the work.</h1>
        <p className="uppercase text-xs text-pretty text-white/55 mt-4">We keep the process simple and stay involved from definition through operation.</p>

        <div className="grid grid-cols-4 bg-white/25 w-full h-fit p-px gap-[0.5px] mt-15 max-md:grid-cols-1">
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">01</p>
            <h1 className="text-3xl font-sans uppercase mb-3 tracking-tight">Understand</h1>
            <p className="text-white/55 text-sm text-pretty">Learn how the operation works, where it breaks and what matters most.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">02</p>
            <h1 className="text-3xl font-sans uppercase mb-3 tracking-tight">Define</h1>
            <p className="text-white/55 text-sm text-pretty">Agree on the scope, architecture, priorities and delivery plan.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">03</p>
            <h1 className="text-3xl font-sans uppercase mb-3 tracking-tight">Build</h1>
            <p className="text-white/55 text-sm text-pretty">Product, design and engineering work together from the start.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">04</p>
            <h1 className="text-3xl font-sans uppercase mb-3 tracking-tight">Operate</h1>
            <p className="text-white/55 text-sm text-pretty">Support, monitor and improve the system after launch.</p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Approach