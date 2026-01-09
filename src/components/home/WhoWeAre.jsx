import React from "react";
import { ShieldCheck, Users, Briefcase, CheckCircle } from "@/components/icons";

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Enhanced Visual Composition */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt="Team Collaboration" 
                 className="rounded-[2.5rem] shadow-2xl border-4 border-white w-full h-[500px] object-cover"
               />
               
               {/* Floating Glass Card 1 (Top Left) */}
               <div className="absolute -top-8 -left-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-3">
                     <div className="bg-green-100 p-2 rounded-full text-brand-green">
                        <CheckCircle className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Success Rate</p>
                        <p className="text-xl font-extrabold text-slate-900">98.5%</p>
                     </div>
                  </div>
               </div>

               {/* Floating Glass Card 2 (Bottom Right) */}
               <div className="absolute -bottom-8 -right-8 bg-[#161F33] p-6 rounded-2xl shadow-2xl border border-slate-700 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                           <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-[#161F33]" alt="User" />
                        ))}
                     </div>
                     <span className="text-white text-xs font-bold">+200k Students</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">"Dejob helped me land my dream role in Berlin in just 2 weeks!"</p>
               </div>
            </div>
            
            {/* Background Pattern Dots */}
            <div className="absolute bottom-[-40px] left-[-40px] grid grid-cols-6 gap-2 opacity-20 -z-10">
               {[...Array(24)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-brand-green rounded-full"></div>)}
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
               <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span> Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Your Trusted Gateway to <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                Success in Germany.
              </span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">
              De Job Ventures is more than a job board. We are a secure ecosystem connecting ambition with opportunity. 
              We partner exclusively with verified employers to ensure every listing is legitimate and every applicant is valued.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Secure & Reliable", text: "Every company is vetted. Zero scams, 100% verified." },
                { icon: Users, title: "Verified Network", text: "Direct access to HR managers at top German firms." },
                { icon: Briefcase, title: "Diverse Opportunities", text: "From Werkstudent to Full-time Senior roles." },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100 cursor-default">
                  <div className="bg-green-50 p-3 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;