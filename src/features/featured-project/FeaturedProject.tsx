import React from 'react';
import { Link } from 'react-router-dom';


const STATS = [
    { icon: '📈', value: '20–30%', label: 'Yield Improvement', color: 'text-cta' },
    { icon: '💧', value: '40%', label: 'Water Efficiency Gains', color: 'text-blue-400' },
    { icon: '📉', value: '25%', label: 'Reduced Production Loss', color: 'text-accent' },
];

const FeaturedProject: React.FC = () => (
    <section id="project" className="section-padding bg-dark">
        <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
                {/* Left: Info */}
                <div className="flex flex-col gap-7">
                    <div>
                        <span className="section-tag mb-4 inline-block">Featured Project</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            Commercial Farm{' '}
                            <span className="text-gradient">Optimization</span>{' '}
                            Program
                        </h2>
                        <p className="text-white/65 font-body text-base leading-relaxed">
                            Our flagship commercial farm advisory program has consistently delivered significant improvements in yield, water efficiency, and operational profitability across partner farms in Somalia's Shabelle and Jubba river regions.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {[
                            'Comprehensive soil health and crop rotation planning',
                            'Precision irrigation design and installation support',
                            'Certified seed variety trials and selection',
                            'Integrated crop protection and nutrition programs',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-cta" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-white/70 font-body text-sm">{item}</p>
                            </div>
                        ))}
                    </div>

                    <Link to="/projects" className="btn-outline-cta w-fit">
                        View Case Studies →
                    </Link>
                </div>

                {/* Right: Stats */}
                <div className="grid grid-cols-1 gap-5">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cta/30 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <p className={`font-heading text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                                <p className="text-white/60 font-body text-sm mt-1">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default FeaturedProject;
