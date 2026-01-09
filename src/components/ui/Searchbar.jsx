import React from "react";
import {
  Search,
  MapPin,
  SlidersVertical,
  ChevronDown,
} from "@/components/icons";
const Searchbar = () => {
  return (
    <>
      {" "}
      {/* Search Bar */}
      <div className="bg-white mx-auto p-2 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center gap-2">
        {/* Keyword Input */}
        <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Location Input */}
        <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
          <MapPin className="w-5 h-5 text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Berlin, Germany"
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Distance/Filter */}
        <div className="w-full md:w-auto flex items-center px-4 py-3 justify-between md:justify-start gap-2">
          <div className="flex items-center text-gray-500 text-sm gap-2">
            <SlidersVertical className="w-5 h-5" />

            <span>Upto 15 miles</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-brand-green text-white px-8 py-3 rounded md:rounded-md w-full md:w-auto font-medium hover:bg-lime-600 transition">
          Search
        </button>
      </div>
    </>
  );
};

export default Searchbar;
