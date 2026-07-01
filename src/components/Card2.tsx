import React from 'react';

interface FeatureCardProps {
  // Accepts a React component class/function for the icon
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
}

export default function FeatureCard({ Icon, title }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white aspect-square w-full max-w-[240px] p-6 rounded-2xl shadow-md border border-neutral-50/50 hover:shadow-lg transition-shadow duration-300">
      
      {/* Soft circular background container for the icon */}
      <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
        <div className="text-[#1E222D]">
          <Icon className="w-10 h-10" />
        </div>
      </div>

      {/* Main Title heading matching your exact target color */}
      <h3 className="text-[#1E222D] font-semibold text-base tracking-wide uppercase">
        {title}
      </h3>
      
    </div>
  );
}
