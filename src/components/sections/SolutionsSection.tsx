import FeatureCard, { FeatureItem } from '../shared/FeatureCard'; // Adjust path based on your file tree

interface SolutionsSectionProps {
  heading: string;
  description: string;
  features: FeatureItem[];
}

export default function SolutionsSection({ heading, description, features }: SolutionsSectionProps) {
  return (
    <section className="bg-white p-7 my-10 w-full">
      {/* Header Container */}
      <div className="md:max-w-[75vw] mx-auto mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E222D] tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Responsive Grid Container */}
      <div className="md:max-w-[75vw] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
