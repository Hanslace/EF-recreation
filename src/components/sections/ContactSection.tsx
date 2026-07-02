import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css'; 
import ServiceCard from '../shared/ServiceCard'; 
import { Mail, MapPin, CheckCircle, X } from 'lucide-react'; 

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    }
  });

  const [showToast, setShowToast] = useState(false);

  const onSubmitHandler = (data: ContactFormInputs) => {
    console.log('Validated Form Payload Data:', data);
    setShowToast(true);
    reset();
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section className="bg-white relative">
      {/* Floating Success Notification Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-xl max-w-md animate-in slide-in-from-top-4 duration-300 transition-all">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
          <p className="text-sm font-medium">Message sent successfully! We will contact you shortly.</p>
          <button type="button" onClick={() => setShowToast(false)} className="p-1 hover:bg-black/5 rounded-md ml-auto transition-colors">
            <X className="w-4 h-4 text-gray-500 hover:text-black" />
          </button>
        </div>
      )}

      <div className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Form Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E222D] tracking-tight mb-3">
              Talk to Our Team
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via standardized infrastructures.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmitHandler)} noValidate className="flex flex-col gap-4 mt-2">
            
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">First name <span className="text-[#D26C66]">*</span></label>
                <input 
                  type="text" 
                  placeholder="First name" 
                  {...register('firstName', { required: 'First name is required' })}
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm bg-white focus:outline-none text-[#1E222D] transition-colors ${
                    errors.firstName ? 'border-rose-400 focus:border-rose-500' : 'border-gray-200 focus:border-gray-400'
                  }`} 
                />
                {errors.firstName && <span className="text-xs text-rose-500 font-medium">{errors.firstName.message}</span>}
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Last name</label>
                <input 
                  type="text" 
                  placeholder="Last name" 
                  {...register('lastName')}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-gray-400 text-[#1E222D]" 
                />
              </div>
            </div>

            {/* Row 2: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone field integrated with international selector dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Phone <span className="text-[#D26C66]">*</span></label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ 
                    required: 'Phone number is required',
                    validate: (value) => value.length > 8 || 'Enter a valid phone number'
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      defaultCountry="pk"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter phone number"
                      className="w-full flex animate-none"
                      // FIXED: Used direct flat API strings to clear the TS compiler type validation checks
                      inputClassName={`!w-full !h-[42px] !px-4 !py-2.5 !border !rounded-r-lg !text-sm !bg-white !focus:outline-none !text-[#1E222D] !transition-colors ${
                        errors.phone ? '!border-rose-400' : '!border-gray-200'
                      }`}
                      countrySelectorStyleProps={{
                        buttonClassName: `!h-[42px] !border !rounded-l-lg ${
                          errors.phone ? '!border-rose-400' : '!border-gray-200'
                        }`
                      }}
                    />
                  )}
                />
                {errors.phone && <span className="text-xs text-rose-500 font-medium">{errors.phone.message}</span>}
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-600">Email <span className="text-[#D26C66]">*</span></label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  {...register('email', { 
                    required: 'Email address is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email format'
                    }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm bg-white focus:outline-none text-[#1E222D] transition-colors ${
                    errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-gray-200 focus:border-gray-400'
                  }`} 
                />
                {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email.message}</span>}
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600">Message <span className="text-[#D26C66]">*</span></label>
              <textarea 
                rows={5} 
                placeholder="How can we help you?" 
                {...register('message', { required: 'Please type a brief message' })}
                className={`w-full px-4 py-2.5 border rounded-lg text-sm bg-white focus:outline-none text-[#1E222D] resize-none transition-colors ${
                  errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-gray-200 focus:border-gray-400'
                }`}
              ></textarea>
              {errors.message && <span className="text-xs text-rose-500 font-medium">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full sm:w-fit px-8 py-2.5 bg-[#D26C66] hover:bg-[#c25e55] text-white text-sm font-medium rounded-md transition-colors duration-200 mt-2">
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Cards Stack using Lucide Icons */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full justify-center items-center">
        {/* Email Instance: Opens default email client (or Gmail) pre-addressed */}
        <a 
            href="mailto:info@easyfringe.com"
         className="w-full max-w-[360px] block transition-transform active:scale-[0.98]"
        >
            <ServiceCard 
                Icon={Mail}
                title="Email Us"
                description="Simple drop us an email at hellothemetags@gmail.com and you'll receive a reply within 24 hours."
                />
        </a>

        <a 
            href="https://maps.app.goo.gl/8YCM2JBaBDARS9g37"
            
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-[360px] block transition-transform active:scale-[0.98]"
        >
            <ServiceCard 
            Icon={MapPin}
            title="Address"
            description="Office 401, Building 1-C, Street 5, Zulfiqar Commercial, D.H.A. Phase- VIII, Karachi, Pakistan."
            />
        </a>
        </div>

            
      </div>
    </section>
  );
}
