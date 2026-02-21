import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  User,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";
import LogoImage from "@/assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 1. Scroll Detection (Only for background style, NOT size)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Close Menu on Route Change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [location]);

  // 3. Toggle Logic
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  // --- STYLES ---
  const navLinkDesktop = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
      isActive
        ? "bg-white text-brand-dark shadow-md scale-105"
        : "text-slate-400 hover:text-white hover:bg-white/5"
    }`;

  // Mobile Link Style
  const navLinkMobile = ({ isActive }) =>
    `text-3xl font-bold flex items-center justify-between py-3 border-b border-white/5 transition-all duration-300 ${
      isActive ? "text-brand-green pl-2" : "text-white hover:text-slate-300"
    }`;

  return (
    <>
      {/* 
        ================================================================
        1. THE NAVBAR (FIXED HEIGHT)
        - Mobile Height: h-20 (80px)
        - Desktop Height: h-24 (96px)
        - NO shrinking classes added based on scroll
        ================================================================ 
      */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 border-b border-white/5
          h-20 md:h-24 
          ${isScrolled || isOpen ? "bg-[#161F33]/95 backdrop-blur-xl shadow-2xl" : "bg-[#161F33]"}
        `}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* --- LEFT: LOGO --- */}
          <div className="flex-1 flex items-center justify-start gap-4 md:gap-6">
            {/* REPLACE YOUR <img ... /> TAG WITH THIS: */}
<Link to="/" className="flex-shrink-0 group z-[101]" onClick={closeMenu}>
  <div className="flex flex-col items-center justify-center leading-none select-none">
    {/* The Monogram */}
    <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center gap-0.5">
      <span className="text-white drop-shadow-md">D</span>
      <span className="text-brand-green drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">J</span>
      <span className="text-white drop-shadow-md">V</span>
    </h1>
    
    {/* The Full Name */}
    <div className="flex items-center gap-1.5 mt-0.5">
      <div className="h-[1px] w-3 bg-brand-green/50"></div>
      <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
        DE JOB VENTURE
      </span>
      <div className="h-[1px] w-3 bg-brand-green/50"></div>
    </div>
  </div>
</Link>

            {/* Socials (Desktop Only) */}
            <div
              className={`hidden lg:flex items-center gap-3 pl-6 border-l border-white/10 transition-opacity duration-300 ${isScrolled ? "opacity-50" : "opacity-100"}`}
            >
              <a
                href="#"
                className="text-slate-400 hover:text-brand-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-brand-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-brand-green transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* --- CENTER: DESKTOP NAV --- */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-1 bg-[#0f1624] rounded-full border border-white/5 shadow-inner p-1.5">
              <NavLink to="/" className={navLinkDesktop}>
                Home
              </NavLink>
              <NavLink to="/listing" className={navLinkDesktop}>
                Jobs
              </NavLink>
              <NavLink to="/about" className={navLinkDesktop}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkDesktop}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
              <User className="w-4 h-4" /> <span>Sign In</span>
            </Link>

            <Link
              to="/signup"
              className="hidden md:flex bg-brand-green hover:bg-white hover:text-brand-dark text-brand-dark font-bold text-xs rounded-full transition-all items-center gap-2 shadow-lg shadow-brand-green/10 px-6 py-3"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>

            {/* MOBILE TOGGLE (Fixed Position) */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-[101] bg-white/10 text-white p-2.5 rounded-full hover:bg-white/20 transition-colors border border-white/5 active:scale-95"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 
        ================================================================
        2. MOBILE MENU OVERLAY
        - Padding top matches the Navbar height exactly (pt-20 / pt-24)
        ================================================================ 
      */}
      <div
        className={`
          fixed inset-0 z-[90] bg-[#161F33] flex flex-col pt-20 md:pt-24
          transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}
        `}
      >
        {/* Background Decor */}
        <div
          className={`absolute top-0 right-0 w-full h-[50vh] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}
        ></div>

        {/* --- MOBILE LINKS --- */}
        <div className="flex-1 px-6 pt-8 flex flex-col gap-2 overflow-y-auto">
          {["Home", "Find Jobs", "About Us", "Contact"].map((item, idx) => {
            const path =
              item === "Home"
                ? "/"
                : item === "Find Jobs"
                  ? "/listing"
                  : `/${item.split(" ")[0].toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={path}
                onClick={closeMenu}
                className={navLinkMobile}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                  transform: isOpen ? "translateY(0)" : "translateY(10px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item}
                <ChevronRight className="w-5 h-5 text-white/20" />
              </NavLink>
            );
          })}
        </div>

        {/* --- MOBILE FOOTER --- */}
        <div
          className={`p-6 pb-10 space-y-4 bg-black/20 border-t border-white/5 transition-all duration-500 delay-200 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Link
            to="/signup"
            onClick={closeMenu}
            className="w-full bg-brand-green text-brand-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            Create Account
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center justify-center py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 active:bg-white/10"
            >
              Log In
            </Link>
            <Link
              to="/post-job"
              onClick={closeMenu}
              className="flex items-center justify-center py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 active:bg-white/10"
            >
              Employers
            </Link>
          </div>

          {/* Mobile Socials */}
          <div className="flex justify-center gap-6 pt-4 text-slate-400">
            <Instagram className="w-6 h-6 hover:text-brand-green transition-colors" />
            <Twitter className="w-6 h-6 hover:text-brand-green transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-brand-green transition-colors" />
          </div>
        </div>
      </div>

      {/* 
        3. LAYOUT SPACER 
        Pushes content down by h-20 (Mobile) or h-24 (Desktop)
        so the first section isn't hidden.
      */}
      <div className="h-20 md:h-24 w-full"></div>
    </>
  );
};

export default Navbar;
