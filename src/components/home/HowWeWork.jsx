import React from "react";
import {
  UserCheck,
  Search,
  FileCheck,
  Briefcase,
  Smile,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Profile Analysis",
    desc: "We analyze skills & education to find your match.",
    icon: UserCheck,
  },
  {
    id: "02",
    title: "Smart Shortlisting",
    desc: "Connect with genuine openings in our database.",
    icon: Search,
  },
  {
    id: "03",
    title: "Easy Onboarding",
    desc: "Guidance through paperwork and documentation.",
    icon: FileCheck,
  },
  {
    id: "04",
    title: "Ongoing Support",
    desc: "We handle contracts so you can focus on work.",
    icon: Briefcase,
  },
  {
    id: "05",
    title: "Growth",
    desc: "A supportive path to your professional career.",
    icon: Smile,
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 text-lg">
              A transparent, supportive path to your professional growth.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-green font-bold hover:text-emerald-600 transition-colors">
            Start Application <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-green hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-bold text-slate-300 group-hover:text-brand-green transition-colors">
                  {step.id}
                </span>
                <div className="p-3 bg-brand-green rounded-full text-slate-400 group-hover:text-brand-green transition-colors">
                  <step.icon className="w-5 h-5 md:w-8 md:h-8 text-brand-dark" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Last Card CTA (Fills the gap in the grid) */}
          <div className="bg-brand-dark p-8 rounded-2xl flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-[#1f2b45] transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to start?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Create your profile in 5 minutes.
            </p>
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
