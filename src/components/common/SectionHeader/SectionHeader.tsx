import React from 'react';

interface SectionHeaderProps {
    tag?: string;
    title: string;
    titleHighlight?: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    tag, title, titleHighlight, subtitle,
    align = 'center', light = false,
}) => {
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
    const titleColor = light ? 'text-white' : 'text-primary';
    const subtitleColor = light ? 'text-white/70' : 'text-neutral-body';

    return (
        <div className={`flex flex-col gap-3 animate-fade-up ${alignClass}`}>
            {tag && (
                <span className="section-tag">
                    <span className="w-1.5 h-1.5 rounded-full bg-cta inline-block" />
                    {tag}
                </span>
            )}
            <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${titleColor}`}>
                {title}
                {titleHighlight && (
                    <span className="text-gradient"> {titleHighlight}</span>
                )}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
