import React from "react";
import { UserCheck, Search, FileCheck, Briefcase, Smile } from "@/components/icons";

const steps = [
  { 
    id: "I", 
    title: "Understanding Your Profile", 
    desc: "We analyze your skills, education, and preferences to find the perfect match.", 
    icon: UserCheck 
  },
  { 
    id: "II", 
    title: "Smart Shortlisting", 
    desc: "Our team connects you with genuine openings from our verified database.", 
    icon: Search 
  },
  { 
    id: "III", 
    title: "Easy Onboarding", 
    desc: "We guide you through paperwork and documentation for a smooth start.", 
    icon: FileCheck 
  },
  { 
    id: "IV", 
    title: "Ongoing Management", 
    desc: "We handle contracts, salary, and procedures so you can focus on work.", 
    icon: Briefcase 
  },
  { 
    id: "V", 
    title: "Stress-Free Experience", 
    desc: "A transparent, supportive path to your professional growth in Germany.", 
    icon: Smile 
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-slate-50 font-sans relative overflow-hidden">
      {/* Optional Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-dark text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-500 mt-6 text-lg leading-relaxed">
            We make the entire hiring process smooth, safe, and stress-free for your journey to Germany.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group relative bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-brand-dark/10 hover:border-brand-green/50 transition-all duration-500 ease-out hover:-translate-y-2"
            >
              
              {/* Header Row: Icon & ID */}
              <div className="flex justify-between items-start mb-8">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-brand-dark flex items-center justify-center shadow-lg group-hover:bg-brand-green transition-colors duration-500">
                  <step.icon className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Roman Numeral Badge */}
                <span className="text-3xl font-bold text-slate-100 group-hover:text-brand-dark/5 transition-colors duration-500 select-none font-serif italic">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-green transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                {step.desc}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-8 left-10 right-10 h-px bg-slate-100 group-hover:bg-brand-green/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;