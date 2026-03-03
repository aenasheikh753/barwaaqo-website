import React, { useState, useEffect } from 'react';
import SectionHeader from '../../common/SectionHeader';
import { TESTIMONIALS_DATA } from '../../../data/testimonials.data';

const Testimonials: React.FC = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const t = TESTIMONIALS_DATA[active];

    return (
        <section id="testimonials" className="section-padding bg-base">
            <div className="container-custom">
                <div className="flex flex-col items-center gap-12">
                    <SectionHeader
                        tag="Client Feedback"
                        title="What Our"
                        titleHighlight="Partners Say"
                        subtitle="Trusted by commercial farm managers, NGO partners, and institutional clients across East Africa."
                    />

                    <div className="w-full max-w-4xl">
                        {/* Main testimonial card */}
                        <div className="card-base p-8 md:p-12 relative overflow-hidden">
                            {/* Quote mark */}
                            <div className="absolute top-6 right-8 font-heading text-8xl text-cta/10 font-bold leading-none select-none">
                                "
                            </div>
                            <div className="flex flex-col gap-6">
                                {/* Stars */}
                                <div className="flex gap-1">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                {/* Quote */}
                                <p className="font-body text-lg text-neutral-body leading-relaxed italic">
                                    "{t.quote}"
                                </p>
                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-neutral-border">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-primary">{t.name}</p>
                                        <p className="text-neutral-light text-sm font-body">{t.role} — {t.organization}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dots navigation */}
                        <div className="flex justify-center gap-2.5 mt-7">
                            {TESTIMONIALS_DATA.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    aria-label={`Testimonial ${i + 1}`}
                                    className={`transition-all duration-300 rounded-full
                    ${i === active ? 'w-8 h-2.5 bg-cta' : 'w-2.5 h-2.5 bg-neutral-border hover:bg-cta/40'}`}
                                />
                            ))}
                        </div>

                        {/* Thumbnail grid */}
                        <div className="grid grid-cols-4 gap-3 mt-6">
                            {TESTIMONIALS_DATA.map((item, i) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActive(i)}
                                    className={`p-4 rounded-2xl text-center transition-all duration-300 border
                    ${i === active
                                            ? 'bg-primary text-white border-primary shadow-card'
                                            : 'bg-white text-primary border-neutral-border hover:border-cta/40'}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm font-bold mx-auto mb-2
                    ${i === active ? 'bg-cta text-white' : 'bg-primary/10 text-primary'}`}>
                                        {item.avatar}
                                    </div>
                                    <p className={`font-heading text-xs font-semibold line-clamp-1 ${i === active ? 'text-white' : 'text-primary'}`}>
                                        {item.name.split(' ')[0]}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
