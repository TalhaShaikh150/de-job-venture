import React from "react";
import Searchbar from "@/components/ui/Searchbar";
import { ChartNoAxesCombined, Building2 } from "@/components/icons";
const Hero = () => {
  return (
    <header
      className="relative bg-brand-dark w-full flex flex-col items-center overflow-hidden
      /* Mobile & Laptop Height Control */
      min-h-[480px] 
      h-[60vh] 
      
      /* 2XL Screen Height Control (Limit to 75% of viewport so slider shows) */
      2xl:h-[75vh] 
      2xl:max-h-[900px]

      /* Center Content */
      justify-center
      pt-20 pb-10
    "
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent"></div> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-gray-400 mb-2 text-xs sm:text-sm 2xl:text-base font-medium tracking-wide uppercase">
          It's simple and smart
        </p>

        {/* Responsive Font Sizing: Smaller on laptop, Larger on 2XL */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white mb-6 2xl:mb-10 leading-tight max-w-4xl">
          Search, Find & <span className="text-brand-green">Apply</span>
        </h1>

        {/* Stats Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 2xl:mb-12 w-full">
          <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full px-3 py-1.5 2xl:px-5 2xl:py-2.5 flex items-center justify-center gap-2 shadow-sm cursor-default">
            <div className="bg-orange-100 p-1 2xl:p-1.5 rounded-full text-orange-500 shrink-0">
              <ChartNoAxesCombined className="w-5 h-5 2xl:w-6 2xl:h-6" />
            </div>
            <span className="text-white text-xs 2xl:text-sm font-medium whitespace-nowrap">
              200,036 Jobs
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full px-3 py-1.5 2xl:px-5 2xl:py-2.5 flex items-center justify-center gap-2 shadow-sm cursor-default">
            <div className="bg-blue-100 p-1 2xl:p-1.5 rounded-full text-blue-500 shrink-0">
              <Building2 className="w-5 h-5 2xl:w-6 2xl:h-6" />
            </div>
            <span className="text-white text-xs 2xl:text-sm font-medium whitespace-nowrap">
              9,914 Companies
            </span>
          </div>
        </div>

        {/* Search Bar Wrapper */}
        <div className="w-full max-w-3xl 2xl:max-w-5xl mx-auto">
          <Searchbar />
        </div>
      </div>
    </header>
  );
};

export default Hero;
