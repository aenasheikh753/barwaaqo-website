import React from 'react';
import PageHero from '../components/common/PageHero';

const About: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="About Barwaaqo Agri Group"
                subtitle="Empowering East African agriculture through science and innovation."
            />

            <div className="container-custom mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Vision & Mission</h2>
                        <div className="space-y-6 text-text-light leading-relaxed">
                            <p>
                                Barwaaqo Agri Group supports farmers, institutions, and investors through science-based agricultural advisory, responsible input systems, and scalable farm implementation solutions.
                            </p>
                            <p>
                                Established to transform the agricultural landscape in Somalia and East Africa, we bring global expertise to local challenges. Our team of agronomists and specialists work tirelessly to ensure food security and economic prosperity through modern farming techniques.
                            </p>
                        </div>
                    </div>
                    <div className="bg-cta/5 rounded-3xl p-8 border border-cta/10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-4">Why Choose Us?</h3>
                        <ul className="space-y-4">
                            {[
                                'Expert Agronomist-led Advisory',
                                'Certified High-Quality Seed Systems',
                                'Sustainable Irrigation Solutions',
                                'Comprehensive Project Implementation',
                                'Proven Track Record in East Africa'
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-cta text-xl">✓</span>
                                    <span className="font-body font-medium text-primary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
