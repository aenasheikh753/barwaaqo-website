import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
    return (
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            <div className="container-custom relative z-20 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-100 italic">
                        {subtitle}
                    </p>
                )}
                <div className="w-20 h-1 bg-cta mx-auto mt-8 rounded-full animate-scale-in" />
            </div>
        </div>
    );
};

export default PageHero;
