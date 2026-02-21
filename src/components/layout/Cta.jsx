import React from "react";

import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-28 bg-brand-dark font-sans relative overflow-hidden">
      
      {/* Decorative solid circles (No blur, just solid shapes for depth) */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/5"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-brand-dark text-sm font-bold mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-green" />
          Start your journey
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
          Ready to start your career in <br className="hidden md:block" />
          <span className="relative inline-block text-white ml-2">
             Germany?
             {/* Sharp Solid Underline */}
             <svg className="absolute w-full h-4 -bottom-2 left-0 text-brand-green" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
             </svg>
          </span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Update your profile with your education, portfolio, and documents to get matched with top employers instantly.
        </p>

        {/* Action Area */}
        <div className="flex flex-col items-center">
          <Link
            to="/signup"
            className="group flex items-center gap-3 px-10 py-5 text-lg font-bold text-brand-dark bg-brand-green rounded-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
             <span className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-slate-600"></div> GDPR Compliant
             </span>
             <span className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-slate-600"></div> Free for Students
             </span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default CTA;