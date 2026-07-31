import React from 'react'
import ContentWrapper from './ContentWrapper'
import Link from 'next/link'

const Security = () => {
    return (
        <ContentWrapper>
            <div className="flex flex-col justify-start items-start mt-40">
                <p className="text-[10px] font-bold text-pretty text-white/55 uppercase tracking-widest mb-4">04 / Security and readiness</p>
                <h1 className="uppercase text-5xl max-sm:text-3xl">Review the system before risk becomes operational.</h1>
                <p className="uppercase text-xs text-pretty text-white/55 mt-4">We assess applications, APIs and cloud environments before they handle sensitive data, financial workflows or critical operations.</p>

                <div className="grid grid-cols-2 mt-20 bg-white/25 p-px gap-[0.5px] box-border w-full h-full max-md:grid-cols-1">
                    <div className="flex flex-col w-full h-full bg-black p-10 box-border max-md:p-5">
                        <h3 className="uppercase text-2xl mb-3">Security assessment</h3>
                        <p className="text-white/55 text-pretty text-sm mb-3">Application security, API authorization, secrets, IAM, cloud posture and CI/CD.</p>
                        <Link href="mailto:hello@dukehouse.tech?subject=Security%20Assessment" className="mt-10 uppercase text-sm font-sans tracking-widest text-white/55">Request a security assessment →</Link>
                    </div>
                    <div className="flex flex-col w-full h-full bg-black p-10 box-border max-md:p-5">
                        <h3 className="uppercase text-2xl mb-3">Production readiness</h3>
                        <p className="text-white/55 text-pretty text-sm mb-3">Architecture, data model, performance, migrations, observability, scalability and cloud cost.</p>
                        <Link href="mailto:hello@dukehouse.tech?subject=Production%20Readiness%20Audit" className="mt-10 uppercase text-sm font-sans tracking-widest text-white/55">Request a production audit →</Link>
                    </div>
                </div>
                <p className="text-sm text-pretty text-white/55 mt-10">Each review ends with prioritized findings and a clear remediation plan.</p>
            </div>
        </ContentWrapper>
    )
}

export default Security