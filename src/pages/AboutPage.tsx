import React from 'react';
import { Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from '../components/Header';
import { PropertyVisual } from '../components/PropertyVisual';
import { TrustSection } from '../components/TrustSection';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e7efe9] text-[#1b3e2d] text-xs font-extrabold uppercase tracking-widest border border-[#cadad0]">
              <span>About FreshNest Property Care</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
              Property Care With a Professional Approach
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#3c594a] leading-relaxed">
              <p>
                FreshNest Property Care is built on a clear commitment to dependable property presentation, structured upkeep, and attentive communication for London properties.
              </p>
              <p className="text-sm sm:text-base text-[#4d6b5b]">
                Whether maintaining a residential home, managing an apartment turnover, or addressing routine property requirements, our approach centres on high standards of care, visual order, and making every enquiry straightforward and transparent.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#1d3d2c]">
              <div className="flex items-center gap-2 bg-[#f0f5f1] px-3.5 py-2 rounded-lg border border-[#d6e3db]">
                <MapPin className="w-4 h-4 text-[#3c6b51]" />
                <span>Based in {BUSINESS_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f0f5f1] px-3.5 py-2 rounded-lg border border-[#d6e3db]">
                <Phone className="w-4 h-4 text-[#e5b342]" />
                <a href={BUSINESS_CONFIG.phoneHref} className="font-semibold hover:underline">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                id="about-call-cta"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" />
                <span>Call FreshNest ({BUSINESS_CONFIG.phone})</span>
              </a>

              <button
                id="about-enquire-cta"
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#eff4f0] text-[#1a3828] font-bold text-sm border border-[#cad9cf] transition-colors cursor-pointer"
              >
                <span>Submit Service Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#3c6950]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#cadad0] bg-[#eef3f0]">
              <PropertyVisual
                type="london"
                className="w-full aspect-4/3"
                badgeText="London N1 Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Trust Section */}
      <TrustSection />

      {/* Core Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
            Our Focus
          </span>
          <h2 className="text-3xl font-extrabold text-[#142e20] font-heading tracking-tight">
            Key Principles of FreshNest Property Care
          </h2>
          <p className="text-sm text-[#4b6b59]">
            Disciplined standards shaping every property-care interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#d6e3db] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#1e4431]" />
            </div>
            <h3 className="text-xl font-bold text-[#162f22] font-heading">
              Attention to Detail
            </h3>
            <p className="text-sm text-[#4b6b59] leading-relaxed">
              Properties require methodical care. From clean surfaces and orderly communal spaces to thorough handover preparation, detail is what defines a truly cared-for environment.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#d6e3db] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#1e4431]" />
            </div>
            <h3 className="text-xl font-bold text-[#162f22] font-heading">
              Dependable Communication
            </h3>
            <p className="text-sm text-[#4b6b59] leading-relaxed">
              We make it easy to contact us, ask questions, explain property requirements, and receive clear answers about scheduling, availability, and pricing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#d6e3db] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#1e4431]" />
            </div>
            <h3 className="text-xl font-bold text-[#162f22] font-heading">
              Property-First Orientation
            </h3>
            <p className="text-sm text-[#4b6b59] leading-relaxed">
              Our service structures are designed specifically around the realities of maintaining homes and property assets in London, rather than treating property care as generic cleaning.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#d6e3db] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#eaf3ed] text-[#1e4431] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#1e4431]" />
            </div>
            <h3 className="text-xl font-bold text-[#162f22] font-heading">
              Straightforward Enquiries
            </h3>
            <p className="text-sm text-[#4b6b59] leading-relaxed">
              No complicated hoops or opaque processes. Speak directly with us on +44 808 135 1594 or submit your enquiry online for review.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#142e20] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#234b37]">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold font-heading">
              Speak Directly with FreshNest Property Care
            </h2>
            <p className="text-xs sm:text-sm text-[#b8d1c2]">
              Located in {BUSINESS_CONFIG.location}. Direct assistance for all property care enquiries.
            </p>
          </div>
          <a
            id="about-bottom-call-btn"
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#29543e] hover:bg-[#346a4e] text-white font-bold text-sm transition-colors border border-[#3e7859]"
          >
            <Phone className="w-4 h-4 text-[#e5b342]" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
