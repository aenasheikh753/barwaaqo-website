import React from 'react';
import SectionHeader from '../../components/common/SectionHeader';

const AboutSection: React.FC = () => (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'url(/assets/images/plants-decoration.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundAttachment: 'scroll'
        }} />
        <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
                {/* Left: Visual */}
                <div className="relative flex justify-center">
                    <div className="relative w-full max-w-lg">
                        {/* Main image as background */}
                        <div 
                            className="relative rounded-3xl overflow-hidden shadow-card-hover bg-primary aspect-[4/3] flex items-center justify-center"
                            style={{
                                backgroundImage: 'url(/assets/images/field.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-dark-gradient opacity-50" />
                            <div className="relative z-10 text-center p-10">
                                <div className="text-7xl mb-4">🌾</div>
                                <p className="font-heading text-white text-2xl font-bold">Barwaaqo Agri Group</p>
                                <p className="text-white text-sm font-body mt-1">Mogadishu · Nairobi</p>
                            </div>
                        </div>
                        {/* Decorative border box */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-cta/30 -z-10" />
                        {/* Floating badge */}
                        <div className="absolute top-5 -left-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center text-xl">🌿</div>
                            <div>
                                <p className="font-heading font-bold text-primary text-sm">Science-Based</p>
                                <p className="text-neutral-light text-xs font-body">Advisory Services</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col gap-7">
                    <SectionHeader
                        tag="About Us"
                        title="Who We"
                        titleHighlight="Are"
                        align="left"
                        subtitle="Barwaaqo Agri Group supports farmers, institutions, and investors through science-based agricultural advisory, responsible input systems, and scalable farm implementation solutions across Somalia and East Africa."
                    />

                    <div className="flex flex-col gap-4">
                        {[
                            {
                                icon: '🌍',
                                title: 'Regional Presence',
                                desc: 'Operational across 12 regions in Somalia and East Africa with growing networks in Kenya and Ethiopia.',
                            },
                            {
                                icon: '🎓',
                                title: 'Expert-Led Team',
                                desc: 'Our agronomists and agricultural engineers bring decades of combined field experience.',
                            },
                            {
                                icon: '🤝',
                                title: 'Trusted Partnerships',
                                desc: 'Partnering with international seed producers, NGOs, government ministries, and private investors.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-base transition-colors">
                                <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center text-xl flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-primary mb-1">{item.title}</p>
                                    <p className="text-neutral-body text-sm font-body leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#consultation" className="btn-outline w-fit">
                        Work With Us →
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
