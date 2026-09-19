import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_CONFIG } from '../config/business';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq-accordion-list" className="space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all ${
              isOpen
                ? 'bg-white border-[#244b37] shadow-xs'
                : 'bg-[#fbfcf9] border-[#dce6df] hover:border-[#b8cfc1]'
            }`}
          >
            <button
              id={`faq-btn-${item.id}`}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#142f21] focus:outline-none focus:ring-2 focus:ring-[#244b37] rounded-xl cursor-pointer"
            >
              <span className="flex items-center gap-3 pr-4">
                <span className="text-xs font-bold text-[#456e57] w-5">
                  0{index + 1}
                </span>
                <span>{item.question}</span>
              </span>
              <span
                className={`p-1.5 rounded-full transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#e7efe9] text-[#1b3d2d]' : 'text-[#628372]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 pb-5 pt-1 text-sm text-[#385545] leading-relaxed border-t border-[#edf2ee]"
              >
                <p>{item.answer}</p>
                {item.id === 'faq-3' && (
                  <div className="mt-3">
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#183929] text-white text-xs font-semibold hover:bg-[#11281d] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#e5b342]" />
                      <span>Call {BUSINESS_CONFIG.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
