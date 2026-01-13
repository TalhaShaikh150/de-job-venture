import React from "react";
import { MessageSquare, Mail, Globe, ArrowRight } from "@/components/icons";

// Reuse your FloatingCard, slightly tweaked for this layout
const FloatingCard = ({ icon: Icon, title, value, sub, action, href }) => (
  <a 
    href={href}
    className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-brand-green hover:border-brand-green transition-all duration-300 flex flex-col items-start gap-3 overflow-hidden"
  >
    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-green group-hover:bg-white group-hover:text-brand-green transition-colors z-10">
      <Icon className="w-5 h-5" />
    </div>
    
    <div className="z-10 mt-2">
      <h3 className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-brand-dark/70">{title}</h3>
      <p className="text-xl font-bold text-white mb-1 group-hover:text-white">{value}</p>
      <p className="text-sm text-slate-400 group-hover:text-white/90 leading-tight">{sub}</p>
    </div>

    <div className="mt-auto pt-4 flex items-center gap-2 text-brand-green text-sm font-bold group-hover:text-brand-dark transition-colors z-10">
      {action} <ArrowRight className="w-4 h-4" />
    </div>
  </a>
);

const ContactHeader = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden font-sans">
      
      {/* ================= BACKGROUND IMAGE (The "Natural" Element) ================= */}
      <div className="absolute inset-0 z-0">
        {/* Real Office Image - Replaces abstract shapes */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" 
          alt="Dejob Berlin Office" 
          className="w-full h-full object-cover"
        />
        
        {/* Brand Dark Gradient Overlay - Ensures text readability & Brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161F33] via-[#161F33]/95 to-[#161F33]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#161F33] via-transparent to-[#161F33]/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:w-1/2">
            
            {/* Human Element: Support Team Avatars */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-[#161F33]" 
                    src={`https://i.pravatar.cc/100?img=${i + 30}`} 
                    alt="Support Agent" 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                 <span className="text-white text-sm font-bold">Talk to a human</span>
                 <span className="text-brand-green text-xs flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span> 
                   Typically replies in 5m
                 </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Let's start a <br />
              <span className="relative inline-block">
                conversation.
                {/* Natural brush stroke underline */}
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-green" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" opacity="0.8" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-8 border-l-2 border-brand-green/30 pl-6">
              Whether you're a company looking to hire or a talent looking for your next role in Germany, our local team in Berlin is ready to help.
            </p>
          </div>

          {/* ================= RIGHT CARDS (Overlapping the Image) ================= */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1: Sales */}
              <FloatingCard 
                icon={MessageSquare}
                title="For Companies"
                value="Chat with Sales"
                sub="Custom hiring solutions & API access."
                action="Book Demo"
                href="mailto:sales@dejob.de"
              />

              {/* Card 2: Support */}
              <FloatingCard 
                icon={Mail}
                title="For Candidates"
                value="Get Support"
                sub="Help with your profile or applications."
                action="Email Us"
                href="mailto:help@dejob.de"
              />

              {/* Card 3: Location (Spans Full Width on Desktop Grid) */}
              <div className="md:col-span-2">
                <FloatingCard 
                  icon={Globe}
                  title="Visit Our Hub"
                  value="Berlin Headquarters"
                  sub="Friedrichstraße 123, 10117 Berlin, Germany"
                  action="Get Directions"
                  href="#map"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHeader;