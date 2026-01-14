import React from "react";
import Searchbar from "@/components/ui/Searchbar";

const Hero = () => {
  return (
    <header className="relative w-full min-h-[600px] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Office" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[#161F33]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Find work that <br className="md:hidden"/> matters.
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
          Join 10 million professionals finding jobs, building careers, and hiring talent in Germany.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-4xl mx-auto">
           {/* Adding a subtle glass backdrop behind searchbar for better contrast */}
           <div className="bg-white/5 backdrop-blur-sm p-2 rounded-[2rem] border border-white/10">
              <Searchbar />
           </div>
        </div>

        
      </div>
    </header>
  );
};
export default Hero; 