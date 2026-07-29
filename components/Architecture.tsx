import React from 'react'
import ContentWrapper from './ContentWrapper'
import Link from 'next/link'

const Architecture = () => {
    return (
        <ContentWrapper>
            <div className="flex flex-col justify-start items-start mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">03 / Architecture</p>
                <h1 className="uppercase text-5xl">The stack follows the operation.</h1>

                <div className="flex flex-row gap-20">
                    <div className="flex flex-col mt-10 w-1/2">
                        <p className="uppercase text-xs text-pretty text-white/55">We choose platforms and data technologies around traffic, security, compliance, team capabilities and cost, not vendor preference.</p>

                        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-10">
                            <div className="flex justify-center items-center border-[0.5px] border-white/15">
                                <p className="text-white/55 uppercase text-xs py-1 px-2">Experience</p>
                            </div><span className="text-white/55">→</span>
                            <div className="flex justify-center items-center border-[0.5px] border-white/15">
                                <p className="text-white/55 uppercase text-xs py-1 px-2">Edge/API</p>
                            </div><span className="text-white/55">→</span>
                            <div className="flex justify-center items-center border-[0.5px] border-white/15">
                                <p className="text-white/55 uppercase text-xs py-1 px-2">Compute</p>
                            </div><span className="text-white/55">→</span>
                            <div className="flex justify-center items-center border-[0.5px] border-white/15">
                                <p className="text-white/55 uppercase text-xs py-1 px-2">Data/Identity</p>
                            </div><span className="text-white/55">→</span>
                            <div className="flex justify-center items-center border-[0.5px] border-white/15">
                                <p className="text-white/55 uppercase text-xs py-1 px-2">Operations</p>
                            </div>
                        </div>

                        <p className="mt-10 text-sm text-pretty text-white/55">Serverless for variable demand. Containers for dedicated workloads. Managed platforms when speed and simpler operations matter.</p>
                        <p className="mt-10 text-sm text-pretty text-white/55">Vercel and Supabase are part of a broader practice across cloud, application and data platforms.</p>
                        <Link href="#" className="mt-10 uppercase text-sm font-sans tracking-[0.2em] text-white">Discuss your architecture →</Link>
                    </div>
                    <div className="grid grid-cols-3 mt-10 box-border gap-10 min-w-80 w-1/2">
                        <div>
                            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-[0.2em] mb-4">01 / Cloud</p>
                            <p className="text-sm mt-4 text-white/55">AWS</p>
                            <p className="text-sm mt-4 text-white/55">Vercel</p>
                            <p className="text-sm mt-4 text-white/55">Google Cloud</p>
                            <p className="text-sm mt-4 text-white/55">Azure</p>
                            <p className="text-sm mt-4 text-white/55">Serverless</p>
                            <p className="text-sm mt-4 text-white/55">Containers</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-[0.2em] mb-4">02 / Application</p>
                            <p className="text-sm mt-4 text-white/55">TypeScript</p>
                            <p className="text-sm mt-4 text-white/55">React</p>
                            <p className="text-sm mt-4 text-white/55">Next.js</p>
                            <p className="text-sm mt-4 text-white/55">React Native</p>
                            <p className="text-sm mt-4 text-white/55">Expo</p>
                            <p className="text-sm mt-4 text-white/55">APIs</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-[0.2em] mb-4">03 / Data</p>
                            <p className="text-sm mt-4 text-white/55">MySQL</p>
                            <p className="text-sm mt-4 text-white/55">PostgreSQL</p>
                            <p className="text-sm mt-4 text-white/55">SQL Server</p>
                            <p className="text-sm mt-4 text-white/55">MongoDB</p>
                            <p className="text-sm mt-4 text-white/55">DynamoDB</p>
                            <p className="text-sm mt-4 text-white/55">Redis</p>
                            <p className="text-sm mt-4 text-white/55">Supabase</p>
                        </div>

                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Architecture