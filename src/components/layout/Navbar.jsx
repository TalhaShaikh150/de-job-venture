import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/backend/config"; 
import {
  Menu, X, User, ChevronRight, LogOut, ChevronDown, ArrowRight
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Auth States
  const [user, setUser] = useState(null);
  
  // Initialize with cached values
  const [dbName, setDbName] = useState(() => localStorage.getItem("djv_user_name")); 
  const [avatarUrl, setAvatarUrl] = useState(() => localStorage.getItem("djv_user_avatar"));

  const [loading, setLoading] = useState(true); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   // 2. Auth Logic & Live Updates
  useEffect(() => {
    let mounted = true;

    // Helper to fetch profile data from DB (Background sync)
    const fetchProfileData = async (userId) => {
      try {
        const { data } = await supabase
          .from('profiles')
          .select('first_name, last_name, avatar_url')
          .eq('id', userId)
          .single();
          
        if (mounted && data) {
          const full = `${data.first_name || ""} ${data.last_name || ""}`.trim();
          if (full) {
            setDbName(full);
            localStorage.setItem("djv_user_name", full);
          }
          
          // Sync Avatar
          if (data.avatar_url) {
            setAvatarUrl(data.avatar_url);
            localStorage.setItem("djv_user_avatar", data.avatar_url);
          }
        }
      } catch (err) { console.error(err); }
    };

    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (mounted) {
          const currentUser = session?.user ?? null;
          setUser(currentUser);
          setLoading(false); 

          if (currentUser) {
            fetchProfileData(currentUser.id);
          } else {
            // Logout cleanup
            localStorage.removeItem("djv_user_name");
            localStorage.removeItem("djv_user_avatar");
            setDbName(null);
            setAvatarUrl(null);
          }
        }
      } catch (error) { if (mounted) setLoading(false); }
    };

    checkSession();

    // Listen for Auth Changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      const currentUser = session?.user ?? null;
      setUser(prev => (prev?.id === currentUser?.id ? prev : currentUser));
      
      if (currentUser) {
        fetchProfileData(currentUser.id);
      } else {
        setDbName(null);
        setAvatarUrl(null);
        localStorage.removeItem("djv_user_name");
        localStorage.removeItem("djv_user_avatar");
      }
      setLoading(false);
    });

    // 🚀 LIVE LISTENER: Update INSTANTLY when ProfilePage saves
    const handleProfileUpdate = (event) => {
      // 1. Instant Avatar Update (from CustomEvent payload)
      if (event.detail && event.detail.avatar_url) {
        setAvatarUrl(event.detail.avatar_url);
        localStorage.setItem("djv_user_avatar", event.detail.avatar_url);
      }

      // 2. Background refresh for Name/Other data
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) fetchProfileData(session.user.id);
      });
    };

    window.addEventListener("profileUpdated", handleProfileUpdate);

    return () => { 
      mounted = false; 
      subscription.unsubscribe(); 
      window.removeEventListener("profileUpdated", handleProfileUpdate);
    };
  }, []);
  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsUserMenuOpen(false);
    setDbName(null);
    setAvatarUrl(null);
    localStorage.removeItem("djv_user_name");
    localStorage.removeItem("djv_user_avatar");
    setUser(null);
    navigate("/"); 
  };

  // Name Resolution
  const displayName = dbName || user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";
  const initials = displayName ? displayName.charAt(0).toUpperCase() : "U";

  // Styles
  const navLinkDesktop = ({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isActive ? "bg-white text-brand-dark shadow-md scale-105" : "text-slate-400 hover:text-white hover:bg-white/5"}`;
  const navLinkMobile = ({ isActive }) => `text-3xl font-bold flex items-center justify-between py-3 border-b border-white/5 transition-all duration-300 ${isActive ? "text-brand-green pl-2" : "text-white hover:text-slate-300"}`;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 border-b border-white/5 h-20 md:h-24 
        ${isScrolled || isOpen ? "bg-[#161F33]/95 backdrop-blur-xl shadow-2xl" : "bg-[#161F33]"}`}>
        
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex-1 flex items-center justify-start gap-4 md:gap-6">
            <Link to="/" className="flex-shrink-0 group z-[101]">
              <div className="flex flex-col items-center justify-center leading-none select-none">
                <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center gap-0.5">
                  <span className="text-white drop-shadow-md">D</span>
                  <span className="text-brand-green drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">J</span>
                  <span className="text-white drop-shadow-md">V</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-1 bg-[#0f1624] rounded-full border border-white/5 shadow-inner p-1.5">
              <NavLink to="/" className={navLinkDesktop}>Home</NavLink>
              <NavLink to="/listing" className={navLinkDesktop}>Jobs</NavLink>
              <NavLink to="/about" className={navLinkDesktop}>About</NavLink>
              <NavLink to="/contact" className={navLinkDesktop}>Contact</NavLink>
            </div>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex-1 flex items-center justify-end gap-4">
            
            {loading ? (
              <div className="hidden md:block w-32 h-10 opacity-0"></div>
            ) : user ? (
              // --- LOGGED IN (DESKTOP) ---
              <div className="hidden md:flex relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-3 pl-1 pr-4 py-1 rounded-full border transition-all duration-200 group
                    ${isUserMenuOpen 
                      ? "bg-brand-green/10 border-brand-green text-white" 
                      : "bg-[#0f1624] border-white/10 text-slate-300 hover:border-white/20 hover:text-white"}
                  `}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-green overflow-hidden flex items-center justify-center text-[#161F33] font-bold text-xs">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      initials
                    )}
                  </div>
                  <span className="text-sm font-bold max-w-[120px] truncate capitalize">
                    {displayName}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-3 w-64 bg-[#1F2937] border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                    <div className="p-4 border-b border-gray-700">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Account</p>
                      <p className="text-sm font-bold text-white truncate capitalize">{displayName}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    <div className="p-2">
                        <Link to="/profile" className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <User size={16} /> My Profile
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors text-left">
                          <LogOut size={16} /> Log Out
                        </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // --- LOGGED OUT (DESKTOP) ---
              <div className="hidden md:flex items-center gap-4">
                <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-brand-green hover:bg-white hover:text-brand-dark text-brand-dark font-bold text-xs rounded-full px-5 py-2.5 flex items-center gap-2 transition-all shadow-lg shadow-brand-green/10">
                  Create an account <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-[101] bg-white/10 text-white p-2.5 rounded-full hover:bg-white/20">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[90] bg-[#161F33] flex flex-col pt-20 md:pt-24 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}`}>
         <div className="flex-1 px-6 pt-8 flex flex-col gap-2 overflow-y-auto">
             {["Home", "Find Jobs", "About Us", "Contact"].map((item) => (
               <NavLink 
                 key={item} 
                 to={item === "Home" ? "/" : item === "Find Jobs" ? "/listing" : `/${item.split(" ")[0].toLowerCase()}`} 
                 onClick={() => setIsOpen(false)} 
                 className={navLinkMobile}
               >
                 {item} <ChevronRight className="w-5 h-5 text-white/20" />
               </NavLink>
             ))}
         </div>

         <div className="p-6 pb-10 space-y-4 bg-black/20 border-t border-white/5">
            {loading ? (
                <div className="w-full h-14 bg-white/5 rounded-xl animate-pulse" />
            ) : user ? (
                <div className="flex items-center justify-between p-2 rounded-2xl bg-white/5 border border-white/10">
                    <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group pl-2 w-full">
                        <div className="w-10 h-10 rounded-full bg-brand-green overflow-hidden flex items-center justify-center text-[#161F33] font-bold text-sm shadow-lg group-active:scale-95 transition-transform">
                            {avatarUrl ? (
                              <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                              initials
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm leading-tight max-w-[140px] truncate capitalize">{displayName}</span>
                            <span className="text-[10px] text-brand-green font-medium">View Profile</span>
                        </div>
                    </Link>
                    <button onClick={handleLogout} className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 active:bg-red-500/20 transition-colors mr-1 shrink-0">
                        <LogOut size={18} />
                    </button>
                </div>
            ) : (
                <>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full bg-brand-green text-brand-dark font-bold text-lg py-4 rounded-xl flex items-center justify-center">Create Account</Link>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="w-full bg-white/5 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center border border-white/10">Sign In</Link>
                </>
            )}
         </div>
      </div>

      <div className="h-20 md:h-24 w-full"></div>
    </>
  );
};

export default Navbar;