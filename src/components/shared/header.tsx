"use client"; // 1. Necessary for interactive state tracking

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed
import OrangeButton from "./OrangeButton";

export default function Header() {
  const [openHeaderDrop, setOpenHeaderDrop] = useState(false);

  const buttons = [
    { text: "Home", link: "#home" },
    { text: "Services", link: "#services" },
    { text: "About", link: "#about" },
  ];

  return (
    <header className="w-full mx-auto p-5 md:px-20 border-b bg-white flex items-center gap-10 justify-between relative z-50">
      {/* Brand Identity / Logo */}
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
            className="flex items-center text-sm text-[#464646] justify-center hover:bg-[#464646] p-2 rounded-sm hover:text-white transition"
          >
            {btn.text}
          </Link>
        ))}
      </nav>

      {/* CTA Button and Mobile Menu Controls */}
      <div className="flex items-center gap-3">
        <OrangeButton text="Get in Touch" link="#contact" />

        {/* Responsive Mobile Menu Toggle Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setOpenHeaderDrop(!openHeaderDrop)}
            className="text-3xl rounded-md px-3 py-1 text-[#464646] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {openHeaderDrop ? <X size={24} /> : <Menu size={24} />}
          </button>

          {openHeaderDrop && (
            <div className="absolute right-0 top-14 w-48 bg-white border border-[#464646] rounded-lg p-3 flex flex-col gap-3 shadow-lg z-50">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.link}
                  onClick={() => setOpenHeaderDrop(false)} // Auto-closes dropdown menu when clicked
                  className="w-full h-11 text-[#464646] rounded-lg flex items-center justify-center hover:bg-[#464646] hover:text-white transition"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
