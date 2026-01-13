import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, User } from "lucide-react";
import LogoImage from "@/assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Mobile Menu on Route Change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Desktop Link Styles
  // ADDED: 'whitespace-nowrap' to prevent line breaking
  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
      isActive
        ? "bg-white text-brand-dark shadow-md font-bold transform scale-105"
        : "text-slate-400 hover:text-white hover:bg-white/5"
    }`;

  // Mobile Link Styles
  const mobileLinkClass = ({ isActive }) =>
    `text-4xl font-extrabold tracking-tight transition-all duration-300 ${
      isActive ? "text-brand-green" : "text-white hover:text-slate-300"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
        
        {/* === FLOATING NAV CONTAINER === */}
        <nav
          className={`
            pointer-events-auto
            grid grid-cols-3 items-center 
            bg-[#161F33]/90 backdrop-blur-2xl border border-white/10 shadow-2xl
            transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${
              isScrolled
                ? "w-full max-w-[1200px] rounded-full px-5 py-3 shadow-brand-dark/50" // Made wider (1200px)
                : "w-full max-w-[1500px] rounded-2xl px-8 py-5"
            }
          `}
        >
          {/* --- 1. LEFT: PROMINENT LOGO --- */}
          <div className="flex justify-start min-w-0"> {/* min-w-0 prevents flex items from overflowing */}
            <Link to="/" className="group relative z-10 block">
              {/* White Container for Contrast + Glow */}
              <div 
                className={`
                  bg-white rounded-xl flex items-center justify-center 
                  transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] 
                  group-hover:shadow-[0_0_25px_rgba(107,197,81,0.4)] group-hover:scale-105
                  ${isScrolled ? 'h-10 px-4' : 'h-14 px-6'}
                `}
              >
                <img
                  src={LogoImage}
                  alt="Dejob"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* --- 2. CENTER: SYMMETRICAL NAVIGATION --- */}
          {/* Using flex-shrink-0 to ensure this section refuses to shrink below its content size */}
          <div className="hidden md:flex justify-center shrink-0">
            <div className={`
              flex items-center gap-1 bg-black/20 rounded-full border border-white/5 backdrop-blur-md transition-all duration-300
              ${isScrolled ? 'p-1' : 'p-1.5'}
            `}>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/listing" className={navLinkClass}>
                Find Jobs
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* --- 3. RIGHT: AUTH ACTIONS --- */}
          <div className="hidden md:flex justify-end items-center gap-3 lg:gap-4 min-w-0">
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <User className="w-4 h-4" />
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`
                bg-brand-green text-brand-dark hover:bg-white hover:text-brand-dark 
                text-sm font-bold rounded-full transition-all duration-300 
                flex items-center gap-2 shadow-lg shadow-brand-green/20 whitespace-nowrap
                ${isScrolled ? 'px-5 py-2.5' : 'px-8 py-3.5'}
              `}
            >
              Get Started <ArrowRight className="w-4 h-4 hidden lg:block" />
            </Link>
          </div>

          {/* MOBILE TOGGLE (Hidden on Desktop) */}
          <div className="md:hidden flex justify-end col-span-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors border border-white/5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-40 bg-[#161F33] transition-all duration-500 md:hidden flex flex-col justify-between px-8 pb-12 pt-36 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-10 pointer-events-none"
        }`}
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Links */}
        <div className="flex flex-col gap-8 relative z-10">
          <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
          <NavLink to="/listing" className={mobileLinkClass}>Find Jobs</NavLink>
          <NavLink to="/about" className={mobileLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
        </div>

        {/* Mobile Footer */}
        <div className="space-y-4">
          <Link
            to="/signup"
            className="w-full flex justify-center items-center gap-2 bg-brand-green text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-green/20 text-lg"
          >
            Create Account
          </Link>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span>Already have an account?</span>
            <Link to="/login" className="text-white font-bold underline decoration-brand-green underline-offset-4">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;