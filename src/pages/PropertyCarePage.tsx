import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building2, Home } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from '../components/Header';
import { PropertyVisual } from '../components/PropertyVisual';

interface PropertyCarePageProps {
  onNavigate: (page: PageId) => void;
}

export const PropertyCarePage: React.FC<PropertyCarePageProps> = ({ onNavigate }) => {
  return (
    <div id="property-care-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
              The FreshNest Standard
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
              Keeping Properties Looking Their Best
            </h1>
            <p className="text-base sm:text-lg text-[#3f5d4e] leading-relaxed">
              Property care goes beyond basic cleaning. It is about preserving the atmosphere, functionality, and immaculate presentation of living and managed spaces through consistent attention to detail.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="property-care-hero-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" />
                <span>Call FreshNest: {BUSINESS_CONFIG.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#eff4f0] text-[#1a3828] font-bold text-sm border border-[#cad9cf] transition-colors cursor-pointer"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#3d6952]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#cadad0] bg-[#eef3f0]">
              <PropertyVisual
                type="tenancy"
                className="w-full aspect-4/3"
                badgeText="Property Care Inspiration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Cleaning to General Upkeep */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#d6e3db] p-8 sm:p-12 lg:p-16 shadow-xs space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
              Comprehensive Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#142e20] font-heading tracking-tight">
              From Cleaning to General Upkeep
            </h2>
            <p className="text-sm sm:text-base text-[#466353] leading-relaxed">
              Property-care needs can vary significantly depending on the nature of the property, its occupancy cycle, and its ongoing requirements. FreshNest Property Care provides a flexible framework that adapts to your property:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e2eae4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e5efe9] text-[#1d3d2c] flex items-center justify-center font-bold">
                <Home className="w-5 h-5 text-[#1d3d2c]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Residential Homes & Flats
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Routine upkeep, deep cleaning, and seasonal property care to keep personal living spaces fresh, organised, and maintained.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e2eae4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e5efe9] text-[#1d3d2c] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5 text-[#1d3d2c]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Managed & Rental Properties
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                End-of-tenancy handover cleaning, tenant transition preparation, and routine property inspection readiness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e2eae4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#e5efe9] text-[#1d3d2c] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#1d3d2c]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Presentation Refreshes
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Detailed surface treatment, sanitary polishing, and visual presentation focus for viewings or special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Simple Enquiry Process (Visual 3-Step Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#142e21] text-white p-8 sm:p-12 lg:p-16 border border-[#234b37]">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e5b342]">
              Transparent & Simple
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              A Simple Enquiry Process
            </h2>
            <p className="text-sm text-[#b8d1c2]">
              How we receive, review, and progress property-care enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-6 rounded-2xl bg-[#193a2a] border border-[#2b543d] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-base flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                1. Tell Us What You Need
              </h3>
              <p className="text-xs sm:text-sm text-[#bad1c3] leading-relaxed">
                Visitor explains the property-care requirement. You can submit our online enquiry form with your property type and requirements or call directly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#193a2a] border border-[#2b543d] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-base flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                2. Discuss the Requirement
              </h3>
              <p className="text-xs sm:text-sm text-[#bad1c3] leading-relaxed">
                FreshNest can review the enquiry, clarify property specifics, discuss timing, and ensure requirements are fully understood.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#193a2a] border border-[#2b543d] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-base flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                3. Arrange the Next Step
              </h3>
              <p className="text-xs sm:text-sm text-[#bad1c3] leading-relaxed">
                The visitor can contact the business to discuss availability, scope and current pricing for the property care service.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#234b37] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#b8d1c2]">
              Call FreshNest Property Care in {BUSINESS_CONFIG.location}: <strong className="text-white">{BUSINESS_CONFIG.phone}</strong>
            </div>
            <a
              id="property-care-flow-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#27533c] hover:bg-[#31664a] text-white font-bold text-sm transition-colors border border-[#3e7859]"
            >
              <Phone className="w-4 h-4 text-[#e5b342]" />
              <span>Call FreshNest ({BUSINESS_CONFIG.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
