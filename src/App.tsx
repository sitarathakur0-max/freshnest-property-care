/**
 * FreshNest Property Care - Master Multi-Page Application
 * Verified Business Information:
 * Name: FreshNest Property Care
 * Phone: +44 808 135 1594
 * Location: London N1 7GU
 * Rating: 4.9 / 5 (493 Reviews)
 */

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from './config/business';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PropertyCarePage } from './pages/PropertyCarePage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<string>('Cleaning');

  // Handle URL hash changes for direct linking & back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'property-care',
        'reviews',
        'faq',
        'contact',
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    // Initial check on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update SEO metadata and document title dynamically per page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'FreshNest Property Care | Property Services in London',
      about: 'About FreshNest Property Care | Professional London Property Services',
      services: 'Property Care Services | FreshNest Property Care London',
      'property-care': 'Property Care Approach | FreshNest Property Care London',
      reviews: 'Customer Reviews & Rating | FreshNest Property Care',
      faq: 'Frequently Asked Questions | FreshNest Property Care',
      contact: 'Contact FreshNest Property Care | London N1 7GU',
    };

    const descriptions: Record<PageId, string> = {
      home: 'FreshNest Property Care in London N1 7GU. Explore property-care services and contact FreshNest Property Care on +44 808 135 1594.',
      about: 'Learn about FreshNest Property Care in London N1 7GU. Dependable property care, cleaning, and maintenance services.',
      services: 'Explore property cleaning, deep cleaning, maintenance, and tenancy care services from FreshNest Property Care in London.',
      'property-care': 'Discover our dedicated approach to keeping properties clean, presentable, and well-maintained in London.',
      reviews: 'Verified 4.9 rating across 493 reviews for FreshNest Property Care in London N1 7GU.',
      faq: 'Find answers to common questions about FreshNest Property Care services, location in London N1 7GU, and pricing enquiries.',
      contact: 'Contact FreshNest Property Care on +44 808 135 1594 or submit an online service enquiry for property care in London.',
    };

    document.title = titles[currentPage] || titles.home;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        );
      case 'property-care':
        return <PropertyCarePage onNavigate={handleNavigate} />;
      case 'reviews':
        return <ReviewsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage selectedService={selectedService} />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcf9] text-[#1f2923] selection:bg-[#234b37] selection:text-white">
      {/* Accessible skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#183929] focus:text-white focus:rounded-md focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Floating Direct Call Action */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <a
          id="floating-mobile-call-btn"
          href={BUSINESS_CONFIG.phoneHref}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#183929] text-white font-bold text-sm shadow-xl border border-[#2a5940] active:scale-95 transition-transform"
          aria-label="Call FreshNest Property Care on +44 808 135 1594"
        >
          <Phone className="w-4 h-4 text-[#e5b342]" />
          <span>Call FreshNest</span>
        </a>
      </div>
    </div>
  );
}
