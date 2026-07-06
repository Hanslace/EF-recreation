"use client"; // 1. Necessary for interactive state tracking

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed
import OrangeButton from "./OrangeButton";

export default function Header() {
  const [openHeaderDrop, setOpenHeaderDrop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll coordinates to toggle visibility styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Disable body scroll when mobile sidebar is open
  useEffect(() => {
    if (openHeaderDrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scrolling if component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [openHeaderDrop]);

  const buttons = [
    { text: "Home", link: "#home" },
    { text: "Services", link: "#services" },
    { text: "About", link: "#about" },
  ];

  return (
    // Dynamic transition bindings switch background transparent/solid base on state tracking configurations
    <header 
      className={`sticky top-0 z-50 transition-all p-7 duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-white shadow-none"
      }`}
    >
      {/* Container background matches the header opacity */}
      <div className="md:w-[75vw] w-full mx-auto flex items-center gap-10 justify-between relative">
        
        <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={50}
            className="object-contain"
        />

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center justify-center gap-4">
            {buttons.map((btn, index) => (
            <Link
                key={index}
                href={btn.link}
                className="flex items-center text-sm text-[#464646] justify-center hover:border-b-3 hover:border-[#D26C66] hover:text-[#D26C66] transition"
            >
                {btn.text}
            </Link>
            ))}
        </nav>
        
        <OrangeButton className="hidden md:flex hover:text-[#464646]" text="Get in Touch" link="#contact" />


        {/* CTA Button and Mobile Menu Controls */}
        <div className="flex items-center md:hidden justify-end gap-3 min-w-[122px]">
            {/* Desktop Only CTA Button */}

              <button
                  onClick={() => setOpenHeaderDrop(!openHeaderDrop)}
                  className="text-3xl rounded-md px-3 py-1 text-[#464646] flex items-center justify-center relative z-50"
                  aria-label="Toggle Navigation Menu"
              >
                  {openHeaderDrop ? <X size={24} /> : <Menu size={24} />}
              </button>
        </div>

        {/* MOBILE SIDEBAR PORTAL PORT - Isolated completely from layout flow */}
        <div className="md:hidden">
          {/* Backdrop Overlay */}
          {openHeaderDrop && (
              <div 
              className="fixed inset-0 bg-black/40 z-40 transition-opacity"
              onClick={() => setOpenHeaderDrop(false)}
              />
          )}

          {/* Side Drawer Sidebar */}
          <div className={`fixed inset-y-0 right-0 h-screen w-64 bg-white border-l border-[#464646] p-6 flex flex-col gap-4 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${openHeaderDrop ? 'translate-x-0' : 'translate-x-full'}`}>
              {/* Top Spacer to clear the close icon zone */}
              <div className="h-16 flex-shrink-0" />

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3">
              {buttons.map((btn, index) => (
                  <Link
                  key={index}
                  href={btn.link}
                  onClick={() => setOpenHeaderDrop(false)}
                  className="w-full h-11 text-[#464646] rounded-lg flex items-center justify-center hover:bg-[#464646] hover:text-white transition"
                  >
                  {btn.text}
                  </Link>
              ))}
              </nav>

              {/* Mobile Only CTA Button inside Sidebar */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center">
              <OrangeButton className="w-full hover:text-[#464646]" text="Get in Touch" link="#contact" onClick={() => setOpenHeaderDrop(false)} />
              </div>
          </div>
        </div>

      </div>
    </header>
  );
}
