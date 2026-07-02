import Link from 'next/link';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full p-5 h-[72px] bg-[#1E222D]">
      <div className="md:max-w-[75vw] mx-auto h-full flex items-center justify-between ">
        
        {/* Copyright Attribution */}
        <p className="text-[#CCCCCC] italic font-bold text-sm">
          © 2026 Easyfringe Rights Reserved.
        </p>

        {/* Social Media Anchor Matrix */}
        <div className="flex gap-3">
          <Link
            href="http://www.instagram.com/easyfringe/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] h-[30px] border border-[#CCCCCC] rounded-sm flex items-center justify-center text-[#CCCCCC] transition-colors duration-200 hover:text-white hover:border-white"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </Link>

          <Link
            href="https://linkedin.com/company/easyfringe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] h-[30px] border border-[#CCCCCC] rounded-sm flex items-center justify-center text-[#CCCCCC] transition-colors duration-200 hover:text-white hover:border-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
