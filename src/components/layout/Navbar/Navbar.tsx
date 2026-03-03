import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { NAV_ITEMS } from '../../../constants';

// Pages that have a dark hero — white text looks great when NOT scrolled
const DARK_HERO_PAGES = ['/', '/about', '/services', '/products', '/projects', '/training', '/insights'];

const Navbar: React.FC = () => {
    const { isScrolled } = useScrollPosition();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const location = useLocation();

    // Only use transparent + white-text style on pages that have a dark hero section
    const hasDarkHero = DARK_HERO_PAGES.some(p =>
        p === '/' ? location.pathname === '/' : location.pathname.startsWith(p)
    );
    // Use light (dark text) navbar when: scrolled OR on a page without a dark hero
    const useLightNav = isScrolled || !hasDarkHero;

    const isActive = (path: string, hasDropdown = false) => {
        if (path === '/') return location.pathname === '/';
        // For dropdown parents (Services, Products), use startsWith to highlight on child pages too
        if (hasDropdown) return location.pathname.startsWith(path);
        // For direct links, use exact match so /projects doesn't accidentally match /projects-archive etc.
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const handleDesktopNavClick = (item: any, e: React.MouseEvent) => {
        if (item.dropdown) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === item.label ? null : item.label);
        } else {
            setActiveDropdown(null);
        }
    };

    const handleMobileNavClick = (item: any) => {
        if (item.dropdown) {
            setMobileDropdown(mobileDropdown === item.label ? null : item.label);
        } else {
            setMobileOpen(false);
            setMobileDropdown(null);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${useLightNav
                    ? 'bg-white/95 backdrop-blur-md shadow-navbar py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center group" onClick={() => setMobileOpen(false)}>
                    <img
                        src="/assets/images/barwaaqo-logo.jpg"
                        alt="Barwaaqo Agri Group"
                        className="h-10 md:h-12 w-auto object-contain transition-all"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                onClick={(e) => handleDesktopNavClick(item, e)}
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                                className={`flex items-center gap-1 px-4 py-2 rounded-full font-body font-medium text-sm transition-all duration-200 cursor-pointer
                                    ${useLightNav
                                        ? isActive(item.href, !!item.dropdown) ? 'text-cta bg-primary/5' : 'text-primary hover:bg-primary/5 hover:text-cta'
                                        : isActive(item.href, !!item.dropdown) ? 'text-white bg-white/20' : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.dropdown ? (
                                    <span>{item.label}</span>
                                ) : (
                                    <Link to={item.href}>{item.label}</Link>
                                )}
                                {item.dropdown && (
                                    <svg
                                        className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>

                            {/* Dropdown */}
                            {item.dropdown && activeDropdown === item.label && (
                                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-card-hover border border-neutral-border/30 py-3 z-50 animate-fade-in">
                                    {item.dropdown.map((sub) => (
                                        <Link
                                            key={sub.label}
                                            to={sub.href}
                                            className="block px-5 py-2.5 text-sm font-body text-primary hover:text-cta hover:bg-cta/5 transition-colors"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link to="/contact" className="btn-primary text-sm px-6 py-3">
                        Request Consultation →
                    </Link>
                </div>

                {/* Mobile Hamburger — always uses correct contrast color */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`lg:hidden p-2 rounded-xl transition-colors
                        ${useLightNav ? 'text-primary' : 'text-white'}`}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-white border-t border-neutral-border mx-0 px-4 py-4 flex flex-col gap-1 shadow-2xl">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="flex flex-col">
                            <button
                                onClick={() => handleMobileNavClick(item)}
                                className={`flex items-center justify-between px-4 py-3 font-body font-medium rounded-xl transition-colors text-left
                                    ${isActive(item.href, !!item.dropdown) ? 'bg-cta/10 text-cta' : 'text-primary hover:bg-cta/5'}`}
                            >
                                {item.dropdown ? (
                                    <>
                                        <span>{item.label}</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.label ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </>
                                ) : (
                                    <Link to={item.href} className="w-full">{item.label}</Link>
                                )}
                            </button>

                            {item.dropdown && mobileDropdown === item.label && (
                                <div className="pl-6 flex flex-col gap-1 border-l-2 border-cta/10 ml-4 mb-2 mt-1 animate-fade-in">
                                    {item.dropdown.map((sub) => (
                                        <Link
                                            key={sub.label}
                                            to={sub.href}
                                            onClick={() => {
                                                setMobileOpen(false);
                                                setMobileDropdown(null);
                                            }}
                                            className="px-4 py-2.5 text-sm text-text-light hover:text-cta transition-colors border-b border-neutral-border/10 last:border-0"
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className="btn-primary mt-4 justify-center"
                        onClick={() => setMobileOpen(false)}
                    >
                        Request Consultation →
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;