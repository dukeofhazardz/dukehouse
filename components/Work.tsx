import React from 'react'
import ContentWrapper from './ContentWrapper'
import Link from 'next/link';

export const selectedWorks = [
    {
        category: "A CLOTHING BRAND",
        title: "Mykbee Synergies",
        description:
            "A multi-brand commerce platform unifying fashion retail, tailoring services, supply, and recruitment under one parent company — built with a modular business directory, live search, and a responsive storefront experience across six distinct ventures.",
        tags: ["Fashion", "HR", "Vercel"],
        footer: "Nigeria • In Continuous Operation",
        cta: "View Live Platform",
        siteUrl: "https://mykbee.vercel.app/",
        href: "https://mykbee.vercel.app/",
    },
    {
        category: "AI-POWERED IDENTIFICATION",
        title: "BioDetect",
        description:
            "A computer vision platform that identifies plants, animals and insects in real time, returning species, characteristics and habitat data through an integrated AI model.",
        tags: ["React", "Python", "Gemini Vision"],
        footer: "Global • Production",
        cta: "View Platform",
        siteUrl: "https://biodetect.onrender.com/",
        href: "https://biodetect.onrender.com/",
    },
    {
        category: "EDUCATION OPERATIONS PLATFORM",
        title: "Mentoring Dashboard",
        description:
            "A production platform connecting students and mentors — handling project submissions, automated code review and one-on-one session scheduling in a single workflow.",
        tags: ["React", "Django", "PostgreSQL"],
        footer: "Canada • Production",
        cta: "View Case Study",
        siteUrl: "https://mentoring.zerotozenithmedia.com/",
        href: "https://mentoring.zerotozenithmedia.com/",
    },
    // {
    //     category: "AI DOCUMENT AUTOMATION",
    //     title: "DocFlow AI",
    //     description:
    //         "An AI-powered document processing platform that automates extraction, validation and approval workflows.",
    //     tags: ["AI", "Automation", "Enterprise"],
    //     footer: "Global • Production",
    //     cta: "View Platform",
    //     siteUrl: "https://mykbee.vercel.app/",
    //     href: "/work/docflow-ai",
    // },
    // {
    //     category: "CLOUD OBSERVABILITY",
    //     title: "CloudWatch Pro",
    //     description:
    //         "A cloud monitoring platform providing real-time metrics, logging, alerting and infrastructure insights.",
    //     tags: ["Cloud", "DevOps", "Monitoring"],
    //     footer: "AWS • Azure • GCP",
    //     cta: "View Platform",
    //     siteUrl: "https://mykbee.vercel.app/",
    //     href: "/work/cloudwatch-pro",
    // },
    // {
    //     category: "FINTECH PLATFORM",
    //     title: "PayBridge",
    //     description:
    //         "A payment infrastructure platform enabling secure transactions, reconciliation and financial reporting.",
    //     tags: ["FinTech", "Payments", "Security"],
    //     footer: "PCI Compliant • Multi-Currency",
    //     cta: "View Product",
    //     siteUrl: "https://mykbee.vercel.app/",
    //     href: "/work/paybridge",
    // },
];

const Work = () => {
    return (
        <ContentWrapper>
            <div id="work" className="flex flex-col justify-start items-start mt-40 scroll-mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">01 / Selected Work</p>
                <h1 className="uppercase tefxt-5xl">Selected work.</h1>
                <p className="uppercase text-xs mt-4 text-white/55">Platforms for sports, commerce, energy, finance, education and public infrastructure.</p>

                <div className="grid grid-cols-3 gap-3 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {selectedWorks.length > 0 ? (
                        selectedWorks.map((work, idx) => (
                            <div key={idx} className="group flex flex-col justify-start items-start w-full h-full box-border border-[0.5px] border-white/25 hover:border-white/55 transition-all">
                                <Link href={work.href} target='_blank' className="w-full">
                                    <div className="relative w-full aspect-video overflow-hidden bg-black">
                                        <div className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-[filter] duration-500">
                                            <iframe
                                                src={work.siteUrl}
                                                title={`${work.title} live preview`}
                                                loading="lazy"
                                                tabIndex={-1}
                                                className="absolute top-0 left-0 w-[400%] h-[400%] scale-[0.25] origin-top-left pointer-events-none"
                                            />
                                        </div>
                                        <div className="absolute inset-0" />
                                    </div>
                                    <div className="py-5 px-5">
                                        <p className="text-white/55 uppercase text-xs mb-3">{work.category}</p>
                                        <h3 className="uppercase text-2xl mb-3">{work.title}</h3>
                                        <p className="text-white/55 text-pretty text-sm mb-3">{work.description}</p>

                                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                                            {work.tags.length > 0 && (
                                                work.tags.map((tag, idx) => (
                                                    <div key={idx} className="flex justify-center items-center border-[0.5px] border-white/15">
                                                        <p className="text-white/55 uppercase text-xs py-1 px-2">{tag}</p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        <p className="text-xs font-thin text-white/55 tracking-wide uppercase mt-3">{work.footer}</p>
                                        <p className="text-sm uppercase tracking-widest mt-3">{work.cta} →</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No selected work available...</p>
                    )}
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Work