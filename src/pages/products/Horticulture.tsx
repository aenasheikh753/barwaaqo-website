import React from 'react';
import PageHero from '../../components/common/PageHero';

const Horticulture: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Horticulture Solutions"
                subtitle="Specialized tools and inputs for high-value horticulture production."
            />
            <div className="container-custom mt-20">
                <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Expert Horticulture Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-10 bg-white rounded-[3rem] shadow-card border border-neutral-border/10">
                        <h3 className="text-2xl font-bold text-primary mb-4">Precision Orchard Management</h3>
                        <p className="text-text-light mb-6">Tools and advisory for fruit tree production including Mangoes, Papayas, and Citrus.</p>
                        <button className="text-cta font-bold hover:underline">Request Solution →</button>
                    </div>
                    <div className="p-10 bg-accent/5 rounded-[3rem] shadow-card border border-accent/10">
                        <h3 className="text-2xl font-bold text-primary mb-4">Post-Harvest Systems</h3>
                        <p className="text-text-light mb-6">Innovative solutions to reduce losses and improve shelf-life for market-bound produce.</p>
                        <button className="text-accent font-bold hover:underline">View Systems →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Horticulture;
