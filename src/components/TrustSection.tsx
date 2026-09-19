import React from 'react';
import { Star, ShieldCheck, Check, MapPin, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const TrustSection: React.FC<{ variant?: 'full' | 'compact' }> = ({ variant = 'full' }) => {
  return (
    <section id="trust-section" className="py-12 sm:py-16 bg-[#f3f7f4] border-y border-[#e0ebe3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Trust Statistic Block */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#d6e3db] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3d6550] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#e5b342]" />
              <span>Verified Customer Rating</span>
            </div>

            <div className="flex items-baseline gap-3 my-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#152e22] font-heading">
                {BUSINESS_CONFIG.rating}
              </span>
              <span className="text-xl text-[#587867] font-semibold">/ 5.0</span>
            </div>

            {/* 5 Stars display */}
            <div className="flex items-center gap-1.5 my-3" aria-label="Rating 4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#e5b342] fill-[#e5b342]"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm font-bold text-[#1a3828]">
                {BUSINESS_CONFIG.reviewCount} Verified Reviews
              </span>
            </div>

            <p className="text-xs text-[#527060] leading-relaxed border-t border-[#edf2ee] pt-3 mt-3">
              Independent verified customer reviews across property-care, cleaning, and maintenance requirements in London.
            </p>
          </div>

          {/* Core Trust Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#d6e3db] shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#1e4431]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162f22]">Professional Approach</h4>
                  <p className="text-xs text-[#4b6b59] mt-1 leading-relaxed">
                    Clear, organised communication and disciplined attention to property care standards.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#d6e3db] shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#1e4431]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162f22]">Property-Focused</h4>
                  <p className="text-xs text-[#4b6b59] mt-1 leading-relaxed">
                    Services structured around keeping homes and managed properties well-maintained and presented.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#d6e3db] shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#1e4431]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162f22]">London Based</h4>
                  <p className="text-xs text-[#4b6b59] mt-1 leading-relaxed">
                    Located in {BUSINESS_CONFIG.location}. Direct line: {BUSINESS_CONFIG.phone}.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#d6e3db] shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#1e4431]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#162f22]">Straightforward Enquiries</h4>
                  <p className="text-xs text-[#4b6b59] mt-1 leading-relaxed">
                    Direct phone consultation and prompt online enquiry options to discuss your specific scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
