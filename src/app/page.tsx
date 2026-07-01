"use client";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServiceSection";
import HeroSection from "@/components/sections/HeroSection";
import ExpoSection from "@/components/sections/ExpoSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {

  
  const features = [
    { id: 1, title: 'ERP', iconUrl: '/icons/erp.svg' },
    { id: 2, title: 'Operations Management', iconUrl: '/icons/operations.svg' },
    { id: 3, title: 'Financial Management', iconUrl: '/icons/finance.svg' },
    { id: 4, title: 'Supply Chain Management', iconUrl: '/icons/supply.svg' },
    { id: 5, title: 'Fleet Management', iconUrl: '/icons/fleet.svg' },
    { id: 6, title: 'Content Management', iconUrl: '/icons/content.svg' },
    { id: 7, title: 'Data Analysis', iconUrl: '/icons/data.svg' },
    { id: 8, title: 'Project Management', iconUrl: '/icons/project.svg' },
    { id: 9, title: 'Asset Management', iconUrl: '/icons/asset.svg' },
    { id: 10, title: 'E-commerce', iconUrl: '/icons/ecommerce.svg' },
  ];

  const industryFeatures = [
  { id: '1', title: 'Health Care', iconUrl: '/icons/healthcare.svg' },
  { id: '2', title: 'Banking', iconUrl: '/icons/banking.svg' },
  { id: '3', title: 'Insurance', iconUrl: '/icons/insurance.svg' },
  { id: '4', title: 'Lending', iconUrl: '/icons/lending.svg' },
  { id: '5', title: 'Investment', iconUrl: '/icons/investment.svg' },
  { id: '6', title: 'Retail', iconUrl: '/icons/retail.svg' },
  { id: '7', title: 'Manufacturing', iconUrl: '/icons/manufacturing.svg' },
  { id: '8', title: 'Professional Services', iconUrl: '/icons/professional-services.svg' },
  { id: '9', title: 'Oil and Gas', iconUrl: '/icons/oil-gas.svg' },
  { id: '10', title: 'Telecoms', iconUrl: '/icons/telecoms.svg' },
];


  return (
    <>
      <Header/>
      <main className="min-h-screen ">

        <HeroSection/>

        <ServicesSection/>
        
        <AboutSection/>

        <ExpoSection title="We are Development Experts" description="Seamlessly actualize client-based users after out of the box value. Globally embrace strategic data through frictionless expertise."/> 
          

        <SolutionsSection
          heading="Solutions We Deliver"
          description="We IT-enable all kinds of B2B, B2C interactions and internal operations."
          features={features}
        />

        <SolutionsSection
          heading="Our Industry Expertise"
          description="We IT-enable all kinds of B2B, B2C interactions and internal operations."
          features={industryFeatures}
        />
          

        <ExpoSection title="Contact Us" description="Seamlessly actualize client-based users after out of the box value. Globally embrace strategic data through frictionless expertise."/> 

        <ContactSection/>
      
      </main>

      <Footer/>
    </>
  );
}