"use client"; // 1. Necessary for interactive state tracking

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed
import OrangeButton from "./OrangeButton";

export default function Header() {
  const [openHeaderDrop, setOpenHeaderDrop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(""); // Tracks URL hash state

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

  // Disable body scroll when mobile sidebar is open
  useEffect(() => {
    if (openHeaderDrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    <header 
      className={`sticky top-0 z-50 transition-all p-7 duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-white shadow-none"
      }`}
    >
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
            {buttons.map((btn, index) => {
              const isActive = currentHash === btn.link;
              return (
                <Link
                    key={index}
                    href={btn.link}
                    onClick={() => setCurrentHash(btn.link)} // Update state instantly upon layout selection
                    className={`flex items-center text-sm justify-center transition pb-1 border-b-2 ${
                      isActive 
                        ? "border-[#D26C66] text-[#D26C66] font-semibold" 
                        : "border-transparent text-[#464646] hover:text-[#D26C66] hover:border-[#D26C66]"
                    }`}
                >
                    {btn.text}
                </Link>
              );
            })}
        </nav>
        
        <OrangeButton className="hidden md:flex hover:text-[#464646]" text="Get in Touch" link="#contact" />

        <button
            onClick={() => setOpenHeaderDrop(!openHeaderDrop)}
            className="text-3xl rounded-md md:hidden px-2 py-1 text-[#464646] flex items-center justify-center relative z-50 transition hover:bg-gray-100"
            aria-label="Toggle Navigation Menu"
        >
            {openHeaderDrop ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE SIDEBAR PORTAL PORT */}
        <div className={`md:hidden ${openHeaderDrop ? "block" : "hidden"}`}>
          {/* Modern Premium Blur Backdrop Overlay */}
          {openHeaderDrop && (
              <div 
              className="fixed inset-0 bg-black/15 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={() => setOpenHeaderDrop(false)}
              />
          )}

          {/* Compact Modern Sidebar (True Edge-to-Edge) */}
          <div className={`fixed inset-y-0 right-0 h-screen w-60 bg-white border-l border-gray-100 p-5 flex flex-col gap-6 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${openHeaderDrop ? 'translate-x-0 ' : 'translate-x-full '}`}>
              
              {/* Top Spacer to push content gracefully past header elements */}
              <div className="h-14 flex-shrink-0" />

              {/* Combined Stack: Navigation Links + Button Underneath */}
              <nav className="flex flex-col gap-1.5">
                {buttons.map((btn, index) => {
                  const isActive = currentHash === btn.link;
                  return (
                    <Link
                      key={index}
                      href={btn.link}
                      onClick={() => {
                        setCurrentHash(btn.link);
                        setOpenHeaderDrop(false);
                      }}
                      className={`w-full h-10 px-4 rounded-lg flex items-center justify-start text-sm transition-all duration-200 ${
                        isActive 
                          ? "bg-[#D26C66]/10 text-[#D26C66] font-semibold" 
                          : "text-[#464646] hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      {btn.text}
                    </Link>
                  );
                })}
                
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <OrangeButton className="w-full hover:text-[#464646]" text="Get in Touch" link="#contact" onClick={() => {
                    setCurrentHash("#contact");
                    setOpenHeaderDrop(false);
                  }} />
                </div>
              </nav>
          </div>
        </div>

      </div>
    </header>
  );
}
