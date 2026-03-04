import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

const Training: React.FC = () => {
    return (
        <>
            <PageHero
                title="Training & Capacity Building"
                subtitle="Empowering farmers through modern agricultural knowledge and practical skills."
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Our Programs"
                            title="Farmer Training"
                            titleHighlight="Programs"
                            subtitle="Comprehensive skill development across all areas of modern agriculture."
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {[
                                { icon: '🌾', title: 'Crop Production', desc: 'Modern crop varieties, planting techniques, and harvest management.' },
                                { icon: '💧', title: 'Irrigation Management', desc: 'Drip irrigation design, water conservation, and system maintenance.' },
                                { icon: '🧪', title: 'Soil Health', desc: 'Soil testing, nutrient management, and organic practices.' },
                                { icon: '🐛', title: 'Pest Management', desc: 'Integrated pest control, organic solutions, and disease prevention.' },
                                { icon: '📊', title: 'Farm Economics', desc: 'Costing, budgeting, and profit optimization strategies.' },
                                { icon: '🚜', title: 'Farm Equipment', desc: 'Proper use and maintenance of agricultural tools and machinery.' }
                            ].map((program) => (
                                <div key={program.title} className="card-base p-7 flex flex-col gap-4 hover:shadow-lg transition-all">
                                    <div className="text-4xl">{program.icon}</div>
                                    <h3 className="font-heading text-lg font-bold text-primary">{program.title}</h3>
                                    <p className="text-neutral-body text-sm font-body">{program.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-cta/20 to-primary/20 rounded-3xl p-10 border border-cta/10">
                                <p className="text-5xl font-heading font-bold text-cta mb-2">10,000+</p>
                                <p className="text-neutral-body font-body text-lg mb-6">Farmers trained across East Africa</p>
                                <div className="space-y-3 text-sm text-neutral-body font-body">
                                    <p>✓ Hands-on field demonstrations</p>
                                    <p>✓ Practical skill workshops</p>
                                    <p>✓ Ongoing mentorship support</p>
                                    <p>✓ Farmer learning groups</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Training Methods</h2>
                            <div className="space-y-5">
                                {[
                                    { title: 'Field Schools', desc: 'Interactive learning plots on farmers\' own land for practical knowledge.' },
                                    { title: 'Group Sessions', desc: 'Community-based workshops covering technical and business topics.' },
                                    { title: 'One-on-One Coaching', desc: 'Personalized advisory for individual farm circumstances.' },
                                    { title: 'Video Tutorials', desc: 'Digital content for self-paced learning and reference.' },
                                    { title: 'Farmer Networks', desc: 'Peer-learning groups where farmers share experiences and solutions.' }
                                ].map((method) => (
                                    <div key={method.title} className="border-l-4 border-cta pl-4 py-2">
                                        <h3 className="font-heading font-semibold text-primary mb-1">{method.title}</h3>
                                        <p className="text-neutral-body text-sm font-body">{method.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Invest in Your Skills?</h2>
                        <p className="text-white/70 font-body text-lg mb-8">Join our training programs and transform your farm into a thriving, profitable enterprise.</p>
                        <a href="/contact" className="btn-primary">Enroll in a Training Program →</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Training;
