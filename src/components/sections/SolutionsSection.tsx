import Image from 'next/image';

// Define the shape of an individual feature card
interface FeatureItem {
  id: string | number;
  title: string;
  iconUrl: string; // Path to your SVG/PNG icon asset
}

// Define the props for the reusable section
interface SolutionsSectionProps {
  heading: string;
  description: string;
  features: FeatureItem[];
}

export default function SolutionsSection({ heading, description, features }: SolutionsSectionProps) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E222D] tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Responsive Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#FAFAFA] border border-gray-100/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/80 group"
          >
            {/* Icon Wrapper */}
            <div className="relative w-12 h-12 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src={feature.iconUrl}
                alt={`${feature.title} icon`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Card Title */}
            <h3 className="text-[#1E222D] font-semibold text-base md:text-lg leading-snug max-w-[200px]">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
