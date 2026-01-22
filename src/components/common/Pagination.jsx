import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/redux/features/jobs/jobsSlice"; // Adjust path to your slice

const Pagination = ({ totalCount = 0 }) => {
  const dispatch = useDispatch();
  
  // 1. Get pagination state from Redux
  const { page: currentPage, limit } = useSelector((state) => state.jobs.pagination);

  // 2. Calculate total pages
  const totalPages = Math.ceil(totalCount / limit);

  // If there's only 1 page or no data, don't show pagination
  if (totalPages <= 1) return null;

  // 3. Helper to handle page changes
  const onPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  // 4. Logic to generate page numbers (with "..." support)
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page
    pages.push(1);

    // Calculate range around current page
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Add dots before the range if needed
    if (start > 2) {
      pages.push("...");
    }

    // Add the range
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add dots after the range if needed
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mt-12 flex justify-center w-full mx-auto">
      <div className="flex gap-2 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
        
        {/* PREVIOUS BUTTON */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
            currentPage === 1
              ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          Previous
        </button>

        {/* PAGE NUMBERS */}
        {getPageNumbers().map((pageNum, index) => {
          if (pageNum === "...") {
            return (
              <span key={`dots-${index}`} className="px-2 py-2 text-slate-400 text-sm">
                ...
              </span>
            );
          }

          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-brand-green text-white shadow-md font-bold"
                  : "bg-slate-50 border border-slate-100 text-slate-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* NEXT BUTTON */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;  