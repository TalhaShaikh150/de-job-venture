import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Welcome back!</h1>
        <p className="text-slate-500">Enter your credentials to access your account.</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address</label>
          <input 
            type="email" 
            className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300"
            placeholder="name@company.com"
          />
        </div>
        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-dark focus:ring-brand-dark" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <Link to="/auth/forgot-password" className="text-sm font-bold text-brand-green hover:underline">Recover password</Link>
        </div>

        <button className="w-full py-4 bg-brand-dark hover:bg-brand-green text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
          Sign In
        </button>

        <button className="w-full py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="G" />
          Sign in with Google
        </button>
      </form>

      <div className="mt-10 text-center border-t border-slate-100 pt-6">
        <p className="text-slate-500">
          Don't have an account? <Link to="/signup" className="text-brand-dark font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;