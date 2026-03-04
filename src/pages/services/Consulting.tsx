import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../features/consultation-form';

const Consulting: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Agricultural Consulting"
                subtitle="Expert agronomist-led advisory for commercial farm optimization."
            />
            <div className="container-custom mt-20">
                    <div className="prose max-w-none text-text-light mb-6">
                        {/* optional illustrative image above the text */}
                        <img
                            src="/assets/images/consulting.jpg"
                            alt="Consulting services"
                            className="w-full h-auto rounded-lg shadow-md mb-8"
                        />
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
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-cta/90"></div>
                        <div className="relative p-8 text-white">
                            <h3 className="text-2xl font-heading font-bold mb-6 text-white">Book a Consultant</h3>
                            <p className="text-sm mb-6">
                                Tell us about your farm and goals. Our agronomists will review your request and reach out within 24 hours.
                            </p>
                            <ul className="text-xs space-y-2 mb-6">
                                <li>✅ Fast response within 24 hrs</li>
                                <li>🌍 East Africa coverage (Somalia, Kenya, Ethiopia & beyond)</li>
                                <li>🔒 Confidential & secure</li>
                            </ul>
                            <div className="bg-white rounded-lg p-4">
                                <ConsultationForm />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Consulting;
