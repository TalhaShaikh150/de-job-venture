import React from "react";
import {
  Globe,
  MoveRight,
  BookOpen,
  ChevronRight,
  CheckCircle2,
  Zap,
} from "@/components/icons";

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#161F33_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            Why Choose Dejob
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 md:mb-6 tracking-tight">
            Everything you need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
              succeed in Germany.
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We provide the infrastructure for your international career. From
            visa guidance to direct employer connections.
          </p>
        </div>

        {/* ================= GRID LAYOUT ================= */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[640px]">
          {/* 
             CARD 1: VISA & RELOCATION (Replaces Job Alerts) 
             Style: Tall, White, Clean, List-based
          */}
          {/* CARD OPTION 3: FAST TRACK HIRING */}
          {/* CARD OPTION 3: FAST TRACK HIRING (ENHANCED) */}
          <div className="lg:row-span-2 bg-gradient-to-b from-white to-slate-50 rounded-[2rem] p-8 flex flex-col justify-between border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-brand-green/30 transition-all duration-500 group relative overflow-hidden">
            {/* Header */}
            <div className="relative z-10 mb-8">
              <div className="w-16 h-16 bg-brand-green text-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20 transition-transform duration-300">
                <Zap className="w-8 h-8 fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">
                The 7-Day Sprint
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                We enforce strict response times. Apply Monday, interview
                Wednesday, hired Friday.
              </p>
            </div>

            {/* Visual: Timeline */}
            <div className="relative pl-6 border-l-2 border-dashed border-slate-200 group-hover:border-brand-green/30 transition-colors duration-500 space-y-8 pb-2">
              {/* Step 1 */}
              <div className="relative group/item">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white group-hover:bg-brand-green transition-colors duration-300"></div>
                <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  Profile Verified
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Monday
                  </p>
                  <span className="text-xs bg-green-100 text-brand-green px-2 py-0.5 rounded font-bold">
                    Done
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group/item">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white group-hover:bg-brand-green transition-colors duration-300 delay-100"></div>
                <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  Direct Interview
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Wednesday
                  </p>
                  <span className="text-xs bg-green-100 text-brand-green px-2 py-0.5 rounded font-bold">
                    Done
                  </span>
                </div>
              </div>

              {/* Step 3 (Active) */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-dark ring-4 ring-white shadow-lg shadow-brand-dark/20 animate-pulse"></div>
                <h4 className="text-lg font-bold text-brand-dark">
                  Contract Offer
                </h4>
                <p className="text-sm font-bold text-brand-green uppercase tracking-wider mt-1">
                  Friday
                </p>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-[60px] pointer-events-none"></div>
          </div>
          {/* 
             CARD 2: UPLOAD CV (Wide Top Right)
             Style: Dark Mode, High Contrast, Premium
          */}
          <div className="lg:col-span-2 bg-brand-dark rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group min-h-[320px] shadow-2xl shadow-brand-dark/20">
            {/* Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-brand-green/20 transition-colors duration-700"></div>

            <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-brand-dark uppercase bg-white rounded-md shadow-lg">
                Recruiters come to you
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                One Profile. <br /> Infinite Opportunities.
              </h3>
              <p className="text-slate-400 mb-8 text-sm md:text-base leading-relaxed">
                Stop applying manually. Create your profile once and let
                verified companies send you interview requests.
              </p>
              <button className="inline-flex items-center gap-2 bg-brand-green text-brand-dark px-6 py-3.5 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-brand-green/20">
                Create Free Profile
                <MoveRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex justify-center perspective-1000 mt-4 md:mt-0">
              <div className="relative bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl transition-transform duration-500 w-64">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-24 bg-white/50 rounded-full"></div>
                    <div className="h-2 w-16 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/20 rounded-full"></div>
                  <div className="h-2 w-full bg-white/20 rounded-full"></div>
                  <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                </div>
                <div className="absolute -right-4 -bottom-4 bg-white text-brand-dark p-2 rounded-lg shadow-lg flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" /> 100%
                  Match
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW CONTAINER */}
          <div className="flex flex-col md:flex-row lg:col-span-2 gap-6 w-full">
            {/* 
               CARD 3: CAREER ADVICE 
               Style: Soft Gray, Professional
            */}
            <div className="flex-1 bg-slate-50 rounded-[2rem] p-8 border border-slate-200 hover:border-brand-dark/20 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12  border border-slate-200 rounded-2xl flex items-center justify-center bg-brand-dark text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-brand-dark bg-brand-green/20 px-3 py-1 rounded-full uppercase tracking-wide">
                    Guide
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-brand-green transition-colors">
                  Career Advice
                </h3>
                <p className="text-sm text-slate-500">
                  Expert tips on salary negotiation, German CV formats &
                  interview prep.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 12}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-brand-dark bg-brand-green  transition-colors cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* 
               CARD 4: STATS 
               Style: Brand Green Accent
            */}
            <div className="flex-1 bg-brand-green rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-lg shadow-brand-green/20 hover:-translate-y-1 transition-transform duration-300">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[20px] border-white/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>

              <div className="relative z-10 text-white">
                <h3 className="text-6xl font-extrabold mb-0 leading-none">
                  200k
                </h3>
                <p className="font-bold text-xl mb-6 opacity-80">Active Jobs</p>

                <button className="bg-white text-brand-dark px-6 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-brand-dark hover:text-white transition-colors">
                  View All Jobs &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
