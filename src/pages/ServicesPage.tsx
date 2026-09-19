import React from 'react';
import { Phone, ArrowRight, Check, HelpCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG, ServiceCategory } from '../config/business';
import { PageId } from '../components/Header';
import { PropertyVisual } from '../components/PropertyVisual';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const getVisualType = (id: string): 'cleaning' | 'maintenance' | 'deepclean' | 'tenancy' | 'upkeep' | 'refresh' => {
    switch (id) {
      case 'property-cleaning':
        return 'cleaning';
      case 'property-maintenance':
        return 'maintenance';
      case 'deep-cleaning':
        return 'deepclean';
      case 'end-of-tenancy':
        return 'tenancy';
      case 'general-upkeep':
        return 'upkeep';
      case 'property-refresh':
      default:
        return 'refresh';
    }
  };

  const handleEnquireService = (service: ServiceCategory) => {
    onSelectService(service.title);
    onNavigate('contact');
  };

  return (
    <div id="services-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550] bg-[#e7efe9] px-3 py-1 rounded-md">
            Property Care Menu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
            Property-Care Services
          </h1>
          <p className="text-base sm:text-lg text-[#3f5d4e] leading-relaxed">
            FreshNest Property Care provides structured property-care categories designed to keep residential and managed spaces clean, presentable, and well-maintained in London.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              id="services-header-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#e5b342]" />
              <span>Call to Discuss: {BUSINESS_CONFIG.phone}</span>
            </a>
            <span className="text-xs text-[#527060]">
              Location: {BUSINESS_CONFIG.location} · 4.9 ★ Verified Rating
            </span>
          </div>
        </div>
      </section>

      {/* Services Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {BUSINESS_CONFIG.services.map((service, index) => {
            const isReversed = index % 2 === 1;
            const visualType = getVisualType(service.id);

            return (
              <div
                key={service.id}
                id={`detailed-service-${service.id}`}
                className="rounded-3xl bg-white border border-[#d6e3db] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden bg-[#eef3f0] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <PropertyVisual
                      type={visualType}
                      className="w-full h-full"
                      badgeText="Service Example"
                    />
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#4c735d] uppercase tracking-wider">
                        Category 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#142e20] font-heading">
                        {service.title}
                      </h2>
                      <p className="text-sm font-semibold text-[#294c38]">
                        {service.shortDescription}
                      </p>
                    </div>

                    <p className="text-sm text-[#446252] leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1e3c2c]">
                        Service Focus:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#385545]">
                        {service.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#e8f2ec] text-[#1e4431] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#1e4431]" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 border-t border-[#edf2ee] flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleEnquireService(service)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        <span>Contact FreshNest</span>
                        <ArrowRight className="w-4 h-4 text-[#e5b342]" />
                      </button>

                      <a
                        href={BUSINESS_CONFIG.phoneHref}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#f0f5f1] hover:bg-[#e3eee6] text-[#183929] font-bold text-xs sm:text-sm transition-colors border border-[#cadad0]"
                      >
                        <Phone className="w-4 h-4 text-[#e5b342]" />
                        <span>Call {BUSINESS_CONFIG.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scope Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f3f7f4] border border-[#d3e3da] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#e3ede6] text-[#1c422f] flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5 text-[#1c422f]" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-[#436352]">
            <h3 className="font-bold text-[#142e20] text-sm sm:text-base">
              Custom & Combined Property-Care Requirements
            </h3>
            <p className="leading-relaxed">
              Every property has unique needs. If your requirements span cleaning, general maintenance, and handover preparation, please contact FreshNest Property Care directly on{' '}
              <a href={BUSINESS_CONFIG.phoneHref} className="font-semibold text-[#183a29] underline">
                {BUSINESS_CONFIG.phone}
              </a>{' '}
              to discuss tailored scope and current pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
