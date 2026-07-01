import React from 'react';
import ServiceCard from '../shared/Card1'; // Assuming your card component is named ServiceCard.tsx
import { Mail, MapPin } from 'lucide-react'; // Clean modern stroke icons

export default function ContactSection() {
  return (
    <section className="bg-white">
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Form Content */}
      <div className="lg:col-span-7 flex flex-col gap-6 w-full">
        <div>
          {/* HARDCODED CONTENT: Fixed structural content headers */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E222D] tracking-tight mb-3">
            Talk to Our Team
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via standardized infrastructures.
          </p>
        </div>

        <form className="flex flex-col gap-4 mt-2">
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">First name <span className="text-[#D26C66]">*</span></label>
              <input type="text" placeholder="First name" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 text-[#1E222D]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Last name</label>
              <input type="text" placeholder="Last name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 text-[#1E222D]" />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Phone <span className="text-[#D26C66]">*</span></label>
              <input type="tel" placeholder="Phone" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 text-[#1E222D]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Email <span className="text-[#D26C66]">*</span></label>
              <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 text-[#1E222D]" />
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Message <span className="text-[#D26C66]">*</span></label>
            <textarea rows={5} placeholder="How can we help you?" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 resize-none text-[#1E222D]"></textarea>
          </div>

          {/* Submit Button */}
          <button type="button" className="w-full sm:w-fit px-8 py-2.5 bg-[#D26C66] hover:bg-[#c25e55] text-white text-sm font-medium rounded-md transition-colors duration-200 mt-2">
            Submit
          </button>
        </form>
      </div>

      {/* Right Column: Cards Stack using Lucide Icons */}
      <div className="lg:col-span-5 flex flex-col gap-6 w-full justify-center items-center">
        <ServiceCard 
          Icon={Mail}
          title="Email Us"
          description="Simple drop us an email at hellothemetags@gmail.com and you'll receive a reply within 24 hours."
        />
        <ServiceCard 
          Icon={MapPin}
          title="Address"
          description="Office 401, Building 1-C, Street 5, Zulfiqar Commercial, D.H.A. Phase- VIII, Karachi, Pakistan."
        />
      </div>
    </div>
    </section>
  );
}
