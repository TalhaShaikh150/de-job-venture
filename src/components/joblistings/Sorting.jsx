import React from "react";
import { ChevronDown } from "@/components/icons";
import Loader from "@/components/common/Loader";

const JobSorting = ({ jobLength }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm gap-4 transition-all hover:shadow-md">
      {/* Job Count */}
      <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
        Showing{" "}
        <span className="items-center font-bold text-slate-900">
          {jobLength == 0 ? <Loader size="w-6 h-6" /> : jobLength}
        </span>{" "}
        jobs
      </p>

      {/* Sort Controls */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <span className="text-sm text-slate-400 font-medium whitespace-nowrap hidden sm:inline-block">
          Sort by:
        </span>

        <div className="relative w-full sm:w-48 group">
          <select className="appearance-none w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all cursor-pointer">
            <option>Recommended</option>
            <option>Newest</option>
            <option>Salary (High to Low)</option>
            <option>Salary (Low to High)</option>
          </select>

          {/* Custom Icon */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors">
            <ChevronDown size={16} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSorting;
