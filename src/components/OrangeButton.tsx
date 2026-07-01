import Link from 'next/link';

interface OrangeButtonProps {
  text: string;
  link: string;
  className?: string; // The "?" makes this property optional
}

export default function OrangeButton({ text, link, className = '' }: OrangeButtonProps) {
  return (
    <Link 
      href={link} 
      // We removed the fixed w-[122px] from the main string and put it in a fallback check
      className={`h-[43px] bg-[#D26C66] rounded-sm text-white font-bold text-sm leading-[16px] flex items-center justify-center hover:text-[#464646] transition ${
        className.includes('w-') ? className : `w-[122px] ${className}`
      }`}
    >
      {text}
    </Link>
  );
}
