import React from "react";

const JobCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
      
      {/* --- HEADER SKELETON --- */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex gap-4 w-full">
          
          {/* Logo Placeholder */}
          <div className="w-14 h-14 rounded-xl bg-slate-200 animate-pulse shrink-0" />
          
          {/* Title & Info Placeholder */}
          <div className="flex-1 space-y-2 py-1">
            {/* Title Line */}
            <div className="h-5 bg-slate-200 rounded-md w-3/4 animate-pulse" />
            {/* Subtitle Line (Company/Loc) */}
            <div className="h-4 bg-slate-100 rounded-md w-1/2 animate-pulse" />
          </div>
        </div>

        {/* Bookmark Circle */}
        <div className="w-9 h-9 rounded-full bg-slate-100 animate-pulse shrink-0" />
      </div>

      {/* --- TAGS ROW SKELETON --- */}
      <div className="flex flex-wrap gap-2 mb-5">
        <div className="h-7 w-20 bg-slate-100 rounded-lg animate-pulse" />
        <div className="h-7 w-24 bg-slate-100 rounded-lg animate-pulse" />
        <div className="h-7 w-16 bg-slate-100 rounded-lg animate-pulse" />
      </div>

      {/* --- SKILLS ROW SKELETON --- */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        <div className="h-5 w-14 bg-slate-50 rounded-md animate-pulse" />
        <div className="h-5 w-14 bg-slate-50 rounded-md animate-pulse" />
        <div className="h-5 w-14 bg-slate-50 rounded-md animate-pulse" />
      </div>

      {/* --- FOOTER SKELETON --- */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        {/* Time Text */}
        <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
        
        {/* Button Placeholder */}
        <div className="h-10 w-28 bg-slate-200 rounded-xl animate-pulse" />
      </div>

    </div>
  );
};

export default JobCardSkeleton;