import React from "react";

const Home = () => {
  return (
    <div className="antialiased font-sans text-brand-dark bg-brand-bg">
      {/* 1. NAVBAR */}
      <nav className="fixed w-full z-50 glass-effect transition-all">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-white shadow-md group-hover:bg-brand-accent transition duration-300">
              <i className="fa-solid fa-layer-group"></i>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-success rounded-full border-2 border-white animate-pulse-green"></div>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-brand-dark tracking-tight leading-none">
                De Job Venture
              </h1>
              <p className="text-[10px] font-medium text-brand-accent uppercase tracking-widest">
                Secure Career Platform
              </p>
            </div>
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-1 bg-white border border-brand-border rounded-xl p-1 shadow-sm">
            <a
              href="#"
              className="px-5 py-2 rounded-lg bg-brand-dark text-white text-sm font-medium transition"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-lg text-gray-600 hover:text-brand-dark hover:bg-gray-50 text-sm font-medium transition"
            >
              Companies
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-lg text-gray-600 hover:text-brand-dark hover:bg-gray-50 text-sm font-medium transition"
            >
              Salaries
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-lg text-gray-600 hover:text-brand-dark hover:bg-gray-50 text-sm font-medium transition"
            >
              Resources
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:block text-sm font-medium text-gray-700 hover:text-brand-accent transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:shadow transition"
            >
              Post CV <i className="fa-solid fa-lock text-xs text-white/70"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-bg">
        <div className="absolute inset-0 bg-mesh z-0"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-border px-4 py-1.5 rounded-full shadow-sm mb-8">
            <i className="fa-solid fa-shield-check text-brand-success"></i>
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Official Student Verification Partner
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-6xl text-brand-dark mb-6 leading-tight">
            The secure way to start your{" "}
            <span className="text-gradient">career in Germany</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop sending sensitive documents via email. Use DJV's closed-loop
            ecosystem to get verified and hired by top companies safely.
          </p>

          {/* POWER SEARCH BAR */}
          <div className="bg-white p-2 rounded-2xl shadow-md border border-brand-border max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl text-brand-dark placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-brand-accent outline-none transition font-medium"
                placeholder="Job title (e.g. Werkstudent)"
              />
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <i className="fa-solid fa-location-dot text-gray-400"></i>
              </div>
              <input
                type="text"
                defaultValue="Berlin, Germany"
                className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl text-brand-dark placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-brand-accent outline-none transition font-medium"
              />
            </div>

            <button className="bg-brand-dark hover:bg-brand-accent text-white font-medium px-8 py-4 rounded-xl transition shadow-sm flex items-center justify-center gap-2">
              Search Jobs
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by leading companies
            </p>
            <div className="flex justify-center gap-8 md:gap-16">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
                alt="Google"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
                alt="Spotify"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
                alt="BMW"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                className="h-6 md:h-8 opacity-70 hover:opacity-100 transition"
                alt="Amazon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-20 bg-white border-t border-brand-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">
              Built for Student Privacy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We re-engineered the hiring process to keep your data local.
              Employers verified by us, students verified by us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-brand-bg rounded-2xl p-8 border border-brand-border hover:border-brand-accent hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-accent text-2xl mb-6 group-hover:scale-105 transition">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                Internal Vault
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Documents like your Passport and Tax ID are stored in our
                encrypted vault. Employers never see the raw files.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-brand-dark rounded-2xl p-8 border border-brand-dark shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent rounded-full blur-[60px] opacity-20"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-brand-success text-2xl mb-6">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  Verified Employers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We manually verify every company. If you see a job here, it's
                  real, safe, and paid legally.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-brand-bg rounded-2xl p-8 border border-brand-border hover:border-brand-accent hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500 text-2xl mb-6 group-hover:scale-105 transition">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                Smart Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our algorithm matches your study schedule and visa status with
                jobs you are actually eligible for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOB FEED */}
      <section className="py-20 bg-gray-50 border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-dark">
                Featured Opportunities
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Top jobs requiring English proficiency in Germany.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-brand-border rounded-lg text-sm font-medium text-brand-dark hover:border-brand-accent transition">
                Best Match
              </button>
              <button className="px-4 py-2 bg-transparent border border-transparent rounded-lg text-sm font-medium text-gray-500 hover:text-brand-dark transition">
                Newest
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {/* Job Card 1 */}
            <div className="group bg-white rounded-2xl p-6 border border-brand-border hover:border-brand-accent hover:shadow-md transition duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-accent"></div>
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-white border border-brand-border p-2 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    className="w-full h-full object-contain"
                    alt="Google"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-dark group-hover:text-brand-accent transition">
                        Product Design Intern
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Google
                        </span>
                        <span>•</span>
                        <span>Munich (Hybrid)</span>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-medium uppercase rounded border border-emerald-100 tracking-wide ml-2">
                          Verified
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">2h ago</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      €24 / hr
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-brand-accent text-xs font-medium border border-blue-100">
                      Werkstudent
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      English Required
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="group bg-white rounded-2xl p-6 border border-brand-border hover:border-brand-accent hover:shadow-md transition duration-300 cursor-pointer relative">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-black border border-brand-border p-3 flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-brands fa-apple text-white text-3xl"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-dark group-hover:text-brand-accent transition">
                        Operations Specialist
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Apple</span>
                        <span>•</span>
                        <span>Berlin</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">5h ago</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      €16 / hr
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-brand-accent text-xs font-medium border border-blue-100">
                      Mini-Job
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      Flexible
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Banner CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-brand-dark to-brand-accent p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">
                  Don't see the right job?
                </h3>
                <p className="text-blue-200 text-sm">
                  Create an alert and we'll notify you when verified jobs match
                  your profile.
                </p>
              </div>
              <button className="bg-white text-brand-dark font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow-sm">
                Create Alert
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="group bg-white rounded-2xl p-6 border border-brand-border hover:border-brand-accent hover:shadow-md transition duration-300 cursor-pointer relative">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-green-500 border border-brand-border p-2 flex items-center justify-center shadow-sm shrink-0">
                  <i className="fa-brands fa-spotify text-white text-3xl"></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-dark group-hover:text-brand-accent transition">
                        Data Analyst Student
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">
                          Spotify
                        </span>
                        <span>•</span>
                        <span>Remote (Germany)</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">1d ago</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      Paid Internship
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                      6 Months
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-3 border border-brand-border bg-white text-gray-600 font-medium rounded-xl hover:border-brand-dark hover:text-brand-dark transition">
              Load more jobs
            </button>
          </div>
        </div>
      </section>

      {/* 5. CITIES & CATEGORIES */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="font-heading font-bold text-xl text-brand-dark mb-8">
            Popular Searches in Germany
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-brand-border transition group"
            >
              <span className="font-medium text-gray-700 group-hover:text-brand-accent">
                Berlin
              </span>
              <span className="text-xs bg-white px-2 py-1 rounded text-gray-500">
                420 Jobs
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-brand-border transition group"
            >
              <span className="font-medium text-gray-700 group-hover:text-brand-accent">
                Munich
              </span>
              <span className="text-xs bg-white px-2 py-1 rounded text-gray-500">
                310 Jobs
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-brand-border transition group"
            >
              <span className="font-medium text-gray-700 group-hover:text-brand-accent">
                English Speaking
              </span>
              <span className="text-xs bg-white px-2 py-1 rounded text-gray-500">
                850 Jobs
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-brand-border transition group"
            >
              <span className="font-medium text-gray-700 group-hover:text-brand-accent">
                Hamburg
              </span>
              <span className="text-xs bg-white px-2 py-1 rounded text-gray-500">
                205 Jobs
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white text-black pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <span className="font-heading font-bold text-2xl">
                  De Job Venture
                </span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                The only student job platform in Germany that prioritizes data
                sovereignty. We verify every document internally.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Students</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Search Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    My Vault
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Visa Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Salary Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Employers</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Verification Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Imprint
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 De Job Venture GmbH. Made in Berlin.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <i className="fa-solid fa-lock"></i> Secured with 256-bit
              Encryption
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
