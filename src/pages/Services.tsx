import React from 'react';
import PageHero from '../components/common/PageHero';
import ConsultationForm from '../features/consultation-form';

const Services: React.FC = () => {
    const servicesList = [
        { title: 'Agricultural Consulting', desc: 'Agronomist-led advisory for commercial farm support and optimization.' },
        { title: 'Certified Seeds & Inputs', desc: 'Providing high-yield, certified seed systems tailored for regional climates.' },
        { title: 'Irrigation Planning', desc: 'Modern water management solutions for sustainable agriculture.' },
        { title: 'Greenhouse Advisory', desc: 'Optimized controlled environment systems for high-value crops.' },
        { title: 'Soil & Crop Programs', desc: 'Science-based nutritional and protection programs for maximum yield.' },
        { title: 'Training & Projects', desc: 'Capacity building and full-scale project implementation services.' }
    ];

    return (
        <div className="pb-20">
            <PageHero
                title="Our Services"
                subtitle="Comprehensive agricultural solutions for farmers and investors."
            />

            {/* Wrapper Div jis mein flex-col hai taake content upar se nechy aye */}
            <div className="container-custom mt-20 flex flex-col gap-20">

                {/* Pehli Div: Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={service.title}
                            className="p-8 bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-border/30 group"
                        >
                            <div className="w-14 h-14 bg-cta/10 text-cta rounded-2xl flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-cta group-hover:text-white transition-colors">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-text-light font-body text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dusri Div: Custom Solution Section (Ab ye pehli div ke nechy ayegi) */}
                <div className="bg-primary rounded-[3rem] py-12 px-6 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">Need a Custom Solution?</h2>
                            <p className="text-white/70 mb-8 max-w-lg">
                                Our experts are ready to design a program tailored to your specific farm size, location, and goals.
                            </p>
                            <button className="btn-cta">Talk to an Specialist →</button>
                        </div>
                        <div className="">
                            <ConsultationForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
