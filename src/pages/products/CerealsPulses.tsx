import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';

const CerealsPulses: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Cereals & Pulses"
                subtitle="Certified seeds for food security and commercial cereal production."
            />
            <div className="container-custom mt-20">
                <div className="bg-cta/5 p-12 rounded-[3.5rem] border border-cta/10 mb-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Commercial Seed Systems</h2>
                        <p className="text-text-light mb-8">We supply certified seeds for Maize, Sorghum, Cowpeas, and Mung Beans, ensuring local farmers have access to the best genetics available.</p>
                        <button className="btn-primary">Download Technical Sheet</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-md border border-neutral-border/10">
                        <h3 className="font-bold text-primary mb-2">High Yield Maize</h3>
                        <p className="text-sm text-text-light underline">View 2024 Yield Reports</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-md border border-neutral-border/10">
                        <h3 className="font-bold text-primary mb-2">Early Maturing Cowpeas</h3>
                        <p className="text-sm text-text-light underline">Vew Technical Specs</p>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <Link to="/products" className="btn-outline">
                        ← View All Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CerealsPulses;
