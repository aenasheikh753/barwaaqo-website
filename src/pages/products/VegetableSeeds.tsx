import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';

const VegetableSeeds: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Vegetable Seeds"
                subtitle="High-performance hybrid and OPV vegetable varieties."
            />
            <div className="container-custom mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {['Onions', 'Tomatoes', 'Peppers', 'Cabbage', 'Watermelon', 'Okra'].map(seed => (
                        <div key={seed} className="p-8 bg-white shadow-card rounded-[2.5rem] border border-neutral-border/20 text-center hover:border-cta/50 transition-colors">
                            <h3 className="text-xl font-bold text-primary mb-4">{seed} Seeds</h3>
                            <p className="text-sm text-text-light mb-6">Tested for resilience in East African climates.</p>
                            <button className="text-cta font-bold hover:underline">View Varieties →</button>
                        </div>
                    ))}
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

export default VegetableSeeds;
