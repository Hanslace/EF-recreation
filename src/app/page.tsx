"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
      <header className="w-full mx-auto p-5 md:px-20 border-b bg-white flex items-center justify-between relative">
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
                className=" flex items-center test-sm text-[#464646] justify-center hover:bg-[#464646] p-1 rounded-sm hover:text-white transition"
              >
                {btn.text}
              </Link>
            ))}
          </div>


          <div className="flex items-center gap-3">

            
            <button className="w-[122px] h-[43px] bg-[#D26C66] rounded-[4px] text-white font-bold text-sm leading-[16px] flex items-center justify-center hover:text-[#464646] transition">
              Get In Touch
            </button>

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
                      className="w-full h-11 border-2 border-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
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

        <section className="w-full min-h-screen bg-[#1E222D] flex items-center justify-center p-20">

          <div className="flex text-[#CCCCCC]  gap-10 m-auto">

            <div className="flex flex-col my-auto">
              <div className=" flex flex-col">
                <text className="text-5xl  font-bold">
                  Advanced Feature to 
                  Grow Your Business

                </text>
                <text className="text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </text>
              </div>
              <div className="flex gap-5 items-center ">
                <button>
                    Get in Touch
                </button>
                <button>
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
              className="w-full h-auto"
            />

          </div>

        </section>

        <section> 
          
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