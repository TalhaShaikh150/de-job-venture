import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/redux/features/jobs/jobsSlice";

const FilterSection = ({ title, options, filterKey, isMulti = false }) => {
  const dispatch = useDispatch();

  // 1. Safe Selector: Defaults to [] or "" if undefined in Redux
  const currentSelection = useSelector((state) => {
    const val = state.jobs.filters[filterKey];
    // Return appropriate default based on isMulti
    if (val === undefined || val === null) return isMulti ? [] : "";
    return val;
  });

  const toggle = (opt) => {
    let newValue;

    if (isMulti) {
      // ARRAY LOGIC (Multi-select)
      // Ensure currentSelection is an array before spreading
      const currentArray = Array.isArray(currentSelection) ? currentSelection : [];
      
      if (currentArray.includes(opt)) {
        newValue = currentArray.filter((i) => i !== opt); // Remove
      } else {
        newValue = [...currentArray, opt]; // Add
      }
    } else {
      // STRING LOGIC (Single-select)
      newValue = currentSelection === opt ? "" : opt;
    }

    dispatch(setFilter({ name: filterKey, value: newValue }));
  };

  // If no options exist (e.g. database is empty), hide this section
  if (!options || options.length === 0) return null;

  return (
    <div className="mb-8 pb-6 border-b border-gray-100 last:border-0">
      <h3 className="text-sm font-bold text-brand-dark mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => {
          
          // Determine active state safely
          const isActive = isMulti 
            ? Array.isArray(currentSelection) && currentSelection.includes(opt)
            : currentSelection === opt;

          return (
            <button
              key={i}
              onClick={() => toggle(opt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                isActive
                  ? "bg-brand-green border-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {opt} {/* Display name */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;