import Image from 'next/image';

interface ExpoSectionProps {
  title: string;
  description: string;
}

export default function ExpoSection({ title, description }: ExpoSectionProps) {
  return (
    <section className='bg-[#1E222D] flex items-center justify-center px-7'>
      <div className="relative md:w-[75vw] min-h-[30vh] flex items-center justify-center overflow-hidden">
                
        {/* Background Graphic Image Layer - Anchored to the bottom */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/expo_section.png"
            alt="Background graphics"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom opacity-80" 
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 md:w-[75vw] w-full flex flex-col gap-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}
