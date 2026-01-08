import React from "react";

function SignUp({ toggle, setToggle }) {
  return (
    <div
      id="signup-container"
      className={`p-8 md:p-10 fade-enter ${toggle === "login" ? "hidden" : ""}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
        <p className="text-slate-500 mt-2 text-sm">Join DeJobVenture today.</p>
      </div>

      {/* <!-- Social Auth --> */}
      <div className="space-y-3 mb-8">
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-semibold h-12 rounded-full transition-all duration-200 group">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Sign up with Google
        </button>
      </div>

      {/* <!-- Divider --> */}
      <div className="relative flex py-2 items-center mb-6">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">
          Or Sign up with Email
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* <!-- Signup Form --> */}
      <form action="#" onSubmit={() => {}} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-5 py-3 bg-white border border-gray-300 text-slate-900 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
            placeholder="e.g. John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-5 py-3 bg-white border border-gray-300 text-slate-900 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-5 py-3 bg-white border border-gray-300 text-slate-900 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
            placeholder="Create a password"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold h-12 rounded-full transition-transform active:scale-[0.98] shadow-md shadow-blue-500/20"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6 text-xs text-center text-slate-500">
        By creating an account, you agree to our <br />
        <a href="#" className="text-brand-blue hover:underline">
          Terms of Service
        </a>
        and
        <a href="#" className="text-brand-blue hover:underline">
          Privacy Policy
        </a>
        .
      </div>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?
        <button
          onClick={() => setToggle("login")}
          className="font-bold text-brand-blue hover:underline ml-1"
        >
          Log In
        </button>
      </p>
    </div>
  );
}

export default SignUp;
