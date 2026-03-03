import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../../constants';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img
                                src="/assets/images/barwaaqo-logo.jpg"
                                alt="Barwaaqo Agri Group"
                                className="h-12 w-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-xl bg-cta flex items-center justify-center">
                                                <span class="text-white text-lg font-bold font-heading">B</span>
                                            </div>
                                            <div>
                                                <p class="font-heading font-bold text-lg leading-none text-white">Barwaaqo</p>
                                                <p class="text-xs font-body leading-none text-cta">Agri Group</p>
                                            </div>
                                        </div>
                                    `;
                                }}
                            />
                        </div>

                        <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
                            Science-based agricultural advisory, responsible input systems, and scalable farm solutions across Somalia and East Africa.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { name: 'Facebook', href: COMPANY_INFO.socials.facebook, icon: 'f' },
                                { name: 'Twitter', href: COMPANY_INFO.socials.twitter, icon: 'x' },
                                { name: 'LinkedIn', href: COMPANY_INFO.socials.linkedin, icon: 'in' },
                                { name: 'Instagram', href: COMPANY_INFO.socials.instagram, icon: '📷' },
                            ].map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-cta flex items-center justify-center text-xs font-bold transition-colors duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5 text-lg">Quick Links</h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Products', href: '/products' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-white/60 hover:text-cta text-sm font-body transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-cta/50 group-hover:bg-cta transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5 text-lg">Our Services</h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                'Agricultural Consulting',
                                'Certified Seeds & Inputs',
                                'Irrigation Planning',
                                'Greenhouse Advisory',
                                'Soil & Crop Programs',
                                'Training & Projects'
                            ].map((s) => (
                                <li key={s}>
                                    <Link to="/services" className="text-white/60 hover:text-cta text-sm font-body transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-cta/50 group-hover:bg-cta transition-colors" />
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5 text-lg">Our Offices</h4>
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="text-cta text-xs font-body font-semibold uppercase tracking-wider mb-1">🇸🇴 Mogadishu, Somalia</p>
                                <p className="text-white/60 text-sm font-body">{COMPANY_INFO.offices.mogadishu.address}</p>
                            </div>
                            <div>
                                <p className="text-cta text-xs font-body font-semibold uppercase tracking-wider mb-1">🇰🇪 Nairobi, Kenya</p>
                                <p className="text-white/60 text-sm font-body">{COMPANY_INFO.offices.nairobi.address}</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/60 hover:text-cta text-sm font-body transition-colors flex items-center gap-2">
                                    <span>✉️</span> {COMPANY_INFO.email}
                                </a>
                                <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`} className="text-white/60 hover:text-cta text-sm font-body transition-colors flex items-center gap-2">
                                    <span>💬</span> {COMPANY_INFO.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10">
                <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/40 text-sm font-body">
                        © {year} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm font-body">
                        Mogadishu · Nairobi · East Africa
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
