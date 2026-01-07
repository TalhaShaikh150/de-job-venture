import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="mt-12 flex justify-center w-full mx-auto">
        <div className="flex gap-2 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
          <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:border-slate-300 text-sm font-medium">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-brand-green text-white font-bold shadow-md text-sm">
            1
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors text-sm font-medium">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors text-sm font-medium">
            3
          </button>
          <span className="px-2 py-2 text-slate-400 text-sm">...</span>
          <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:border-slate-300 text-sm font-medium">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
