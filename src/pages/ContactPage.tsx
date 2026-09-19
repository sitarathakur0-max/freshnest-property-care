import React from 'react';
import { Phone, MapPin, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { ContactForm } from '../components/ContactForm';
import { PropertyVisual } from '../components/PropertyVisual';

interface ContactPageProps {
  selectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ selectedService }) => {
  return (
    <div id="contact-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
            Contact FreshNest Property Care
          </h1>
          <p className="text-base sm:text-lg text-[#3f5d4e] leading-relaxed">
            Contact FreshNest Property Care in London to discuss requirements, enquire about availability, or arrange property care and maintenance services.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Business Information & Location Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Phone Box */}
            <div className="p-8 rounded-3xl bg-[#142e20] text-white border border-[#234b37] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e5b342]">
                  Direct Telephone
                </span>
                <h2 className="text-2xl font-bold font-heading">
                  Call FreshNest Directly
                </h2>
                <p className="text-xs sm:text-sm text-[#b8d1c2] leading-relaxed">
                  Speak directly with our team to discuss your property-care requirements, scope, and current pricing.
                </p>
              </div>

              <a
                id="contact-page-phone-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="flex items-center justify-between p-4 rounded-xl bg-[#234d37] hover:bg-[#2c5f44] text-white border border-[#376c4e] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#142e20] flex items-center justify-center text-[#e5b342]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a4c4b2]">Primary Telephone</div>
                    <div className="text-lg font-bold font-heading">{BUSINESS_CONFIG.phone}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#e5b342] group-hover:translate-x-1 transition-transform">
                  Call Now →
                </span>
              </a>

              <div className="pt-4 border-t border-[#234b37] space-y-3 text-xs text-[#bad1c3]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e5b342] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Business Location:</strong> {BUSINESS_CONFIG.location}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Star className="w-4 h-4 text-[#e5b342] fill-[#e5b342] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Verified Customer Rating:</strong> {BUSINESS_CONFIG.rating} / 5 across {BUSINESS_CONFIG.reviewCount} reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Location Visual Card */}
            <div className="rounded-2xl overflow-hidden border border-[#d6e3db] bg-white shadow-xs">
              <div className="p-4 border-b border-[#e5eee8] bg-[#f8faf8] flex items-center justify-between">
                <span className="text-xs font-bold text-[#142e20] uppercase tracking-wider">
                  London Location
                </span>
                <span className="text-xs text-[#4b6b59] font-medium">
                  {BUSINESS_CONFIG.postalCode}
                </span>
              </div>
              <PropertyVisual
                type="london"
                className="w-full aspect-16/10"
                badgeText="London N1 7GU"
              />
              <div className="p-5 text-xs text-[#4b6b59] leading-relaxed">
                FreshNest Property Care is based in <strong>{BUSINESS_CONFIG.location}</strong>. Please contact us directly to confirm whether your property is within our service coverage.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={selectedService} />
          </div>
        </div>
      </section>
    </div>
  );
};
