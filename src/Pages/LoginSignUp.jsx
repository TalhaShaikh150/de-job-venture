import React, { useState } from "react";
import { Login, SignUp } from "../components/ui";

function LoginSignUp() {
  const [toggle, setToggle] = useState("login");

  return (
    <div className="min-h-screen flex bg-white font-sans">
      
      {/* --- LEFT: FORM SECTION (Dynamic Content) --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 transition-all duration-500 ease-in-out">
        <div className="w-full max-w-md mx-auto">
          
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-12 lg:hidden">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-sm">DJ</div>
            <span className="text-xl font-bold text-slate-900">Dejob.</span>
          </div>

          {/* Dynamic Form Render */}
          {toggle === "login" ? (
            <Login toggle={toggle} setToggle={setToggle} />
          ) : (
            <SignUp toggle={toggle} setToggle={setToggle} />
          )}

        </div>
      </div>

      {/* --- RIGHT: IMAGE SECTION (Static & Beautiful) --- */}
      <div className="hidden lg:block w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Office" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#161F33]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-16">
           <blockquote className="text-3xl font-bold text-white leading-relaxed mb-6">
             "We found our lead engineer on Dejob in less than 48 hours. The quality of candidates is unmatched."
           </blockquote>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-brand-dark">A</div>
              <div>
                 <p className="text-white font-bold">Alice M.</p>
                 <p className="text-slate-300 text-sm">HR Director, Airbnb</p>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
}

export default LoginSignUp;