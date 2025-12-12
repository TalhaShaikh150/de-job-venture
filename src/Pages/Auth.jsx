import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-brand-lightBlue min-h-screen flex flex-col items-center justify-center p-4 font-sans text-brand-accent">
      {/* Brand Logo */}
      <div className="mb-8 text-center cursor-default">
        <h1 className="text-3xl font-heading font-bold tracking-tight  text-black">
          DeJob<span className="text-brand-accent">Venture</span>
        </h1>
      </div>

      {/* Main Auth Card */}
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-card border border-brand-border overflow-hidden">
        
        {/* Login View */}
        {isLogin && (
          <div className="p-8 md:p-10 animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-dark">Welcome Back</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Search, apply, and get hired.
              </p>
            </div>

            {/* Social Auth */}
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold h-12 rounded-full transition-all duration-200 group">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold h-12 rounded-full transition-all duration-200">
                <i className="fa-brands fa-apple text-xl text-black"></i>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">Or Login with Email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-brand-accent rounded-full focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
                <input
                  type="password"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-brand-accent rounded-full focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-sm font-medium text-brand-accent hover:underline">Forgot Password?</a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-green text-white font-bold h-12 rounded-full transition-transform active:scale-[0.98] shadow-md shadow-blue-900/20"
              >
                Log In
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?
              <button
                onClick={() => setIsLogin(false)}
                className="font-bold text-brand-accent hover:underline ml-1"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {/* Sign Up View */}
        {!isLogin && (
          <div className="p-8 md:p-10 animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-dark">Create Account</h2>
              <p className="text-gray-500 mt-2 text-sm">Join DeJobVenture today.</p>
            </div>

            {/* Social Auth */}
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold h-12 rounded-full transition-all duration-200 group">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Sign up with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold h-12 rounded-full transition-all duration-200">
                <i className="fa-brands fa-apple text-xl text-black"></i>
                Sign up with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">Or Sign up with Email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Signup Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-brand-accent rounded-full focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-brand-accent rounded-full focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
                <input
                  type="password"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-brand-accent rounded-full focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-green text-white font-bold h-12 rounded-full transition-transform active:scale-[0.98] shadow-md shadow-blue-900/20"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="mt-6 text-xs text-center text-gray-500">
              By creating an account, you agree to our <br />
              <a href="#" className="text-brand-accent hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-brand-accent hover:underline">Privacy Policy</a>.
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?
              <button
                onClick={() => setIsLogin(true)}
                className="font-bold text-brand-accent hover:underline ml-1"
              >
                Log In
              </button>
            </p>
          </div>
        )}
      </div>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        &copy; 2025 DeJobVenture. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthPage;