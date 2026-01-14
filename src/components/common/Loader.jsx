import React from "react";

const Loader = ({ size = "w-5 h-5", color = "border-brand-green" }) => {
  return (
    <span
      className={`inline-block ${size} border-2 border-t-transparent ${color} rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    ></span>
  );
};

export default Loader;
