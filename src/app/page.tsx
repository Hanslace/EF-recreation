"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import OrangeButton from "@/components/OrangeButton";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  const [openHeaderDrop, setOpenHeaderDrop] = useState(false);

  const buttons = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Services",
      link: "#services",
    },
    {
      text: "About",
      link: "#about",
    },
  ];

  return (
    <>
      <header className="w-full  mx-auto p-5 md:px-20 border-b bg-white flex items-center justify-between relative">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />

          <div className="hidden md:flex items-center justify-center gap-4">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link}
                className=" flex items-center test-sm text-[#464646] justify-center hover:bg-[#464646] p-2 rounded-sm hover:text-white transition"
              >
                {btn.text}
              </Link>
            ))}
          </div>


          <div className="flex items-center gap-3">

            
            <OrangeButton text="Get in Touch" link="#contact"/>

            <div className="md:hidden relative">
              <button
                onClick={() => setOpenHeaderDrop(!openHeaderDrop)}
                className="text-3xl rounded-md px-3 py-1 text-[#464646]"
              >
                {openHeaderDrop ? <X size={24} /> : <Menu size={24} />}
              </button>

              {openHeaderDrop && (
                <div className="absolute right-0 top-14 w-48 bg-white border border-[#464646] rounded-lg p-3 flex flex-col gap-3 shadow-lg z-50">
                  {buttons.map((btn, index) => (
                    <Link
                      key={index}
                      href={btn.link}
                      className="w-full h-11 text-[#464646]  rounded-lg flex items-center justify-center hover:bg-[#464646] hover:text-white transition"
                    >
                      {btn.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>



      </header>

      <main className="min-h-screen ">

        <section className="w-full min-h-[50vh] bg-[#1E222D] flex items-center justify-center ">

          <div className="flex text-[#CCCCCC] md:flex-col lg:flex-row justify-center items-center gap-10 m-20">

            <HeroImage className="hidden md:block lg:hidden" />
           

            <div className="flex flex-col m-auto gap-10 lg:max-w-[45%]">

              
               

              <div className=" flex md:gap-5 flex-col  ">
                <h1 className="text-[clamp(2rem,5vw,4rem)]  font-bold">
                  Advanced Feature to 
                  Grow Your Business

                </h1>
                <text className="text-[clamp(1rem,2vw,1.7rem)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </text>
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

        <section className="bg-white"> 

          <div className="w-full h-full ">

          </div>
          
        </section>

        <section> 
          
        </section>

        <section> 
          
        </section>

        <section> 
          
        </section>


      
      </main>

      <footer className="w-full h-[72px] bg-[#1E222D]">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-5">
          <p className="text-[#CCCCCC] italic font-bold text-sm">
            © 2026 Easyfringe Rights Reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="http://www.instagram.com/easyfringe/"
              className="w-[30px] h-[30px] border border-[#CCCCCC] rounded-sm flex items-center justify-center text-[#CCCCCC]"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://linkedin.com/company/easyfringe"
              className="w-[30px] h-[30px] border border-[#CCCCCC] rounded-sm flex items-center justify-center text-[#CCCCCC]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}