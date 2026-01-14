import React from "react";
import { ShieldCheck, Users, Briefcase } from "@/components/icons"; // Using Lucide for cleaner icons

const WhoWeAre = () => {
  return (
    <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Clean Image */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Simple Accent Square */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/10 -z-10 rounded-3xl"></div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Your trusted partner <br /> for career growth.
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              We connect ambition with opportunity through a secure, verified
              ecosystem. Partnering exclusively with top German employers to
              ensure quality.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Verified",
                  text: "Every company is manually vetted. Zero scams.",
                },
                {
                  icon: Users,
                  title: "Direct Access",
                  text: "Connect directly with hiring managers.",
                },
                {
                  icon: Briefcase,
                  title: "All Experience Levels",
                  text: "From students to senior professionals.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
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
