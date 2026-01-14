import React, { useState } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("what"); // 'what' or 'where' for Mobile

  return (
    <div className="w-full max-w-4xl mx-auto font-sans relative z-20">
      
      {/* ================= DESKTOP VIEW (Single Row Glass) ================= */}
      <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-2xl">
        
        {/* Keywords */}
        <div className="flex-1 relative group border-r border-white/10 px-4">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-green" />
           <input 
             type="text" 
             placeholder="Job title, skills, or company" 
             className="w-full pl-10 pr-4 py-3 bg-transparent outline-none text-white placeholder:text-white/60 font-medium"
           />
        </div>

        {/* Location */}
        <div className="flex-1 relative group px-4">
           <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-green" />
           <input 
             type="text" 
             placeholder="City, state, or remote" 
             className="w-full pl-10 pr-4 py-3 bg-transparent outline-none text-white placeholder:text-white/60 font-medium"
           />
        </div>

        {/* Search Button */}
        <button className="bg-brand-green hover:bg-white hover:text-brand-dark text-brand-dark font-bold px-8 py-3 rounded-full transition-all shadow-lg shadow-brand-green/20">
           Search
        </button>

      </div>


      {/* ================= MOBILE VIEW (Tabbed & Compact) ================= */}
      <div className="md:hidden bg-[#161F33]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
         
         {/* Tabs */}
         <div className="flex bg-black/20 p-1 rounded-xl mb-4">
            <button 
              onClick={() => setActiveTab("what")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'what' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              What
            </button>
            <button 
              onClick={() => setActiveTab("where")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'where' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Where
            </button>
         </div>

         {/* Dynamic Input Area */}
         <div className="relative mb-4 h-12">
            
            {/* Input: WHAT */}
            <div className={`absolute inset-0 transition-all duration-300 ${activeTab === 'what' ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 -translate-x-4'}`}>
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green"><Search className="w-5 h-5"/></div>
               <input 
                 type="text" 
                 placeholder="Software Engineer..." 
                 className="w-full h-full pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-brand-green transition-colors"
               />
            </div>

            {/* Input: WHERE */}
            <div className={`absolute inset-0 transition-all duration-300 ${activeTab === 'where' ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-4'}`}>
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green"><MapPin className="w-5 h-5"/></div>
               <input 
                 type="text" 
                 placeholder="Berlin, Germany..." 
                 className="w-full h-full pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-brand-green transition-colors"
               />
            </div>

         </div>

         {/* Bottom Actions */}
         <div className="flex gap-3">
            <button className="flex-1 bg-brand-green text-brand-dark font-bold py-3 rounded-xl shadow-lg shadow-brand-green/20 active:scale-95 transition-transform">
               Search Jobs
            </button>
          
         </div>

      </div>

    </div>
  );
};

export default SearchBar;