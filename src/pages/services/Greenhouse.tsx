import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/sections/ConsultationForm';

const Greenhouse: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Greenhouse Advisory"
                subtitle="Optimized controlled environment systems for high-value crop production."
            />
            <div className="container-custom mt-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Smart Protected Cultivation</h2>
                        <p className="text-text-light mb-8 leading-relaxed">
                            Greenhouse farming allows for year-round production and protection from extreme weather. Our advisory team helps you select the right structures and management protocols for success in East Africa.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-cta/5 rounded-2xl flex items-center gap-4">
                                <span className="text-2xl">🌡️</span>
                                <span className="font-bold text-primary">Climate Control Optimization</span>
                            </div>
                            <div className="p-4 bg-accent/5 rounded-2xl flex items-center gap-4">
                                <span className="text-2xl">🌱</span>
                                <span className="font-bold text-primary">Disease & Pest Management</span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link to="/services" className="btn-outline">
                                ← View All Services
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-white p-8 rounded-3xl shadow-xl">
                        <ConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greenhouse;
