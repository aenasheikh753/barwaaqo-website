import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/sections/ConsultationForm';

const Consulting: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Agricultural Consulting"
                subtitle="Expert agronomist-led advisory for commercial farm optimization."
            />
            <div className="container-custom mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="prose max-w-none text-text-light">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Professional Advisory Services</h2>
                        <p className="mb-6">
                            Our consulting services are designed to help farmers and agribusiness investors maximize their productivity and ROI through science-backed methodologies.
                        </p>
                        <h3 className="text-xl font-bold text-primary mb-4">What We Provide:</h3>
                        <ul className="space-y-4 mb-8">
                            <li>Comprehensive Soil Health Analysis</li>
                            <li>Crop Selection & Rotation Planning</li>
                            <li>Integrated Pest Management (IPM)</li>
                            <li>Harvest & Post-Harvest Handling</li>
                        </ul>
                        <div className="mt-10">
                            <Link to="/services" className="btn-outline">
                                ← View All Services
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-border/30">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-6">Book a Consultant</h3>
                        <ConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulting;
