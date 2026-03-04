import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

import { PROJECTS_DATA } from '../data/projects.data';

const Projects: React.FC = () => {
    const projects = PROJECTS_DATA;

    return (
        <>
            <PageHero
                title="Featured Projects"
                subtitle="Real-world success stories transforming agriculture across East Africa."
            />

            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Case Studies"
                            title="Transformative"
                            titleHighlight="Projects"
                            subtitle="Proven implementations that deliver measurable results for farmers and communities."
                        />
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            {projects.map((project) => (
                                <Link to={`/projects/${project.id}`} key={project.id} className="card-base overflow-hidden hover:shadow-lg transition-all block">
                                    {/* featured image at top */}
                                    {project.image && (
                                        <div className="relative h-48 w-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-7 flex flex-col gap-4">
                                        <div>
                                            <span className="text-cta font-body font-bold text-xs uppercase tracking-wider">{project.tag}</span>
                                            <h3 className="text-xl font-heading font-bold text-primary mt-2">{project.title}</h3>
                                            <p className="text-neutral-body text-sm font-body mt-2">{project.desc}</p>
                                        </div>
                                        <div className="pt-4 border-t border-neutral-border">
                                            <p className="text-xs font-body font-semibold text-cta mb-3 uppercase tracking-wider">Key Impact</p>
                                            <ul className="space-y-2">
                                                {project.impact.map((item) => (
                                                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-body font-body">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Our Project Approach</h2>
                            <div className="space-y-4">
                                {[
                                    { num: '01', title: 'Assessment', desc: 'Thorough baseline evaluation and farmer need analysis.' },
                                    { num: '02', title: 'Design', desc: 'Customized solution development with stakeholder input.' },
                                    { num: '03', title: 'Implementation', desc: 'On-ground execution with quality assurance management.' },
                                    { num: '04', title: 'Monitoring', desc: 'Data-driven tracking of outcomes and impact measurement.' }
                                ].map((phase) => (
                                    <div key={phase.num} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                                                <span className="text-cta font-heading font-bold">{phase.num}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-primary">{phase.title}</h3>
                                            <p className="text-neutral-body text-sm font-body">{phase.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-3xl p-10 border border-neutral-border">
                            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Results Delivered</h3>
                            <div className="space-y-6">
                                {[
                                    { metric: '500+', label: 'Farms Impacted' },
                                    { metric: '25%+', label: 'Avg. Income Growth' },
                                    { metric: '40%', label: 'Water Efficiency' },
                                    { metric: '95%', label: 'Farmer Satisfaction' }
                                ].map((result) => (
                                    <div key={result.label}>
                                        <p className="font-heading text-3xl font-bold text-cta">{result.metric}</p>
                                        <p className="text-neutral-body text-sm font-body mt-1">{result.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
