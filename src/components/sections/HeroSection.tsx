import Image from 'next/image';
import OrangeButton from '../shared/OrangeButton';
import HeroImage from '../HeroImage';

export default function HeroSection() {
  return (
        <section className="w-full min-h-[75vh] bg-[#1E222D] flex items-center justify-center ">

          <div className="flex text-[#CCCCCC] max-w-7xl md:flex-col lg:flex-row justify-center items-center gap-10 m-20">

            <HeroImage className="hidden md:block lg:hidden" />
           

            <div className="flex flex-col m-auto gap-10 lg:max-w-[45%]">

              
               

              <div className=" flex md:gap-5 flex-col  ">
                <h1 className="text-[clamp(1.5rem,4vw,3rem)]  font-bold">
                  Advanced Feature to 
                  Grow Your Business

                </h1>
                <p className="text-[clamp(1rem,2vw,1.5rem)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <HeroImage className="md:hidden" />

              <div className="flex gap-5 items-center ">
                <OrangeButton text="Get in Touch" link="#contact" className="w-[120px] md:w-[175px] hover:text-[#1E222D]"/>
                <button className="w-[120px] md:w-[175px] rounded-sm border py-2 hover:bg-[#CCCCCC] hover:text-[#1E222D] hover:border-[#1E222D]">
                   Learn More
                </button>
              </div>
              <div className="flex flex-col  ">
                <div className=""> 
                    Our Top Clients:
                </div>
                <div className="flex   gap-10">
                  <Image
                    src="/backbone_logo.png"
                    alt="Logo"
                    height={120}
                    width={120}
                    className="object-contain"
                  />
                  <Image
                    src="/FEG_logo.png"
                    alt="Logo"
                    height={120}
                    width={120}
                    className="object-contain"
                  />
                  <Image
                    src="/UZ_logo.png"
                    alt="Logo"
                    height={120}
                    width={120}
                    className="object-contain"
                  />
                  
                </div>
              </div>

            </div>
            <Image
              src="/hero_image.png"
              alt="Logo"
              width={600}
              height={426}
              className="hidden lg:block aspect-[600/426] object-contain max-w-[50%] w-full h-auto"
            />

          </div>

        </section>
  );
}
