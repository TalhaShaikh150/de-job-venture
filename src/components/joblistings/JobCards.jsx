import React, { useState } from "react";
// 1. Import icons from lucide-react
import { 
  Search, 
  MapPin, 
  Filter, 
  Clock, 
  Bookmark, 
  Check, 
  ChevronDown,
  Briefcase,
  Globe,
  Banknote, // For Money
  ArrowRight,
  Share2,     // For Share
  Bell
} from "lucide-react";
const JobCards = ({ job }) => {
  return (
    <>
     <div className={`bg-white p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer ${job.featured ? 'border-emerald-200 shadow-lg shadow-emerald-500/5 relative overflow-hidden' : 'border-slate-100 hover:border-emerald-200'}`}>
    
    {job.featured && (
      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
        FEATURED
      </div>
    )}

    <div className="flex justify-between items-start mb-5">
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-1 border border-slate-100 bg-white shadow-sm group-hover:scale-105 transition-transform overflow-hidden`}>
          <img src={job.logo} alt={job.company} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-2 mt-1">
            {job.company} 
            <span className="w-1 h-1 rounded-full bg-slate-300"></span> 
            {/* Updated Location Icon */}
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
          </p>
        </div>
      </div>
      <button className="text-slate-400 hover:text-emerald-500 transition-colors p-2 hover:bg-emerald-50 rounded-full">
        {/* Updated Bookmark Icon */}
        <Bookmark className="w-5 h-5" />
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">{job.type}</span>
      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">{job.salary}</span>
      {job.tags.map((tag, idx) => (
        <span key={idx} className="px-3 py-1 bg-white text-emerald-600 text-xs font-bold rounded-lg border border-emerald-500/20">{tag}</span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
        {/* Updated Clock Icon */}
        <Clock className="w-4 h-4" /> {job.posted}
      </span>
      <button className="text-sm font-bold text-white bg-[#0F172A] px-6 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors shadow-md">
        Apply Details
      </button>
    </div>
  </div>
      
    </>
  );
};

export default JobCards;
