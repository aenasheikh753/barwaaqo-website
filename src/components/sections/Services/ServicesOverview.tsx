import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/SectionHeader';

import { SERVICES_DATA } from '../../../data/services.data';
import type { Service } from '../../../types/service.types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
    <div
        className="card-base group overflow-hidden flex flex-col h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        {/* Card Image with Zoom */}
        <div className="img-zoom-container h-48 relative">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur shadow-lg flex items-center justify-center text-xl z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cta group-hover:text-white">
                {service.icon}
            </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-grow gap-4">
            <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-cta transition-colors">
                    {service.title}
                </h3>
                <p className="text-neutral-body text-sm font-body leading-relaxed line-clamp-3">
                    {service.description}
                </p>
            </div>

            <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-neutral-border/50">
                {service.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-neutral-light font-body font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cta flex-shrink-0" />
                        {feat}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ServicesOverview: React.FC = () => (
    <section id="services" className="section-padding bg-base">
        <div className="container-custom">
            <div className="flex flex-col items-center gap-12">
                <SectionHeader
                    tag="What We Offer"
                    title="Our Core"
                    titleHighlight="Services"
                    subtitle="From soil analysis to large-scale project implementation — Barwaaqo delivers science-backed agricultural solutions tailored for East Africa."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {SERVICES_DATA.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </div>
                <Link to="/services" className="btn-outline">
                    View All Services →
                </Link>
            </div>
        </div>
    </section>
);

export default ServicesOverview;
