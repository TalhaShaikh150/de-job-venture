import React from "react";


const FilterSection = ({ title, options }) => {
  // Mock state for demonstration (you'd lift this up in a real app)
  const [selected, setSelected] = React.useState([options[0]]);

  const toggle = (opt) => {
    setSelected(prev => 
      prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]
    );
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-100 last:border-0">
      <h3 className="text-sm font-bold text-brand-dark mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => {
          const isActive = selected.includes(opt);
          return (
            <button
              key={i}
              onClick={() => toggle(opt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                isActive
                  ? "bg-brand-green border-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default FilterSection