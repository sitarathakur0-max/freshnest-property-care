import React from 'react';
import { Phone, ArrowRight, MapPin, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from '../components/Header';
import { PropertyVisual } from '../components/PropertyVisual';
import { TrustSection } from '../components/TrustSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e7efe9] text-[#1b3e2d] text-xs font-extrabold uppercase tracking-widest border border-[#cadad0]">
                <span>FRESHNEST PROPERTY CARE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#132c1f] tracking-tight font-heading leading-[1.08]">
                Professional Care for Your Property
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#3b5547] leading-relaxed max-w-xl">
                Dependable property-care services in London, focused on thorough presentation, attentive upkeep, and straightforward communication for homeowners, landlords, and property managers.
              </p>

              {/* Verified Location & Phone Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-semibold text-[#1d3d2c]">
                <div className="flex items-center gap-2 bg-[#f0f5f1] px-3.5 py-2 rounded-lg border border-[#d6e3db]">
                  <MapPin className="w-4 h-4 text-[#3c6b51]" />
                  <span>{BUSINESS_CONFIG.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f0f5f1] px-3.5 py-2 rounded-lg border border-[#d6e3db]">
                  <Phone className="w-4 h-4 text-[#e5b342]" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="hero-primary-call-cta"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-base shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#183929]"
                >
                  <Phone className="w-5 h-5 text-[#e5b342]" />
                  <span>Call FreshNest</span>
                </a>

                <button
                  id="hero-secondary-explore-cta"
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#eff4f0] text-[#1a3828] font-bold text-base border border-[#cad9cf] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a3828]"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#3c6950]" />
                </button>
              </div>

              {/* Quick Trust Marker */}
              <div className="pt-2 flex items-center gap-3 text-xs text-[#527060]">
                <div className="flex items-center text-[#e5b342]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e5b342]" />
                  ))}
                </div>
                <span className="font-semibold text-[#183727]">
                  {BUSINESS_CONFIG.rating} / 5 Rating from {BUSINESS_CONFIG.reviewCount} Verified Reviews
                </span>
              </div>
            </div>

            {/* Right Visual: Large Property-Related Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#cadad0] bg-[#eef3f0]">
                <PropertyVisual
                  type="hero"
                  className="w-full aspect-4/3 sm:aspect-16/10"
                  badgeText="Property Care Inspiration"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED TRUST SECTION */}
      <TrustSection variant="full" />

      {/* 3. SERVICE CATEGORY OVERVIEW */}
      <section id="service-overview-section" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
              Service Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142e20] font-heading tracking-tight">
              Property-Care Categories
            </h2>
            <p className="text-sm sm:text-base text-[#496556] leading-relaxed">
              Explore broad service areas for property upkeep, cleaning, and presentation. Contact FreshNest directly to discuss your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_CONFIG.services.map((service) => {
              const visualType =
                service.id === 'property-cleaning'
                  ? 'cleaning'
                  : service.id === 'property-maintenance'
                  ? 'maintenance'
                  : service.id === 'deep-cleaning'
                  ? 'deepclean'
                  : service.id === 'end-of-tenancy'
                  ? 'tenancy'
                  : service.id === 'general-upkeep'
                  ? 'upkeep'
                  : 'refresh';

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="group rounded-2xl bg-white border border-[#d6e3db] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#edf3ef]">
                    <PropertyVisual
                      type={visualType}
                      className="w-full h-full transition-transform duration-300 group-hover:scale-102"
                      badgeText="Service Example"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#142e20] font-heading group-hover:text-[#234b37] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#476354] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#edf2ee] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectService(service.id);
                          onNavigate('services');
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e4431] hover:text-[#11281d] cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#3d6952]" />
                      </button>

                      <a
                        href={BUSINESS_CONFIG.phoneHref}
                        className="text-xs font-bold text-[#557665] hover:text-[#1b3d2d] flex items-center gap-1"
                        aria-label={`Enquire about ${service.title} on ${BUSINESS_CONFIG.phone}`}
                      >
                        <Phone className="w-3 h-3 text-[#e5b342]" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              id="view-all-services-btn"
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm transition-colors cursor-pointer shadow-xs"
            >
              <span>View All Property-Care Services</span>
              <ArrowRight className="w-4 h-4 text-[#e5b342]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE FRESHNEST SECTION */}
      <section id="why-choose-section" className="py-12 sm:py-16 bg-[#f7f9f7] border-y border-[#e2eae4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
              FreshNest Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142e20] font-heading tracking-tight">
              Why Choose FreshNest
            </h2>
            <p className="text-sm sm:text-base text-[#496556] leading-relaxed">
              Dependable property care built around practical standards, professional communication, and respect for the properties we look after.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#d6e3db] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e7efe9] text-[#1b3d2d] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#1b3d2d]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Professional Approach
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Clear, organised communication and dependable processes for scheduling and discussing property-care requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#d6e3db] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e7efe9] text-[#1b3d2d] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#1b3d2d]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Property-Focused
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Designed specifically around the needs of maintaining, refreshing, and caring for residential and managed properties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#d6e3db] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e7efe9] text-[#1b3d2d] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#1b3d2d]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Straightforward Enquiries
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Make it easy to explain what needs attention, with direct telephone consultation and prompt response to submitted details.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#d6e3db] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e7efe9] text-[#1b3d2d] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#1b3d2d]" />
              </div>
              <h3 className="text-lg font-bold text-[#142e20] font-heading">
                Clean Presentation
              </h3>
              <p className="text-xs sm:text-sm text-[#4b6b59] leading-relaxed">
                Focus on keeping properties looking cared for, presentable, and ready for occupants, guests, or owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIMPLE ENQUIRY PROCESS FLOW */}
      <section id="process-flow-section" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#142e21] text-white p-8 sm:p-12 lg:p-16 border border-[#234b37]">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e5b342]">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-2">
                A Simple Property-Care Enquiry Process
              </h2>
              <p className="text-sm sm:text-base text-[#bad1c4] mt-2">
                Three straightforward steps to arrange care and maintenance for your property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 bg-[#193a2a] p-6 rounded-xl border border-[#2b543d]">
                <div className="w-8 h-8 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-sm flex items-center justify-center">
                  1
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  1. Tell Us What You Need
                </h3>
                <p className="text-xs sm:text-sm text-[#b5cdbf] leading-relaxed">
                  Explain the property-care requirement, whether cleaning, general maintenance, end-of-tenancy preparation, or routine upkeep.
                </p>
              </div>

              <div className="space-y-3 bg-[#193a2a] p-6 rounded-xl border border-[#2b543d]">
                <div className="w-8 h-8 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-sm flex items-center justify-center">
                  2
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  2. Discuss the Requirement
                </h3>
                <p className="text-xs sm:text-sm text-[#b5cdbf] leading-relaxed">
                  FreshNest can review the enquiry, clarify scope, and confirm property details.
                </p>
              </div>

              <div className="space-y-3 bg-[#193a2a] p-6 rounded-xl border border-[#2b543d]">
                <div className="w-8 h-8 rounded-full bg-[#27533c] text-[#e5b342] font-bold text-sm flex items-center justify-center">
                  3
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  3. Arrange the Next Step
                </h3>
                <p className="text-xs sm:text-sm text-[#b5cdbf] leading-relaxed">
                  Contact the business to discuss availability, scope, and current pricing for your property.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#234b37] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-[#bad1c4]">
                Direct line for property-care enquiries: <strong className="text-white">{BUSINESS_CONFIG.phone}</strong>
              </div>
              <a
                id="process-call-now-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#27533c] hover:bg-[#31664a] text-white font-bold text-sm transition-colors border border-[#3e7859]"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" />
                <span>Call FreshNest Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / ENQUIRY BANNER */}
      <section id="cta-banner-section" className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-[#cad9cf] p-8 sm:p-12 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142e20] font-heading">
                Ready to Discuss Your Property Needs?
              </h2>
              <p className="text-sm text-[#496556] leading-relaxed">
                Connect directly with FreshNest Property Care in {BUSINESS_CONFIG.location}. Call {BUSINESS_CONFIG.phone} or send an online enquiry.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                id="cta-banner-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e5b342]" />
                <span>Call FreshNest ({BUSINESS_CONFIG.phone})</span>
              </a>

              <button
                id="cta-banner-enquiry-btn"
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#f0f5f1] hover:bg-[#e4ece6] text-[#1a3828] font-bold text-sm transition-colors border border-[#cfded4] cursor-pointer"
              >
                <span>Submit Service Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#3d6952]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
