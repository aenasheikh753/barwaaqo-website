import React from 'react';
import PageHero from '../../components/common/PageHero';

const FodderForage: React.FC = () => {
    return (
        <div className="pb-20 bg-white">
            <PageHero
                title="Fodder & Forage"
                subtitle="Nutritious livestock feed solutions for sustainable pastoralism."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Securing Feed Supplies
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Our fodder seeds are selected for high protein content and drought resistance, 
                            making them ideal for the Somali livestock sector.
                        </p>
                        
                        <ul className="space-y-4">
                            {[
                                "Rhodes Grass (Certified)",
                                "Sudan Grass",
                                "Lucerne (Alfalfa)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-primary font-semibold">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <span className="text-accent text-sm">✓</span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side - Optimized Image Container */}
                    <div className="w-full lg:w-1/2 relative group">
                        {/* Ambient Glow Effect */}
                        <div className="absolute -inset-4 bg-green-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-500" />
                        
                        <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                            <img 
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop" 
                                alt="Lush fodder field"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95"
                            />
                            
                            {/* Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            
                            {/* Floating Badge (Optional Polish) */}
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">Premium Quality</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FodderForage;