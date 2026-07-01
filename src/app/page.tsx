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
    { id: 1, title: 'ERP', iconUrl: '/solutions/erp (2).png' },
    { id: 2, title: 'Mobile Development', iconUrl: '/solutions/mobile-development.png' },
    { id: 3, title: 'Financial Management', iconUrl: '/solutions/financial-statement (1) 1.png' },
    { id: 4, title: 'Supply Chain Management', iconUrl: '/solutions/supply-chain.png' },
    { id: 5, title: 'Product Management', iconUrl: '/solutions/product-management.png' },
    { id: 6, title: 'Social Media Marketing', iconUrl: '/solutions/social-media-marketing.png' },
    { id: 7, title: 'Data Analysis', iconUrl: '/solutions/data-analytics 1.png' },
    { id: 8, title: 'Project Management', iconUrl: '/solutions/project 1.png' },
    { id: 9, title: 'Asset Management', iconUrl: '/solutions/asset-utilization.png' },
    { id: 10, title: 'E-commerce', iconUrl: '/solutions/online-store 1.png' },
  ];

  const industryFeatures = [
    { id: '1', title: 'Health Care', iconUrl: '/experties/health-insurance.png' },
    { id: '2', title: 'Banking', iconUrl: '/experties/bank.png' },
    { id: '3', title: 'Insurance', iconUrl: '/experties/insurance.png' },
    { id: '4', title: 'Lending', iconUrl: '/experties/order-history.png' },
    { id: '5', title: 'Investment', iconUrl: '/experties/growth.png' },
    { id: '6', title: 'Retail', iconUrl: '/experties/retail.png' },
    { id: '7', title: 'Manufacturing', iconUrl: '/experties/automation.png' },
    { id: '8', title: 'Professional Services', iconUrl: '/experties/professional-services.png' },
    { id: '9', title: 'Oil and Gas', iconUrl: '/experties/oil-rig.png' },
    { id: '10', title: 'Telecoms', iconUrl: '/experties/satellite-dish.png' },
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