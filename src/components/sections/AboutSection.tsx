import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import OrangeButton from '../shared/OrangeButton';

export default function AboutSection() {
  const points = [
    "Nobis ridiculous capacitate ejecta.",
    "Contrary to popular belief more.",
    "There are many Variations of Passages."
  ];

  return (
    <section id="about" className="bg-white">
        <div className="  py-10 flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-7xl mx-auto p-6">
            
                
                {/* LEFT COLUMN: Handled entirely as a single composite image */}
                <div className="relative w-full lg:w-1/2 max-w-[540px] aspect-[518/529] mx-auto flex justify-center items-center">
                    <Image
                        src="/about_section.png"
                        alt="About Company visual collage and support badge"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>


                {/* RIGHT COLUMN: Fully developed UI content */}
                <div className="w-full lg:w-1/2 flex flex-col md:items-center lg:items-start text-left">
                
                {/* Subheading prefix accent */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#D26C66] text-xs font-bold uppercase tracking-widest">
                    About Company
                    </span>
                    <div className="w-10 h-[2px] bg-[#D26C66]" />
                </div>

                {/* Main Title heading */}
                <h2 className="text-[#1E222D] text-[clamp(2rem,4vw,2.5rem)] font-bold leading-tight tracking-tight mb-6">
                    Build A Strategy That Puts <br className="hidden sm:inline" /> 
                    An Your Money To Work.
                </h2>

                {/* Body Narrative paragraph */}
                <p className="text-[#5A5B6B] text-sm leading-relaxed mb-6 max-w-xl">
                    This is the main factor that sets us apart from our and allows us deliver a Special ist 
                    business consul Our team applies its ranging experience strategies us deliver a 
                    specialist business consul Our team.
                </p>

           
                

           
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full items-center mb-8">
                    
                    {/* Checklist Matrix (7 cols) */}
                    <div className="sm:col-span-7 flex flex-col gap-8">
                        <div className="bg-[#D26C66]/5 rounded-sm px-4 py-2 flex items-center gap-2  border border-[#D26C66]/10">
                            <span className="text-[#D26C66] text-sm font-bold">10 Years</span>
                            <span className="text-neutral-600 text-sm">of Development Experience</span>
                        </div>
                        <div className="sm:col-span-7 flex flex-col gap-2">
                            {points.map((text, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#D26C66] shrink-0 stroke-[1.5]" />
                                <span className="text-neutral-700 text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        
                        </div>
                        
                        <OrangeButton text="Get In Touch" link="#contact" />
                    </div>

                    {/* Statistics Container Card (5 cols) */}
                    <div className="sm:col-span-5 border border-dashed border-[#D26C66]/30 bg-[#D26C66]/[0.01] rounded-lg p-6 flex flex-col items-center justify-center text-center gap-4">
                    <div>
                        <div className="text-[#D26C66] text-3xl font-extrabold tracking-tight">100%</div>
                        <div className="text-neutral-500 text-xs mt-1">Success Rate</div>
                    </div>
                    <div className="w-full h-[1px] bg-neutral-100" />
                    <div>
                        <div className="text-[#1E222D] text-3xl font-extrabold tracking-tight">3569+</div>
                        <div className="text-neutral-500 text-xs mt-1">Satisfied Client</div>
                    </div>
                    </div>

                </div>

                {/* Primary CTA Trigger button linking to contact container block */}
                

                </div>

            </div>
    </section>
  );
}
