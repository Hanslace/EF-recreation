import Link from 'next/link';

interface OrangeButtonProps {
  text: string;
  link: string;
  className?: string; // The "?" makes this property optional
  onClick?: () => void; // Added optional onClick event handler
}

export default function OrangeButton({ text, link, className = '', onClick }: OrangeButtonProps) {
  return (
    <Link 
      href={link} 
      onClick={onClick} 
      className={`h-[43px] bg-[#D26C66] rounded-sm text-white font-bold text-sm leading-[16px] flex items-center justify-center  transition ${
        className.includes('w-') ? className : `w-[122px] ${className}`
      }`}
    >
      {text}
    </Link>
  );
}
