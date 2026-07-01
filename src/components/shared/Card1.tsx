import React from 'react';

interface ServiceCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-neutral-100/50 w-full max-w-[360px] min-h-[340px] justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
      
      {/* Icon Wrapper styled with your precise palette hex code */}
      <div className="text-[#D26C66] mb-6  p-4 rounded-2xl">
        <Icon className="w-12 h-12 " />
      </div>

      {/* Title */}
      <h3 className="text-[#1E222D] font-bold text-xl mb-4 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#636464] text-sm leading-[24px] tracking-wide">
        {description}
      </p>
    </div>
  );
}
