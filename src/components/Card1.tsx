import React from 'react';

interface ServiceCardProps {
  // Accepts a React component class or function for the icon
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm border border-neutral-100 max-w-sm">
      {/* Icon Wrapper matches your exact image color theme */}
      <div className="text-[#D26C66] mb-5">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>

      {/* Main Title heading */}
      <h3 className="text-[#1E222D] font-bold text-xl mb-3 tracking-tight">
        {title}
      </h3>

      {/* Paragraph body with line-height balancing */}
      <p className="text-neutral-500 text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
}
