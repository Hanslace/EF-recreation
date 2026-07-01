import Image from 'next/image';

interface ExpoSectionProps {
  title: string;
  description: string;
}

export default function ExpoSection({ title, description }: ExpoSectionProps) {
  return (
    <section className="relative bg-[#1E222D] min-h-[300px]  flex items-center overflow-hidden py-16 px-6 md:px-12 lg:px-24">
      {/* Background Graphic Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/expo_section.png"
          alt="Background graphics"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right md:object-center opacity-80"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[65vw] mx-auto w-full flex flex-col gap-4 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
     
            {title}

        </h2>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
          {description}
        </p>

       
      </div>
    </section>
  );
}
