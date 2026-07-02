import Image from 'next/image';

interface HeroImageProps {
  className?: string;
}

export default function HeroImage({ className = '' }: HeroImageProps) {
  return (
    // Added text-center and mx-auto to guarantee horizontal centering in all layouts
    <div className={`flex justify-center items-center w-full mx-auto ${className}`}>
      <Image
        src="/hero/hero_image.png"
        alt="Logo"
        width={600}
        height={426}
        // Force block rendering with margin-auto tracking to prevent parent flex alignment distortion
        className="block mx-auto w-full h-auto max-w-[75%] lg:max-w-[50%] aspect-[600/426] object-contain"
      />
    </div>
  );
}