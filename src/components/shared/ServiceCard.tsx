import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  imageSrc: string; // Changed from Icon component to string path
  title: string;
  description: string;
}

export default function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-200/60 w-full max-w-[360px] min-h-[340px] justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-gray-300/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
      
      {/* Image Wrapper */}
      <div className="mb-6 relative w-12 h-12">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-contain"
        />
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
