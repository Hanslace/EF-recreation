import Image from 'next/image';

export interface FeatureItem {
  id: string | number;
  title: string;
  iconUrl: string;
}

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    // CHANGED: Replaced 'border-neutral-100/40' with a solid, visible default border 'border-gray-200/60'
    <div className="bg-[#FAFAFA] rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-200/60 p-10 flex flex-col items-center justify-center text-center aspect-square w-full max-w-[280px] mx-auto transition-all duration-300 hover:-translate-y-1 hover:border-gray-300/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group">
      
      {/* UPDATED: Added structural white circular background container around the icon asset */}
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
        <div className="relative w-10 h-10">
          <Image
            src={feature.iconUrl}
            alt={`${feature.title} icon`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* UPDATED: Increased text sizing and tracked spacing configuration for visual balance */}
      <h3 className="text-[#1E222D] font-bold text-lg md:text-xl tracking-tight leading-tight max-w-[180px]">
        {feature.title}
      </h3>
    </div>
  );
}
