import React from "react";
import Searchbar from "@/components/ui/Searchbar";

const JobHeader = () => {
  return (
    <>
    {/* --- HEADER SEARCH --- */}
<div className="relative bg-[#0F172A] overflow-hidden pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32">
  
  {/* Header Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      alt="Modern Corporate Architecture"
      className="w-full h-full object-cover opacity-20 mix-blend-overlay"
    />
    {/* Gradient Overlay for Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
  </div>

  <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[120px] -mr-20 -mt-20 z-0"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 sm:mb-12 tracking-tight leading-tight">
      Find your next role in{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
        Germany
      </span>
    </h1>

    {/* Search Bar */}
     <Searchbar/>
    
  </div>
</div>
    </>
  );
};

export default JobHeader;
