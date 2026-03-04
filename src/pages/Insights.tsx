import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import { ARTICLES_DATA } from '../data/insights.data';

const Insights: React.FC = () => {
    const articles = ARTICLES_DATA;

    return (
        <>
            <PageHero
                title="Agricultural Insights"
                subtitle="Latest research, market trends, and success stories from across East Africa."
            />

            <section className="section-padding bg-base">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-12">
                        <SectionHeader
                            tag="Knowledge Hub"
                            title="Latest from"
                            titleHighlight="Agriculture"
                            subtitle="Stay informed with research-backed insights and practical guidance for better farming."
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {articles.map((article) => (
                                <Link to={`/insights/${article.id}`} key={article.id} className="card-base p-6 flex flex-col gap-4 hover:shadow-lg transition-all block">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-body font-semibold text-cta uppercase tracking-wider">{article.category}</span>
                                        <span className="text-xs text-neutral-light font-body">{article.readTime}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-2">{article.title}</h3>
                                        <p className="text-neutral-body text-sm font-body line-clamp-3">{article.excerpt}</p>
                                    </div>
                                    <div className="pt-4 border-t border-neutral-border flex items-center justify-between">
                                        <span className="text-xs text-neutral-light font-body">{article.date}</span>
                                        <span className="text-cta font-body font-semibold text-sm">Read →</span>
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
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Knowledge Topics</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Soil Science',
                                    'Water Management',
                                    'Pest Control',
                                    'Crop Varieties',
                                    'Market Access',
                                    'Farm Economics',
                                    'Climate Resilience',
                                    'Organic Farming'
                                ].map((topic) => (
                                    <div key={topic} className="p-4 bg-base rounded-lg border border-neutral-border text-center hover:bg-cta/5 transition-colors cursor-pointer">
                                        <p className="font-body font-semibold text-primary text-sm">{topic}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-cta/10 rounded-3xl p-10 border border-cta/10">
                            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Newsletter</h3>
                            <p className="text-neutral-body font-body mb-6">Get monthly insights and practical tips delivered to your inbox.</p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-border focus:outline-none focus:border-cta text-sm"
                                />
                                <button
                                    type="submit"
                                    className="w-full btn-primary text-sm"
                                >
                                    Subscribe to Insights
                                </button>
                            </form>
                            <p className="text-xs text-neutral-light font-body mt-4 text-center">No spam, unsubscribe anytime</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Insights;
