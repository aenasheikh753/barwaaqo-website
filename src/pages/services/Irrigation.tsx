import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../features/consultation-form';

const Irrigation: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Irrigation Planning"
                subtitle="Sustainable water management solutions for year-round agricultural productivity."
            />
            <div className="container-custom mt-20 text-center">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Modern Irrigation Systems</h2>
                <p className="max-w-3xl mx-auto text-text-light mb-16 italic">"Water is the lifeblood of agriculture. Our planning ensures every drop is utilized effectively."</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {['Drip Irrigation', 'Solar Water Pumps', 'Reservoir Design'].map(item => (
                        <div key={item} className="p-8 bg-white shadow-card rounded-3xl border border-neutral-border/20">
                            <h3 className="font-bold text-primary mb-3">{item}</h3>
                            <p className="text-sm text-text-light">Advanced solutions tailored for arid and semi-arid regions.</p>
                        </div>
                    ))}
                </div>
                <div className="bg-primary text-white p-12 rounded-[3.5rem] shadow-2xl">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-white">Ready to Optimize Your Water Use?</h3>
                    <div className="py-0">
                        <ConsultationForm />
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <Link to="/services" className="btn-outline">
                        ← View All Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Irrigation;
