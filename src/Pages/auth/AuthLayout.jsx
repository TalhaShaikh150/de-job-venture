import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Star } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 font-sans overflow-hidden relative">
      {/* --- LEFT: VISUAL BRANDING SECTION --- */}
      {/* Hidden on mobile, fixed width on desktop */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0F172A] overflow-hidden flex-col justify-between p-16 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80"
            alt="Abstract Background"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]"></div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Brand Header */}
        <div className="relative z-10">
         <Link to="/" className="flex-shrink-0 group z-[101]" >
           <div className="flex flex-col justify-center leading-none select-none">
             {/* The Monogram */}
             <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center gap-0.5">
               <span className="text-white drop-shadow-md">D</span>
               <span className="text-brand-green drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">J</span>
               <span className="text-white drop-shadow-md">V</span>
             </h1>
             
             {/* The Full Name */}
             <div className="flex items-center gap-1.5 mt-0.5">
               <div className="h-[1px] w-3 bg-brand-green/50"></div>
               <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                 DE JOB VENTURE
               </span>
               <div className="h-[1px] w-3 bg-brand-green/50"></div>
             </div>
           </div>
         </Link>
        </div>

        {/* Testimonial Card (Glassmorphism) */}
        <div className="relative z-10 max-w-lg">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative group hover:bg-white/10 transition-colors duration-500">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-4 bg-brand-green w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-lg">
              ❝
            </div>

            <p className="text-lg text-slate-200 leading-relaxed font-light mb-6 relative z-10">
              "Dejob transformed our hiring process. We found qualified
              candidates in days, not months. The platform is intuitive, fast,
              and remarkably effective."
            </p>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                className="w-12 h-12 rounded-full border-2 border-brand-green object-cover"
                alt="User"
              />
              <div>
                <h4 className="font-bold text-white text-base">
                  Sarah Jenkins
                </h4>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  VP of HR • Spotify
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-300 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="relative z-10 flex justify-between text-xs text-slate-500 font-medium tracking-wide">
          <p>© 2024 Dejob Venture.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* --- RIGHT: FORM SECTION (Clean & Modern) --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        {/* Mobile Header (Visible only on small screens) */}
        <div className="absolute top-6 left-6 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
              DJ
            </div>
            <span className="text-xl font-bold text-slate-900">Dejob.</span>
          </Link>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[420px] bg-white lg:bg-transparent rounded-3xl lg:rounded-none shadow-2xl lg:shadow-none p-8 lg:p-0 border lg:border-none border-slate-100">
          <Outlet />
        </div>

        {/* Decorative Background for Right Side */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
