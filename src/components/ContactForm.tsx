import React, { useState } from 'react';
import { Phone, CheckCircle, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface FormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  serviceRequired: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  serviceRequired?: string;
  message?: string;
}

export const ContactForm: React.FC<{ initialService?: string }> = ({ initialService }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Home',
    serviceRequired: initialService || 'Cleaning',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact telephone number.';
    } else if (!/^[0-9+()\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property category.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service requirement.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your property-care requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters explaining what needs attention.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate orderly client validation & state recording
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: 'Home',
      serviceRequired: 'Cleaning',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        id="enquiry-success-container"
        className="p-8 sm:p-10 rounded-2xl bg-[#f0f6f2] border border-[#c3d9cb] text-[#1a3828] space-y-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#234b37] text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6 text-[#92d6ad]" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-[#142e20]">
              Enquiry Prepared Successfully
            </h3>
            <p className="text-sm text-[#3b5947] mt-1 leading-relaxed">
              Your property-care requirements for{' '}
              <strong className="text-[#142e20]">{formData.propertyType}</strong> ({formData.serviceRequired}) have been validated and compiled.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-[#d2e2d8] space-y-3 text-sm">
          <div className="font-semibold text-[#1a3626] border-b border-[#e5eee8] pb-2">
            Recorded Enquiry Summary:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div>
              <span className="text-[#648473]">Contact Name:</span>{' '}
              <span className="font-medium text-[#163022]">{formData.name}</span>
            </div>
            <div>
              <span className="text-[#648473]">Telephone:</span>{' '}
              <span className="font-medium text-[#163022]">{formData.phone}</span>
            </div>
            <div>
              <span className="text-[#648473]">Email:</span>{' '}
              <span className="font-medium text-[#163022]">{formData.email}</span>
            </div>
            <div>
              <span className="text-[#648473]">Property Category:</span>{' '}
              <span className="font-medium text-[#163022]">{formData.propertyType}</span>
            </div>
          </div>
          <div className="pt-1 text-xs sm:text-sm">
            <span className="text-[#648473]">Service Requirement:</span>{' '}
            <span className="font-medium text-[#163022]">{formData.serviceRequired}</span>
          </div>
          <div className="text-xs sm:text-sm bg-[#f8faf8] p-3 rounded-lg border border-[#e8efe9]">
            <span className="text-[#648473] block mb-1">Enquiry Details:</span>
            <p className="text-[#203a2c] italic">"{formData.message}"</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#1a3a2a] text-white space-y-3">
          <div className="flex items-center gap-2 text-[#e5b342] text-sm font-semibold">
            <Phone className="w-4 h-4" />
            <span>Connect Directly With FreshNest Property Care</span>
          </div>
          <p className="text-xs text-[#b8d1c3] leading-relaxed">
            To discuss availability, specific scope, and current pricing for your property right away, call FreshNest directly on:
          </p>
          <a
            id="success-call-btn"
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2e5e45] hover:bg-[#387254] text-white font-bold text-base transition-colors"
          >
            <Phone className="w-5 h-5 text-[#e5b342]" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        <div className="flex justify-end">
          <button
            id="submit-another-enquiry-btn"
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#294c39] hover:underline cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit another enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="property-enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dde6e0] shadow-xs space-y-6"
    >
      <div className="border-b border-[#e9efe9] pb-4">
        <h3 className="text-xl font-bold text-[#142e20] font-heading">
          Property-Care Service Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#4d6b5a] mt-1">
          Tell us about your property requirement. Contact FreshNest directly on{' '}
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="font-semibold text-[#183a29] underline underline-offset-2"
          >
            {BUSINESS_CONFIG.phone}
          </a>{' '}
          for immediate questions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
            Full Name <span className="text-[#a42828]">*</span>
          </label>
          <input
            type="text"
            id="enquiry-name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Eleanor Vance"
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
              errors.name
                ? 'border-[#a42828] bg-[#fdf4f4] focus:ring-2 focus:ring-[#a42828]'
                : 'border-[#cfdcd3] bg-[#fbfcf9] focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37]'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="flex items-center gap-1 text-xs text-[#a42828] mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
            Contact Telephone <span className="text-[#a42828]">*</span>
          </label>
          <input
            type="tel"
            id="enquiry-phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 07700 900123"
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
              errors.phone
                ? 'border-[#a42828] bg-[#fdf4f4] focus:ring-2 focus:ring-[#a42828]'
                : 'border-[#cfdcd3] bg-[#fbfcf9] focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37]'
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="flex items-center gap-1 text-xs text-[#a42828] mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
            Email Address <span className="text-[#a42828]">*</span>
          </label>
          <input
            type="email"
            id="enquiry-email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
              errors.email
                ? 'border-[#a42828] bg-[#fdf4f4] focus:ring-2 focus:ring-[#a42828]'
                : 'border-[#cfdcd3] bg-[#fbfcf9] focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37]'
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="flex items-center gap-1 text-xs text-[#a42828] mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="enquiry-property-type" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
            Property Type <span className="text-[#a42828]">*</span>
          </label>
          <select
            id="enquiry-property-type"
            name="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-[#cfdcd3] bg-[#fbfcf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37] transition-colors"
          >
            <option value="Home">Home</option>
            <option value="Flat / Apartment">Flat / Apartment</option>
            <option value="Rental Property">Rental Property</option>
            <option value="Commercial Property">Commercial Property</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="enquiry-service-required" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
          Service Category <span className="text-[#a42828]">*</span>
        </label>
        <select
          id="enquiry-service-required"
          name="serviceRequired"
          value={formData.serviceRequired}
          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-[#cfdcd3] bg-[#fbfcf9] text-sm focus:outline-none focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37] transition-colors"
        >
          <option value="Cleaning">Cleaning</option>
          <option value="Property Maintenance">Property Maintenance</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="End-of-Tenancy">End-of-Tenancy</option>
          <option value="General Property Care">General Property Care</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#243e30] mb-1.5">
          Enquiry Details / Property Attention Needed <span className="text-[#a42828]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe the property and what care or maintenance tasks need attention..."
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
            errors.message
              ? 'border-[#a42828] bg-[#fdf4f4] focus:ring-2 focus:ring-[#a42828]'
              : 'border-[#cfdcd3] bg-[#fbfcf9] focus:ring-2 focus:ring-[#234b37] focus:border-[#234b37]'
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="flex items-center gap-1 text-xs text-[#a42828] mt-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          id="submit-enquiry-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#183929] hover:bg-[#11291d] text-white font-bold text-sm transition-colors shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#183929] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Validating Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Service Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#e5b342]" />
            </>
          )}
        </button>

        <span className="text-xs text-[#527060]">
          Or call direct: <a href={BUSINESS_CONFIG.phoneHref} className="font-semibold text-[#183929] hover:underline">{BUSINESS_CONFIG.phone}</a>
        </span>
      </div>
    </form>
  );
};
