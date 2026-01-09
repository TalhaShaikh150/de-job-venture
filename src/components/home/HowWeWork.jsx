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
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Work</h2>
          <p className="text-slate-500 mt-4">
            We make the entire hiring process smooth, safe, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.id}
                </div>
                <step.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;