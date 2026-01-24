import React from "react";
import { MoveRight } from "lucide-react";

const Hiring = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Background Image (Full Width of Container) */}
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover"
              alt="Office"
            />
            <div className="absolute inset-0 bg-brand-dark/20"></div>
          </div>

          {/* Floating Content Card (Overlapping) */}
          <div className="relative lg:absolute lg:bottom-12 lg:left-12 lg:w-[500px] bg-brand-dark p-10 rounded-[2rem] shadow-2xl mt-[-50px] lg:mt-0 mx-4 lg:mx-0">
            <span className="bg-brand-green text-brand-dark px-3 py-1 rounded-md text-xs font-bold uppercase mb-6 inline-block">
              We are hiring
            </span>

            <h2 className="text-3xl font-bold text-white mb-4">
              Join 80+ people changing the industry.
            </h2>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Remote-first, impact-driven, and obsessed with quality. If you
              love solving complex problems, we want you.
            </p>

            <ul className="grid grid-cols-2 gap-4 mb-8">
              <li className="text-white text-sm font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>{" "}
                Remote
              </li>
              <li className="text-white text-sm font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>{" "}
                Equity
              </li>
              <li className="text-white text-sm font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>{" "}
                Health
              </li>
              <li className="text-white text-sm font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>{" "}
                Retreats
              </li>
            </ul>

            <a
              href="#"
              className="w-full bg-white text-brand-dark font-bold py-4 rounded-xl hover:bg-brand-green transition-colors flex items-center justify-center gap-2"
            >
              See Open Roles <MoveRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hiring;
