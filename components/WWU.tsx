import React from 'react'
import ContentWrapper from './ContentWrapper'

const WWU = () => {
  return (
    <ContentWrapper>
      <div id="working-with-us" className="flex flex-col justify-start items-start mt-40 scroll-mt-40">
        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">07 / Working with DUKEHOUSE</p>
        <h1 className="uppercase text-5xl">What clients usually ask.</h1>
        <p className="uppercase text-xs text-pretty text-white/55 mt-4">We keep the process simple and stay involved from definition through operation.</p>

        <div className="grid grid-cols-2 bg-white/25 w-full h-fit p-px gap-[0.5px] mt-15">
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <h1 className="text-[21px] font-sans mb-3 tracking-tight">Can DUKEHOUSE work on an existing product?</h1>
            <p className="text-white/55 text-sm text-pretty">Yes. We review the codebase, infrastructure and data model, then define what should be fixed, modernized or rebuilt first.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <h1 className="text-[21px] font-sans mb-3 tracking-tight">Are you limited to Vercel and Supabase?</h1>
            <p className="text-white/55 text-sm text-pretty">No. We work across AWS, Azure, Google Cloud, Vercel, serverless platforms, containers and multiple relational and non-relational databases.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <h1 className="text-[21px] font-sans mb-3 tracking-tight">Can you work in regulated or high-risk environments?</h1>
            <p className="text-white/55 text-sm text-pretty">Yes. Our work includes financial services, energy operations, public infrastructure and large institutional platforms.</p>
          </div>
          <div className="flex flex-col justify-start items-start w-full h-full bg-black p-5">
            <h1 className="text-[21px] font-sans mb-3 tracking-tight">Do you stay involved after launch?</h1>
            <p className="text-white/55 text-sm text-pretty">Yes. We can stay involved with support, infrastructure, incident response and ongoing product work.</p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default WWU