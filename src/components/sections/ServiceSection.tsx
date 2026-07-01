import React from 'react';
import ServiceCard from '../shared/ServiceCard';

// Core structural icon imports handled right inside the component bundle
import { RiSmartphoneFill } from 'react-icons/ri'; 
import { BiGlobe } from 'react-icons/bi';
import { HiSquare3Stack3D } from 'react-icons/hi2';

export default function ServicesSection() {
  const servicesData = [
    {
      id: 1,
      icon: RiSmartphoneFill,
      title: 'Mobile App Development',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
    },
    {
      id: 2,
      icon: BiGlobe,
      title: 'Web Development',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
    },
    {
      id: 3,
      icon: HiSquare3Stack3D,
      title: 'Software Development',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
    }
  ];

  return (
    <section className="bg-white">
      <div className="w-full bg-white py-24 px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* Header Block Section */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-[#1E222D] text-[clamp(2rem,4vw,2.5rem)] font-bold tracking-tight">
            Core Services We Provide
          </h2>
        </div>

        {/* Responsive Flex Content Matrix Box */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-8 w-full">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
