import React from 'react';
import SectionHeader from '../../common/SectionHeader';

const STEPS = [
    { number: '01', icon: '🔍', title: 'Assessment', desc: 'In-depth evaluation of farm conditions, soil, water availability, and farmer objectives.' },
    { number: '02', icon: '📋', title: 'Planning', desc: 'Customized agronomic plan with crop selection, input recommendations, and investment roadmap.' },
    { number: '03', icon: '⚙️', title: 'Implementation', desc: 'On-ground support for planting, irrigation setup, input application, and farm activities.' },
    { number: '04', icon: '📊', title: 'Monitoring', desc: 'Regular field visits, crop health tracking, and data-driven progress assessments.' },
    { number: '05', icon: '🔄', title: 'Continuous Support', desc: 'Ongoing advisory, seasonal reviews, and long-term partnership for sustained farm success.' },
];

const HowWeWork: React.FC = () => (
    <section id="process" className="section-padding bg-white">
        <div className="container-custom">
            <div className="flex flex-col items-center gap-14">
                <SectionHeader
                    tag="Our Process"
                    title="How We"
                    titleHighlight="Work"
                    subtitle="A proven 5-stage process designed to deliver measurable agricultural outcomes for every client we serve."
                />
                <div className="w-full">
                    {/* Desktop: horizontal steps */}
                    <div className="hidden md:flex items-start gap-0">
                        {STEPS.map((step, idx) => (
                            <div key={step.number} className="flex-1 flex flex-col items-center relative">
                                {/* Connector line */}
                                {idx < STEPS.length - 1 && (
                                    <div className="absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-cta to-cta/20 z-0" />
                                )}
                                {/* Step circle */}
                                <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-xl shadow-card mb-5 border-4 border-white">
                                    {step.icon}
                                </div>
                                <div className="text-center px-3">
                                    <p className="text-cta font-body font-bold text-xs mb-1 tracking-wider">{step.number}</p>
                                    <p className="font-heading font-semibold text-primary text-base mb-2">{step.title}</p>
                                    <p className="text-neutral-body text-xs font-body leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: vertical steps */}
                    <div className="md:hidden flex flex-col gap-0">
                        {STEPS.map((step, idx) => (
                            <div key={step.number} className="flex gap-5 relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl flex-shrink-0 border-4 border-white shadow-card">
                                        {step.icon}
                                    </div>
                                    {idx < STEPS.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-cta to-cta/20 my-1 min-h-[40px]" />}
                                </div>
                                <div className="pb-8">
                                    <p className="text-cta font-body font-bold text-xs mb-0.5 tracking-wider">{step.number}</p>
                                    <p className="font-heading font-semibold text-primary text-lg mb-1">{step.title}</p>
                                    <p className="text-neutral-body text-sm font-body leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HowWeWork;
