import React from 'react';
import PageHero from '../../components/common/PageHero';

const FodderForage: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Fodder & Forage"
                subtitle="Nutritious livestock feed solutions for sustainable pastoralism."
            />
            <div className="container-custom mt-20">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Securing Feed Supplies</h2>
                        <p className="text-text-light mb-6">Our fodder seeds are selected for high protein content and drought resistance, making them ideal for the Somali livestock sector.</p>
                        <ul className="space-y-3 font-body font-medium text-primary">
                            <li>✓ Rhodes Grass (Certified)</li>
                            <li>✓ Sudan Grass</li>
                            <li>✓ Lucerne (Alfalfa)</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 aspect-video bg-neutral-light rounded-[3rem] shadow-inner flex items-center justify-center">
                        <span className="text-cta font-heading font-bold opacity-50">Plant Image Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FodderForage;
