import React from 'react';
import AnimatedCounter from '../../common/AnimatedCounter';
import { STATS_DATA } from '../../../data/stats.data';

const TrustBar: React.FC = () => {
    return (
        <section className="bg-primary py-14">
            <div className="container-custom">
                <p className="text-center text-white/60 font-body text-sm uppercase tracking-widest mb-10">
                    Trusted Across Somalia & East Africa
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS_DATA.map((stat, idx) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center text-center gap-2 ${idx < STATS_DATA.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
                        >
                            <span className="text-3xl mb-1">{stat.icon}</span>
                            <p className="font-heading text-4xl md:text-5xl font-bold text-white">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-white/60 font-body text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
