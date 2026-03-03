import React from 'react';
import PageHero from '../components/common/PageHero';

const Products: React.FC = () => {
    const categories = [
        { name: 'Vegetable Seeds', desc: 'Hybrid and OPV varieties for commercial production.' },
        { name: 'Cereals & Pulses', desc: 'High-quality certified seeds for food security.' },
        { name: 'Fodder & Forage', desc: 'Nutritious livestock feed solutions.' },
        { name: 'Horticulture Solutions', desc: 'Tools and inputs for premium horticulture.' }
    ];

    return (
        <div className="pb-20">
            <PageHero
                title="Our Products"
                subtitle="Certified high-quality inputs for superior yields."
            />

            <div className="container-custom mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <div key={cat.name} className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-neutral-light rounded-[2.5rem] mb-6 overflow-hidden relative shadow-card hover:shadow-card-hover transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                                    <button className="w-full btn-cta py-3 text-sm">Request Catalog</button>
                                </div>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-cta transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-sm text-text-light font-body leading-relaxed">
                                {cat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-accent/5 rounded-3xl border border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-primary mb-2">Request Availability</h3>
                        <p className="text-text-light">Check stock levels for specific regions in Somalia and Kenya.</p>
                    </div>
                    <button className="btn-primary whitespace-nowrap">Contact Sales Team</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
