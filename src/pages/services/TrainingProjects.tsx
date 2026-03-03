import React from 'react';
import PageHero from '../../components/common/PageHero';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/sections/ConsultationForm';

const TrainingProjects: React.FC = () => {
    return (
        <div className="pb-20">
            <PageHero
                title="Training & Projects"
                subtitle="Empowering communities and commercial farmers through knowledge transfer."
            />
            <div className="container-custom mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <ConsultationForm />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Building Future Capacity</h2>
                        <p className="text-text-light mb-8 leading-relaxed">
                            We believe in scalable implementation. From training NGO staff to managing large-scale commercial farm setups, our project division ensures that knowledge translates directly into yield.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-primary text-white p-4 rounded-2xl">
                                <span className="font-bold">Project Design & Implementation</span>
                            </div>
                            <div className="flex items-center gap-4 bg-cta text-white p-4 rounded-2xl">
                                <span className="font-bold">Farmer Capacity Building</span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link to="/services" className="btn-outline">
                                ← View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProjects;
