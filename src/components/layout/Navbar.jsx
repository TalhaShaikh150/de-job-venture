import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Desktop Link Style
  const desktopLinkClass = ({ isActive }) =>
    `h-full flex items-center px-2 text-sm font-medium border-b-2 transition-all duration-300 ${
      isActive
        ? "border-brand-green text-white drop-shadow-[0_0_8px_rgba(107,197,81,0.5)]"
        : "border-transparent text-gray-400 hover:text-white hover:border-white/20"
    }`;

  // Mobile Link Style
  const mobileLinkClass = ({ isActive }) =>
    `text-3xl font-bold transition-all duration-300 transform ${
      isActive
        ? "text-brand-green translate-x-4"
        : "text-gray-400 hover:text-white hover:translate-x-2"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#161F33] backdrop-blur-sm">
        {/* --- HEADER CONTENT (ALWAYS ON TOP) --- */}
        <div className="container mx-auto px-6 h-20 flex justify-between items-center relative z-50 bg-[#161F33]/0">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-wide flex items-center gap-2"
          >
            DEJOB<span className="text-brand-green">.</span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-10 h-full">
            <NavLink to="/" className={desktopLinkClass}>
              Home
            </NavLink>
            <NavLink to="/listing" className={desktopLinkClass}>
              Find Jobs
            </NavLink>
            <NavLink to="/about" className={desktopLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/salaries" className={desktopLinkClass}>
              Salaries
            </NavLink>
          </div>

          {/* Desktop Auth (Hidden on Mobile) */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/login" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Sign In</Link>
            <Link 
              to="/post-job" 
              className="px-6 py-3 bg-brand-green text-white font-bold rounded hover:bg-lime-600 transition"
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/post-job"
              className="bg-brand-green hover:bg-emerald-600 text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all"
            >
              Register
            </Link>
          </div>

          {/* Hamburger Button (Visible on Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none w-8 h-8 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-6 h-5 relative">
              <span
                className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* --- MOBILE FULL SCREEN OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-[#161F33] z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out md:hidden ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-10"
          }`}
          style={{ height: "100vh", width: "100vw" }} // Force full viewport coverage
        >
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Menu Items Container - Added pt-20 to push content down below header */}
          <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm mx-auto pt-20">
            <NavLink to="/" className={mobileLinkClass}>
              Home
            </NavLink>
            <NavLink to="/listing" className={mobileLinkClass}>
              Find Jobs
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/salaries" className={mobileLinkClass}>
              Salaries
            </NavLink>
            <NavLink to="/career-advice" className={mobileLinkClass}>
              Career Advice
            </NavLink>

            {/* Mobile Auth Actions */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
              <Link
                to="/post-job"
                className="w-full py-4 bg-brand-green text-white text-center font-bold text-lg rounded-xl shadow-lg shadow-brand-green/20 active:scale-95 transition-transform"
              >
                Post a Job
              </Link>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-gray-500 text-sm">Have an account?</span>
                <Link
                  to="/login"
                  className="text-white font-bold text-sm underline decoration-brand-green decoration-2 underline-offset-4"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
