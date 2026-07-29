import React from 'react'
import ContentWrapper from './ContentWrapper'

const Capabilities = () => {
  return (
        <ContentWrapper>
            <div className="flex flex-col justify-start items-start mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">02 / Capabilities</p>
                <h1 className="uppercase text-5xl">What we build.</h1>
                <p className="uppercase text-xs mt-4 text-white/55">Senior product and engineering work across software, AI, cloud and security.</p>

                <div className="grid grid-cols-2 mt-15 bg-white/25 h-fit p-px gap-[0.5px]">
                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">01</p>
                        <h3 className="uppercase text-2xl">Product engineering</h3>
                        <p className="text-sm mt-4 text-white/55">We turn operational requirements into software that teams can use, maintain and evolve.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">SaaS platforms</p>
                            <p className="text-sm mt-4 text-white/50">Web and mobile applications</p>
                            <p className="text-sm mt-4 text-white/50">Internal systems</p>
                            <p className="text-sm mt-4 text-white/50">Product modernization</p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">02</p>
                        <h3 className="uppercase text-2xl">AI systems</h3>
                        <p className="text-sm mt-4 text-white/55">We add AI where it improves a workflow, decision or knowledge process.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">Agents and assistants</p>
                            <p className="text-sm mt-4 text-white/50">RAG systems</p>
                            <p className="text-sm mt-4 text-white/50">Workflow automation</p>
                            <p className="text-sm mt-4 text-white/50">Document intelligence</p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">03</p>
                        <h3 className="uppercase text-2xl">Cloud and platform engineering</h3>
                        <p className="text-sm mt-4 text-white/55">We design cloud foundations that are secure, observable and practical to operate.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">Cloud architecture</p>
                            <p className="text-sm mt-4 text-white/50">Serverless and containers</p>
                            <p className="text-sm mt-4 text-white/50">Migrations</p>
                            <p className="text-sm mt-4 text-white/50">Observability</p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">04</p>
                        <h3 className="uppercase text-2xl">Operational software</h3>
                        <p className="text-sm mt-4 text-white/55">We build software around the real rules, roles and integrations of an organization.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">Commerce and finance</p>
                            <p className="text-sm mt-4 text-white/50">Energy and field operations</p>
                            <p className="text-sm mt-4 text-white/50">Sports and education</p>
                            <p className="text-sm mt-4 text-white/50">Public infrastructure</p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">05</p>
                        <h3 className="uppercase text-2xl">Security and readiness</h3>
                        <p className="text-sm mt-4 text-white/55">We review applications, APIs and cloud environments before technical risk becomes operational risk.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">Application and API assessments</p>
                            <p className="text-sm mt-4 text-white/50">Identity and authorization</p>
                            <p className="text-sm mt-4 text-white/50">Cloud posture</p>
                            <p className="text-sm mt-4 text-white/50">Remediation planning</p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-black p-6 box-border">
                        <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">06</p>
                        <h3 className="uppercase text-2xl">Continuous support</h3>
                        <p className="text-sm mt-4 text-white/55">We keep your software secure, reliable and evolving long after it goes live.</p>
                        <div className="grid grid-cols-2">
                            <p className="text-sm mt-4 text-white/50">Monitoring and incident response</p>
                            <p className="text-sm mt-4 text-white/50">Bug fixes and maintenance</p>
                            <p className="text-sm mt-4 text-white/50">Performance optimization</p>
                            <p className="text-sm mt-4 text-white/50">Feature enhancements</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Capabilities