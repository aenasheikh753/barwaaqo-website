import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../features/consultation-form';

const SeedsInputs: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Certified Seeds & Inputs"
                subtitle="High-yield, certified seed systems tailored for Somalia and East Africa."
            />
            <div className="container-custom mt-20">
                <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Our Input Systems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 bg-cta/5 rounded-3xl border border-cta/10">
                        <h3 className="text-xl font-bold text-primary mb-4">Certified Seed Varieties</h3>
                        <p className="text-text-light mb-4 text-sm">We provide drought-tolerant and high-yielding vegetable and cereal seeds certified by international standards.</p>
                    </div>
                    <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10">
                        <h3 className="text-xl font-bold text-primary mb-4">Fertilizers & Protection</h3>
                        <p className="text-text-light mb-4 text-sm">Specialized crop nutrition and protection products that respect environmental sustainability.</p>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-[3rem] shadow-2xl">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Request Input Catalog</h3>
                    <ConsultationForm />
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

export default SeedsInputs;
