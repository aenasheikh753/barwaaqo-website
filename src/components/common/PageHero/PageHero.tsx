import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
    // default background photo if none supplied
    const bgUrl = image || '/assets/images/field.jpg';

    return (
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0">
                {/* underlying photo */}
                <img
                    src={bgUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                
                {/* ─── YAHAN CHANGES HAIN ─── */}
                {/* 1. Base Dark Layer: Poori image ko thoda dark karne ke liye */}
                <div className="absolute inset-0 bg-primary/40 z-10" />
                
                {/* 2. Stronger Gradient: Bottom se top tak dark effect dene ke liye */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40 z-10" />
                {/* ────────────────────────── */}
            </div>

            <div className="container-custom relative z-20 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-fade-in-up delay-100 italic">
                        {subtitle}
                    </p>
                )}
                <div className="w-20 h-1 bg-cta mx-auto mt-8 rounded-full animate-scale-in" />
            </div>
        </div>
    );
};

export default PageHero;