import React from "react";
import Searchbar from "../ui/Searchbar";

const Hero = () => {
  return (
    <>
      {/* ==================== HERO SECTION (RESPONSIVE) ==================== */}
      <header className="relative bg-brand-dark min-h-[500px] lg:min-h-[700px] flex flex-col justify-center py-16 md:py-24 lg:py-32 overflow-hidden">
        
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          {/* Gradient to fade bottom for better transition */}
          <div className="absolute bottom-0 left-0 w-full h-24 lg:h-40 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          <p className="text-gray-400 mb-3 text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase">
            It's simple and smart
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-3xl">
            Search, Find & <span className="text-brand-green">Apply</span>
          </h1>

          {/* Stats Badges - Stack on tiny screens, Row on mobile+ */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8 sm:mb-12 w-full max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full px-4 py-2 flex items-center justify-center gap-3 shadow-sm hover:bg-white/15 transition-colors cursor-default">
              <div className="bg-orange-100 p-1.5 rounded-full text-orange-500 shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                200,036 Jobs
              </span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/5 rounded-full px-4 py-2 flex items-center justify-center gap-3 shadow-sm hover:bg-white/15 transition-colors cursor-default">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-500 shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" /></svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                9,914 Companies
              </span>
            </div>a
          </div>

          {/* Search Bar Wrapper - Width constraint + Mobile padding */}
          <div className="w-full max-w-4xl mx-auto">
            <Searchbar />
          </div>

          {/* Recent Searches Toggle - Optional on mobile to save space */}
          <div className="mt-6 flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <input type="checkbox" id="recent" className="rounded border-gray-600 bg-transparent text-brand-green focus:ring-0 cursor-pointer w-4 h-4" />
            <label htmlFor="recent" className="cursor-pointer hover:text-white transition select-none">
              View Recent Searches
            </label>
          </div>

        </div>
      </header>
    </>
  );
};

export default Hero;