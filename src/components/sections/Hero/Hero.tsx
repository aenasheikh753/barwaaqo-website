import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../../constants';


const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fee74a52?q=80&w=2000&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-cta/20" />
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cta/10 blur-3xl opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl opacity-50" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container-custom relative z-10 pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 animate-fade-up">
                        <div className="flex flex-col gap-6">
                            <span className="inline-flex items-center gap-2 bg-cta/20 border border-cta/30 text-cta text-sm font-body font-bold px-5 py-2.5 rounded-full w-fit shadow-lg shadow-cta/10">
                                <span className="w-2.5 h-2.5 rounded-full bg-cta animate-pulse inline-block" />
                                Operating Across Somalia & East Africa
                            </span>

                            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                                Precision Agriculture <br />
                                for a <span className="text-cta">Prosperous Future</span>
                            </h1>

                            <p className="text-white/80 text-lg md:text-xl font-body leading-relaxed max-w-xl">
                                {COMPANY_INFO.description}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-5">
                            <Link to="/contact" className="btn-primary text-base px-10 py-4 shadow-xl">
                                Request Consultation →
                            </Link>
                            <Link to="/services" className="btn-secondary text-base px-10 py-4 backdrop-blur-sm">
                                Explore Solutions
                            </Link>
                        </div>


                    </div>

                    {/* Right Visual */}
                    <div className="hidden lg:flex items-center justify-end relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative group">
                            {/* Main Image with decorative borders */}
                            <div className="relative w-[480px] h-[580px] rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop"
                                    alt="Healthy Crops"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <p className="font-heading text-xl font-bold text-white mb-1">Sustainable Growth</p>
                                    <p className="text-white/80 text-sm font-body">Implementing modern techniques for Somali farmers.</p>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl animate-bounce-slow">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-3xl">🌱</span>
                                    <p className="text-[10px] font-bold text-primary tracking-tighter uppercase text-center">Certified<br />Advisory</p>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-cta p-6 rounded-3xl shadow-xl shadow-cta/30">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-white text-3xl font-bold leading-none">95%</span>
                                    <p className="text-[10px] font-bold text-white uppercase tracking-wider text-center">Success<br />Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 0C540 0 240 60 0 20L0 60Z" fill="#F7F8F5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
