import React from 'react'
import Image from 'next/image';
import ContentWrapper from './ContentWrapper'
import WorkPlaceholder from '@/app/assets/placeholder.jpg'
import Link from 'next/link';

export const selectedWorks = [
    {
        category: "SPORTS INSTITUTION PLATFORM",
        title: "Racing Pass",
        description:
            "A serverless-first AWS platform connecting membership, payments, ticketing, activities and access control.",
        tags: ["Sports", "Institutional Software", "AWS"],
        footer: "Argentina • In Continuous Operation",
        cta: "View Live Platform",
        image: WorkPlaceholder,
        href: "/work/racing-pass",
    },
    {
        category: "COMMERCE OPERATING SYSTEM",
        title: "SARAH",
        description:
            "A commerce platform connecting sales, inventory, billing, customers, payments, logistics and online channels.",
        tags: ["SaaS", "Commerce", "Multi-Tenant"],
        footer: "100+ Paying Businesses • USD 10M+ Processed • 6 Languages",
        cta: "View Product",
        image: WorkPlaceholder,
        href: "/work/sarah",
    },
    {
        category: "CRITICAL WELL OPERATIONS",
        title: "GunSketch",
        description:
            "Software that validates technical configurations and keeps critical field operations traceable.",
        tags: ["Energy", "Industrial Software", "Decision Support"],
        footer: "Argentina • Private Operational Platform",
        cta: "View Case Study",
        image: WorkPlaceholder,
        href: "/work/gunsketch",
    },
    {
        category: "AI DOCUMENT AUTOMATION",
        title: "DocFlow AI",
        description:
            "An AI-powered document processing platform that automates extraction, validation and approval workflows.",
        tags: ["AI", "Automation", "Enterprise"],
        footer: "Global • Production",
        cta: "View Platform",
        image: WorkPlaceholder,
        href: "/work/docflow-ai",
    },
    {
        category: "CLOUD OBSERVABILITY",
        title: "CloudWatch Pro",
        description:
            "A cloud monitoring platform providing real-time metrics, logging, alerting and infrastructure insights.",
        tags: ["Cloud", "DevOps", "Monitoring"],
        footer: "AWS • Azure • GCP",
        cta: "View Platform",
        image: WorkPlaceholder,
        href: "/work/cloudwatch-pro",
    },
    {
        category: "FINTECH PLATFORM",
        title: "PayBridge",
        description:
            "A payment infrastructure platform enabling secure transactions, reconciliation and financial reporting.",
        tags: ["FinTech", "Payments", "Security"],
        footer: "PCI Compliant • Multi-Currency",
        cta: "View Product",
        image: WorkPlaceholder,
        href: "/work/paybridge",
    },
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
                            <div key={idx} className="flex flex-col justify-start items-start w-full h-full box-border border-[0.5px] border-white/25 hover:border-white/55 transition-all">
                                <Link href={work.href} target='_blank'>
                                    <Image src={work.image} alt='Work image' />
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