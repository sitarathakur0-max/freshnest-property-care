import React from 'react';
import { Phone, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#12281d] text-[#dce7e1] border-t border-[#1e3e2f]">
      {/* Top Banner / Trust strip in Footer */}
      <div className="border-b border-[#1b3d2c] py-8 px-4 sm:px-6 lg:px-8 bg-[#0f2319]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#1b3d2d] flex items-center justify-center border border-[#2c533e]">
              <Star className="w-6 h-6 text-[#e5b342] fill-[#e5b342]" aria-hidden="true" />
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-tight font-heading">
                {BUSINESS_CONFIG.rating} / 5 Rating · {BUSINESS_CONFIG.reviewCount} Reviews
              </div>
              <p className="text-xs text-[#9eb8aa]">
                Verified customer reviews for property-care services in London.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              id="footer-call-cta"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#234b37] hover:bg-[#2d5f46] text-white font-semibold text-sm transition-colors border border-[#37694f] shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#e5b342]" aria-hidden="true" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <button
              id="footer-enquire-cta"
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent hover:bg-[#1b392b] text-[#e3ece7] font-semibold text-sm transition-colors border border-[#2b4c3b] cursor-pointer"
            >
              <span>Submit Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#9bb7a8]" />
            </button>
          </div>
        </div>
      </div>

      {/* Multi-column navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1e4431] flex items-center justify-center text-white font-bold">
                <span className="text-lg font-heading text-[#ebf3ef]">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>

            <p className="text-sm text-[#a8c2b4] leading-relaxed">
              Professional property care, cleaning, and maintenance services based in London. Focused on reliable presentation and dependable communication.
            </p>

            <div className="pt-2 space-y-2 text-sm text-[#cbdcd2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#89af9b] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e5b342] shrink-0" aria-hidden="true" />
                <a
                  id="footer-inline-phone"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="hover:text-white font-semibold underline underline-offset-4 decoration-[#3b6750]"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  type="button"
                  onClick={() => handleLinkClick('home')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  type="button"
                  onClick={() => handleLinkClick('about')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  About FreshNest
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  type="button"
                  onClick={() => handleLinkClick('services')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Services Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-property-care"
                  type="button"
                  onClick={() => handleLinkClick('property-care')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Property Care Approach
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  type="button"
                  onClick={() => handleLinkClick('reviews')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Reviews & Rating
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  type="button"
                  onClick={() => handleLinkClick('faq')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  type="button"
                  onClick={() => handleLinkClick('contact')}
                  className="text-[#b5ccbf] hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Property-Care Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Property-Care Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#b5ccbf]">
              {BUSINESS_CONFIG.services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-white transition-colors text-left cursor-pointer flex items-center justify-between w-full"
                  >
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h3>
            <p className="text-sm text-[#a8c2b4]">
              For property-care enquiries or to discuss requirements for your property, contact FreshNest Property Care directly:
            </p>

            <div className="p-4 rounded-xl bg-[#173325] border border-[#244c38] space-y-2">
              <div className="text-xs uppercase font-semibold text-[#8eb29f]">Telephone</div>
              <a
                id="footer-box-phone-link"
                href={BUSINESS_CONFIG.phoneHref}
                className="block text-lg font-bold text-white hover:text-[#f3d38c] transition-colors"
              >
                {BUSINESS_CONFIG.phone}
              </a>
              <div className="text-xs text-[#a0beae] pt-1">
                Location: {BUSINESS_CONFIG.location}
              </div>
            </div>

            <p className="text-xs text-[#7e9e8f] leading-relaxed">
              Enquiries can be submitted online or discussed over the phone with our team.
            </p>
          </div>
        </div>

        {/* Bottom copyright & verified notice */}
        <div className="mt-12 pt-8 border-t border-[#1a382a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#89a897]">
          <p>
            © {currentYear} {BUSINESS_CONFIG.businessName}. All rights reserved. Property care and services in {BUSINESS_CONFIG.location}.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#3d7a59]"></span>
            <span>Verified Rating: {BUSINESS_CONFIG.rating} / 5 ({BUSINESS_CONFIG.reviewCount} customer reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
