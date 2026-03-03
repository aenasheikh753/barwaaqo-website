import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/sections/ConsultationForm';

const SoilCrop: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Soil & Crop Programs"
                subtitle="Science-based nutritional and protection programs for maximum yield."
            />
            <div className="container-custom mt-20">
                <div className="bg-white p-12 rounded-[3rem] shadow-card border border-neutral-border/10 mb-20 text-center">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Nurturing Your Soil</h2>
                    <p className="text-text-light max-w-2xl mx-auto mb-10">Healthy crops start with healthy soil. Our programs use precise lab data to build fertilization and protection schedules tailored to your land.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Soil Testing', 'Nutrient Maps', 'Pest Monitoring', 'Harvest Advice'].map(p => (
                            <div key={p} className="p-6 bg-base rounded-2xl font-bold text-primary">{p}</div>
                        ))}
                    </div>
                </div>
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold text-center text-primary mb-8">Request a Soil Analysis</h3>
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

export default SoilCrop;
