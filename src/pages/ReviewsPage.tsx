import React from 'react';
import { Star, ShieldCheck, Phone, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { PageId } from '../components/Header';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div id="reviews-page" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e7efe9] text-[#1b3e2d] text-xs font-extrabold uppercase tracking-widest border border-[#cadad0]">
            <ShieldCheck className="w-4 h-4 text-[#e5b342]" />
            <span>Verified Customer Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142e20] tracking-tight font-heading leading-tight">
            Trusted by Property-Care Customers
          </h1>

          <p className="text-base sm:text-lg text-[#3f5d4e] leading-relaxed">
            FreshNest Property Care maintains an aggregate verified rating of 4.9 out of 5 across 493 customer reviews in London.
          </p>
        </div>
      </section>

      {/* Prominent Verified Rating Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#d6e3db] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Big Score */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-[#e5eee8] pb-8 lg:pb-0 lg:pr-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3d6550]">
                Verified Aggregate Rating
              </span>

              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-6xl sm:text-7xl font-extrabold text-[#142e20] font-heading">
                  {BUSINESS_CONFIG.rating}
                </span>
                <span className="text-2xl text-[#527060] font-bold">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[#e5b342]" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-[#e5b342]" />
                ))}
              </div>

              <div className="text-lg font-bold text-[#142e20]">
                Based on {BUSINESS_CONFIG.reviewCount} Verified Reviews
              </div>

              <p className="text-xs text-[#527060] leading-relaxed">
                Rating verified across London property-care, cleaning, and maintenance services.
              </p>
            </div>

            {/* Right Verified Trust Standards */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl font-bold text-[#142e20] font-heading">
                Trust & Verification Standards
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#e2eae4] flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#234b37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-[#142e20]">
                      Verified Aggregate Score
                    </div>
                    <p className="text-xs text-[#4b6b59] mt-0.5">
                      The 4.9 rating represents the combined verified aggregate score across 493 customer reviews received for FreshNest Property Care.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#e2eae4] flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#234b37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-[#142e20]">
                      Property-Care Focus
                    </div>
                    <p className="text-xs text-[#4b6b59] mt-0.5">
                      Reviews reflect customer experiences across residential cleaning, property maintenance, and property upkeep requirements in London.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#e2eae4] flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#234b37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-[#142e20]">
                      Commitment to Transparent Communication
                    </div>
                    <p className="text-xs text-[#4b6b59] mt-0.5">
                      We value direct and honest customer relationships. Clients are always encouraged to discuss their experience directly with our management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Review Source Integration Button (Placeholder ready for later connection) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#183929] hover:bg-[#11291d] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#e5b342]" />
                  <span>Submit Feedback or Enquiry</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f0f5f1] hover:bg-[#e4ece6] text-[#183929] font-bold text-xs sm:text-sm transition-colors border border-[#cadad0]"
                >
                  <Phone className="w-4 h-4 text-[#e5b342]" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Review Policy Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f5f8f5] border border-[#d6e3db] text-xs sm:text-sm text-[#456353] leading-relaxed space-y-2">
          <h3 className="font-bold text-[#142e20] text-sm sm:text-base">
            About Our Review Data
          </h3>
          <p>
            FreshNest Property Care adheres strictly to authentic review practices. We display verified aggregate ratings (4.9 / 5 across 493 reviews) without fabricating customer testimonials, names, or quotes. If an official online review platform connection is linked in the future, visitors will be able to browse verified third-party records directly.
          </p>
        </div>
      </section>
    </div>
  );
};
