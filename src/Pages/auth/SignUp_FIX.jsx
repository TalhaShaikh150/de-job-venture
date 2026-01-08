import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
       <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Create Account</h1>
        <p className="text-slate-500">Start your journey with Dejob today.</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
           <div className="group">
             <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">First Name</label>
             <input type="text" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all" placeholder="John" />
           </div>
           <div className="group">
             <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Last Name</label>
             <input type="text" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all" placeholder="Doe" />
           </div>
        </div>

        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300" placeholder="name@company.com" />
        </div>

        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Password</label>
          <input type="password" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300" placeholder="Create a password" />
        </div>

        <button className="w-full py-4 bg-brand-dark hover:bg-brand-green text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
          Create Account
        </button>

        <button className="w-full py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="G" />
          Sign up with Google
        </button>
      </form>


      <div className="mt-10 text-center border-t border-slate-100 pt-6">
        <p className="text-slate-500">
          Already have an account? <Link to="/login" className="text-brand-dark font-bold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  
  );
}

export default SignUp;