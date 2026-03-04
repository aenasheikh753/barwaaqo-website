import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

const About: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="About Barwaaqo Agri Group"
                subtitle="Empowering East African agriculture through science and innovation."
            />

            {/* Mission & Vision Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'url(/assets/images/plants-decoration.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom right'
                }} />
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 flex-shrink-0">
                            <img 
                                src="/assets/images/field.jpg" 
                                alt="Agricultural field" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Our Vision & Mission</h2>
                            <div className="space-y-6 text-neutral-body leading-relaxed">
                                <p>
                                    <strong>Vision:</strong> To be the leading agricultural advisory and solutions provider transforming farming practices across East Africa, ensuring food security and prosperity for farmers and communities.
                                </p>
                                <p>
                                    <strong>Mission:</strong> We support farmers, institutions, and investors through science-based agricultural advisory, responsible input systems, and scalable farm implementation solutions tailored to regional conditions.
                                </p>
                                <p>
                                    Since our establishment, we've brought global expertise to local agricultural challenges, helping countless farmers improve yields, save water, and achieve sustainable profitability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section with Image */}
            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-3xl p-10 border border-cta/10 shadow-lg">
                            <h3 className="text-2xl font-heading font-bold text-primary mb-8">Why Choose Barwaaqo?</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: '🎓', text: 'Expert Agronomist-led Advisory' },
                                    { icon: '🌾', text: 'Certified High-Quality Seeds' },
                                    { icon: '💧', text: 'Sustainable Irrigation Design' },
                                    { icon: '🤝', text: 'End-to-End Project Support' },
                                    { icon: '📈', text: 'Proven 20-30% Yield Gains' }
                                ].map((item) => (
                                    <li key={item.text} className="flex items-start gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="font-body font-medium text-primary">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 flex-shrink-0">
                            <img 
                                src="/assets/images/consulting.jpg" 
                                alt="Consulting services" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'url(/assets/images/plants-decoration.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom left'
                }} />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Our Foundation"
                            title="Four Core"
                            titleHighlight="Pillars"
                            subtitle="Built on expertise, integrity, innovation, and commitment to sustainable agriculture."
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {[
                                { 
                                    num: '01', 
                                    icon: '🔬', 
                                    title: 'Science-Based', 
                                    desc: 'Data-driven decisions powered by agronomic research and field expertise.',
                                    image: '/assets/images/soil.jpg'
                                },
                                { 
                                    num: '02', 
                                    icon: '🌱', 
                                    title: 'Sustainability', 
                                    desc: 'Environmentally responsible practices for long-term farm profitability.',
                                    image: '/assets/images/field.jpg'
                                },
                                { 
                                    num: '03', 
                                    icon: '🤝', 
                                    title: 'Partnership', 
                                    desc: 'Collaborative approaches that empower farmers and community stakeholders.',
                                    image: '/assets/images/irrigation.jpg'
                                },
                                { 
                                    num: '04', 
                                    icon: '📊', 
                                    title: 'Accountability', 
                                    desc: 'Transparent results and measurable outcomes in every project.',
                                    image: '/assets/images/seeds.jpg'
                                }
                            ].map((pillar) => (
                                <div key={pillar.num} className="card-base overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
                                    <div className="h-40 overflow-hidden relative">
                                        <img 
                                            src={pillar.image} 
                                            alt={pillar.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    </div>
                                    <div className="p-5 flex flex-col gap-3 flex-grow">
                                        <div className="flex items-start justify-between">
                                            <span className="text-2xl">{pillar.icon}</span>
                                            <span className="text-cta font-heading font-bold text-sm">{pillar.num}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                                            <p className="text-neutral-body text-sm font-body leading-relaxed">{pillar.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="What We Know"
                            title="Areas of"
                            titleHighlight="Expertise"
                            subtitle="Deep knowledge across all aspects of modern East African agriculture."
                        />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {[
                                { 
                                    title: 'Soil & Crop Science', 
                                    items: ['Soil health analysis', 'Crop nutrition', 'Pest management', 'Rotation planning'],
                                    image: '/assets/images/soil.jpg'
                                },
                                { 
                                    title: 'Water Management', 
                                    items: ['Irrigation design', 'Drip systems', 'Water harvesting', 'Efficiency optimization'],
                                    image: '/assets/images/irrigation.jpg'
                                },
                                { 
                                    title: 'Seed Systems', 
                                    items: ['Certified varieties', 'Quality testing', 'Storage solutions', 'Farmer training'],
                                    image: '/assets/images/seeds.jpg'
                                },
                                { 
                                    title: 'Farm Economics', 
                                    items: ['Cost analysis', 'Yield projection', 'Investment ROI', 'Market linkage'],
                                    image: '/assets/images/field.jpg'
                                },
                                { 
                                    title: 'Project Management', 
                                    items: ['Site planning', 'Implementation', 'Monitoring & eval', 'Reporting'],
                                    image: '/assets/images/consulting.jpg'
                                },
                                { 
                                    title: 'Capacity Building', 
                                    items: ['Farmer training', 'Skills workshops', 'Youth programs', 'Women empowerment'],
                                    image: '/assets/images/field.jpg'
                                }
                            ].map((expertise) => (
                                <div key={expertise.title} className="bg-white rounded-2xl overflow-hidden border border-neutral-border hover:border-cta/50 transition-all hover:shadow-lg">
                                    <div className="h-32 overflow-hidden relative">
                                        <img 
                                            src={expertise.image} 
                                            alt={expertise.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-heading text-lg font-bold text-primary mb-4">{expertise.title}</h3>
                                        <ul className="space-y-2">
                                            {expertise.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-neutral-body font-body">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Numbers Section */}
            <section className="section-padding bg-dark">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Our Impact"
                            title="By The"
                            titleHighlight="Numbers"
                            light
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {[
                                { number: '500+', label: 'Farms Supported', icon: '🌾' },
                                { number: '12', label: 'Regional Centers', icon: '📍' },
                                { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
                                { number: '10k+', label: 'Farmers Trained', icon: '👨‍🌾' }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center text-white">
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <p className="font-heading text-4xl md:text-5xl font-bold text-cta mb-2">{stat.number}</p>
                                    <p className="text-white/70 font-body text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Meet The Team"
                            title="Led By"
                            titleHighlight="Experts"
                            subtitle="A diverse team of agronomists, engineers, and experienced development professionals."
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
                            {[
                                { icon: '👨‍🔬', name: 'Chief Agronomist', title: 'Lead Technical Officer', bio: 'PhD in Soil Science with 15+ years field experience' },
                                { icon: '👨‍💼', name: 'Operations Lead', title: 'Project Director', bio: 'MSc Rural Development, 10+ years in East Africa programs' },
                                { icon: '👩‍🌾', name: 'Extension Manager', title: 'Farmer Relations', bio: 'Agricultural Extension specialist, community mobilization expert' }
                            ].map((member) => (
                                <div key={member.name} className="card-base p-7 text-center flex flex-col gap-4">
                                    <div className="text-5xl mb-2">{member.icon}</div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-primary">{member.name}</h3>
                                        <p className="text-cta text-sm font-body font-semibold mb-2">{member.title}</p>
                                        <p className="text-neutral-body text-sm font-body">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-neutral-body max-w-2xl">
                            Our team combines academic excellence with practical field experience, ensuring every recommendation is both scientifically sound and practically implementable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'url(/assets/images/plants-decoration.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'bottom right'
                }} />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Our Journey"
                            title="Timeline"
                            titleHighlight="Milestones"
                            subtitle="From startup vision to regional leader in agricultural innovation."
                        />
                        <div className="max-w-3xl w-full">
                            {[
                                { year: '2018', title: 'Foundation', desc: 'Barwaaqo Agri Group established in Mogadishu with focus on farmer advisory.' },
                                { year: '2019', title: 'First 100 Farms', desc: 'Reached 100+ farms in Shabelle region with improved yields.' },
                                { year: '2020', title: 'Regional Expansion', desc: 'Opened centers in 5 additional regions across Somalia and Kenya.' },
                                { year: '2021', title: 'Seed Systems Launch', desc: 'Launched certified seed systems for major crop varieties.' },
                                { year: '2022', title: 'Training Scaling', desc: 'Trained 5,000+ farmers in modern agricultural practices.' },
                                { year: '2024', title: 'Present Day', desc: 'Supporting 500+ farms across 12 centers with proven impact.' }
                            ].map((milestone, idx) => (
                                <div key={milestone.year} className="flex gap-6 pb-8 relative">
                                    {/* Timeline line */}
                                    {idx < 5 && (
                                        <div className="absolute left-5 top-14 w-0.5 h-12 bg-gradient-to-b from-cta to-cta/20" />
                                    )}
                                    {/* Timeline dot */}
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        <div className="w-11 h-11 rounded-full bg-cta flex items-center justify-center text-white font-heading font-bold shadow-lg border-4 border-white">
                                            {milestone.year.slice(-2)}
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="pt-1">
                                        <h3 className="font-heading text-lg font-bold text-primary">{milestone.title}</h3>
                                        <p className="text-neutral-body text-sm font-body mt-1">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary">
                <div className="container-custom text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Farm?
                    </h2>
                    <p className="text-white/70 font-body text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of farmers who have improved their livelihoods with our science-based approach.
                    </p>
                    <a href="/contact" className="btn-primary">
                        Get Your Free Consultation →
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
