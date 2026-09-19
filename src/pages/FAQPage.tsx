import React from 'react';
import { Phone, HelpCircle, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from '../components/Header';
import { FAQAccordion } from '../components/FAQAccordion';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  return (
    <div id="faq-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* FAQ Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e7efe9] text-[#1b3e2d] text-xs font-extrabold uppercase tracking-widest border border-[#cadad0]">
            <HelpCircle className="w-4 h-4 text-[#244b37]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-[#3f5d4e] leading-relaxed">
            Find factual, verified answers regarding FreshNest Property Care services, location in {BUSINESS_CONFIG.location}, and how to contact us.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              id="faq-header-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#e5b342]" />
              <span>Call Direct: {BUSINESS_CONFIG.phone}</span>
            </a>
            <span className="text-xs text-[#527060]">
              Location: {BUSINESS_CONFIG.location}
            </span>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-3xl bg-white border border-[#d6e3db] p-8 sm:p-10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="text-xl font-bold text-[#142e20] font-heading">
              Have a Question Not Listed Here?
            </h2>
            <p className="text-xs sm:text-sm text-[#4b6b59]">
              Contact FreshNest Property Care directly to discuss any property-specific questions or availability.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="faq-box-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#e5b342]" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#f0f5f1] hover:bg-[#e4ede6] text-[#183929] font-bold text-xs sm:text-sm transition-colors border border-[#cadad0] cursor-pointer"
            >
              <span>Enquire Online</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38654c]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
