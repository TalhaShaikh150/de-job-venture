import React from "react";

const JobSorting = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <p className="text-slate-500 text-sm mb-2 sm:mb-0">
          Showing <span className="font-bold text-slate-900">284</span> jobs
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-slate-500 whitespace-nowrap">
            Sort by:
          </span>
          <select className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 outline-none cursor-pointer font-medium">
            <option>Recommended</option>
            <option>Newest</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default JobSorting;
