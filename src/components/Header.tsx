import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export type PageId = 'home' | 'about' | 'services' | 'property-care' | 'reviews' | 'faq' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'property-care', label: 'Property Care' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top verified notice strip */}
      <div className="bg-[#152e22] text-[#e8f0eb] text-xs py-2 px-4 border-b border-[#254535] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-[#c4d7cd]">
              <MapPin className="w-3.5 h-3.5 text-[#95b8a5]" aria-hidden="true" />
              <span>{BUSINESS_CONFIG.location}</span>
            </span>
            <span className="hidden sm:inline-block text-[#3f634f]">|</span>
            <span className="hidden sm:flex items-center gap-1 text-[#d3e3db]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e5b342]" aria-hidden="true" />
              <span>Verified 4.9 ★ Rating · 493 Reviews</span>
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-[#a6c1b3] text-xs">Direct Line:</span>
            <a
              id="top-phone-link"
              href={BUSINESS_CONFIG.phoneHref}
              className="font-semibold text-white hover:text-[#f3d38c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3d38c] rounded-xs px-1"
            >
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#fbfcf9]/95 backdrop-blur-md shadow-xs border-b border-[#e2eae4]'
            : 'bg-[#fbfcf9] border-b border-[#e8efe9]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand Name */}
            <button
              id="brand-logo-btn"
              type="button"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#234b37] rounded-md p-1 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#183929] flex items-center justify-center text-white font-bold shadow-xs transition-transform group-hover:scale-105">
                <span className="text-xl font-heading text-[#e2eee7]">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#162f22] font-heading leading-tight">
                  FreshNest
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4d725f]">
                  Property Care
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1f4532] ${
                      isActive
                        ? 'text-[#163524] bg-[#e7efe9]'
                        : 'text-[#374b40] hover:text-[#163524] hover:bg-[#eff4f0]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Primary CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="header-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#183929] hover:bg-[#11291d] text-[#fbfcf9] font-medium text-sm transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#183929]"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" aria-hidden="true" />
                <span>Call FreshNest</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                id="mobile-quick-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="p-2.5 rounded-lg bg-[#183929] text-white focus:outline-none focus:ring-2 focus:ring-[#183929] sm:hidden"
                aria-label="Call FreshNest directly"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" />
              </a>

              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#1b3b2b] hover:bg-[#eff4f0] focus:outline-none focus:ring-2 focus:ring-[#1b3b2b] cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-[#e2eae4] bg-[#fbfcf9] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#183929] text-[#fbfcf9]'
                        : 'text-[#2a3f33] hover:bg-[#eff4f0]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#e5b342]"></span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-5 border-t border-[#e4ece6] flex flex-col gap-3">
              <a
                id="mobile-drawer-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#183929] text-white font-semibold text-base shadow-xs"
              >
                <Phone className="w-5 h-5 text-[#e5b342]" aria-hidden="true" />
                <span>Call FreshNest ({BUSINESS_CONFIG.phone})</span>
              </a>

              <div className="text-center text-xs text-[#527060] mt-1">
                Based in {BUSINESS_CONFIG.location} · Verified 4.9 ★ (493 Reviews)
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
