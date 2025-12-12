import React from 'react';

const Joblisting = () => {
  return (
    <div className="flex flex-col h-screen bg-brand-bg text-brand-dark font-sans overflow-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="flex-none z-50 bg-white/95 backdrop-blur-md border-b border-brand-border relative">
        <div className="max-w-[1920px] mx-auto px-6 h-[72px] flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 bg-brand-dark rounded-xl flex items-center justify-center text-white shadow-lg transition group-hover:bg-brand-accent">
              <i className="fa-solid fa-layer-group text-sm"></i>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-success rounded-full border-2 border-white animate-pulse-green"></div>
            </div>
            <span className="font-heading font-bold text-lg text-brand-dark tracking-tight">De Job Venture</span>
          </a>

          {/* Search Pill */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-12">
            <div className="flex w-full bg-brand-bg rounded-full border border-brand-border p-1 shadow-inner focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-accent/20 transition-all">
              <div className="flex-1 flex items-center px-4 border-r border-brand-border">
                <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full bg-transparent border-none focus:ring-0 text-sm px-3 outline-none text-brand-dark font-medium placeholder-gray-400"
                />
              </div>
              <div className="flex-0.5 flex items-center px-4">
                <i className="fa-solid fa-location-dot text-gray-400 text-sm"></i>
                <input
                  type="text"
                  defaultValue="Germany"
                  className="w-32 bg-transparent border-none focus:ring-0 text-sm px-3 outline-none text-brand-dark font-medium"
                />
              </div>
              <button className="bg-brand-dark hover:bg-brand-accent text-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md">
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-brand-border text-gray-500 hover:text-brand-dark hover:bg-brand-bg transition flex items-center justify-center relative">
              <i className="fa-regular fa-bell"></i>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-px bg-brand-border"></div>
            <button className="flex items-center gap-2 hover:bg-brand-bg p-1 pr-3 rounded-full transition border border-transparent hover:border-brand-border">
              <img
                src="https://ui-avatars.com/api/?name=Student&background=0d6604&color=fff"
                className="w-8 h-8 rounded-full"
                alt="Profile"
              />
              <span className="text-sm font-semibold text-brand-dark hidden xl:block">My Account</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. FILTERS */}
      <div className="flex-none bg-white border-b border-brand-border z-40 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-gray-700 hover:bg-brand-bg hover:border-gray-300 transition whitespace-nowrap bg-white shadow-sm">
              Job Type
              <i className="fa-solid fa-angle-down text-[10px] text-gray-400"></i>
            </button>
            <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-gray-700 hover:bg-brand-bg hover:border-gray-300 transition whitespace-nowrap bg-white shadow-sm">
              Salary
              <i className="fa-solid fa-angle-down text-[10px] text-gray-400"></i>
            </button>
            <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border-2 border-brand-accent/10 bg-brand-accent/5 text-xs font-bold text-brand-accent hover:bg-brand-accent/10 transition whitespace-nowrap">
              English Only <i className="fa-solid fa-xmark text-[10px]"></i>
            </button>
            <div className="h-5 w-px bg-brand-border mx-2"></div>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-5 bg-gray-200 rounded-full relative transition-colors group-hover:bg-gray-300">
                <div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div>
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Remote Only</span>
            </label>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">Sorted by <strong className="text-brand-dark">Recommended</strong></span>
          </div>
        </div>
      </div>

      {/* 3. MAIN SPLIT LAYOUT */}
      <main className="flex-1 flex overflow-hidden max-w-[1920px] mx-auto w-full bg-brand-bg">
        
        {/* LEFT COLUMN: Job Feed */}
        <div className="w-full lg:w-[450px] xl:w-[500px] flex-none overflow-y-auto border-r border-brand-border bg-white custom-scroll">
          <div className="p-4 space-y-3">
            <div className="px-2 pb-2">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top Results (284)</h2>
            </div>

            {/* Active Job Card */}
            <div className="group relative cursor-pointer p-5 rounded-2xl bg-white shadow-hover z-10 transition-all border border-brand-accent/30">
              {/* Active Indicator Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-accent rounded-l-2xl"></div>

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border border-brand-border p-1.5 bg-white shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-full h-full object-contain" alt="Logo" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-dark leading-tight">Junior UX Researcher</h3>
                    <p className="text-xs text-gray-500 font-medium">Google • Munich</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-success bg-green-50 px-2 py-1 rounded border border-green-100">NEW</span>
              </div>

              <div className="pl-[52px]">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">Werkstudent</span>
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">€22/hr</span>
                  <span className="px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-[11px] font-semibold text-brand-accent">English</span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  Join our team to help define the future of Google Search. Looking for students enrolled...
                </p>
              </div>
            </div>

            {/* Standard Job Card 1 */}
            <div className="group relative cursor-pointer p-5 rounded-2xl bg-white border border-transparent hover:border-brand-border hover:shadow-glass transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white text-lg shadow-sm">
                    <i className="fa-brands fa-uber"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-dark leading-tight group-hover:text-brand-accent transition-colors">Operations Intern</h3>
                    <p className="text-xs text-gray-500 font-medium">Uber • Berlin (Hybrid)</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">2h</span>
              </div>
              <div className="pl-[52px]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">Internship</span>
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">6 Months</span>
                </div>
              </div>
            </div>

            {/* Standard Job Card 2 */}
            <div className="group relative cursor-pointer p-5 rounded-2xl bg-white border border-transparent hover:border-brand-border hover:shadow-glass transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1DB954] flex items-center justify-center text-white text-xl shadow-sm">
                    <i className="fa-brands fa-spotify"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-dark leading-tight group-hover:text-brand-accent transition-colors">Data Analyst Student</h3>
                    <p className="text-xs text-gray-500 font-medium">Spotify • Remote</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">5h</span>
              </div>
              <div className="pl-[52px]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">Werkstudent</span>
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">€18/hr</span>
                </div>
              </div>
            </div>

            {/* Standard Job Card 3 */}
            <div className="group relative cursor-pointer p-5 rounded-2xl bg-white border border-transparent hover:border-brand-border hover:shadow-glass transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF9900] flex items-center justify-center text-white text-xl shadow-sm">
                    <i className="fa-brands fa-amazon"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-dark leading-tight group-hover:text-brand-accent transition-colors">Supply Chain Support</h3>
                    <p className="text-xs text-gray-500 font-medium">Amazon • Munich</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">1d</span>
              </div>
              <div className="pl-[52px]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">Full Time</span>
                  <span className="px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-[11px] font-semibold text-gray-600">Entry Level</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 text-center border-t border-brand-border">
            <button className="w-full py-2.5 rounded-lg border border-brand-border text-sm font-semibold text-gray-600 hover:bg-brand-bg hover:text-brand-dark transition">
              Load More Jobs
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Job Details */}
        <div className="flex-1 overflow-y-auto bg-white custom-scroll">
          <div className="max-w-4xl mx-auto p-8 lg:p-12">
            
            {/* Hero Section */}
            <div className="mb-10 relative">
              <div className="absolute -top-6 -left-6 -right-6 h-32 bg-gradient-to-b from-brand-bg to-white rounded-b-3xl -z-10 opacity-60"></div>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl border border-brand-border p-2 bg-white shadow-glass flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 pt-1">
                  <h1 className="font-heading font-bold text-3xl text-brand-dark mb-2">Junior UX Researcher</h1>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <a href="#" className="font-semibold text-brand-accent hover:underline">Google Inc.</a>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>Munich (Hybrid)</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="flex items-center gap-1.5 text-brand-success bg-green-50 px-2 py-0.5 rounded text-xs font-bold border border-green-100">
                      <i className="fa-solid fa-shield-check"></i> Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <div className="text-gray-400 mb-1"><i className="fa-solid fa-coins"></i></div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Salary</p>
                <p className="font-bold text-brand-dark">€22 - €28 / hr</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <div className="text-gray-400 mb-1"><i className="fa-regular fa-clock"></i></div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Hours</p>
                <p className="font-bold text-brand-dark">20h / week</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <div className="text-gray-400 mb-1"><i className="fa-solid fa-briefcase"></i></div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Type</p>
                <p className="font-bold text-brand-dark">Werkstudent</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <div className="text-gray-400 mb-1"><i className="fa-solid fa-language"></i></div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Language</p>
                <p className="font-bold text-brand-dark">English Only</p>
              </div>
            </div>

            <div className="flex gap-3 mb-10">
              <button className="flex-1 bg-brand-lightblue text-white font-semibold py-3 px-6 rounded-lg transition shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                Apply Now <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              </button>
              <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-brand-bg transition">
                <i className="fa-regular fa-bookmark"></i>
              </button>
            </div>

            {/* Prose Content */}
            <div className="prose max-w-none text-gray-600">
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-3 mt-8">About the role</h3>
              <p className="mb-4 leading-relaxed">
                As a Junior UX Researcher Student at Google, you will help our team understand user needs and pain points. You will work closely with designers, product managers, and engineers to influence product strategy and design. This is a unique opportunity to gain hands-on experience in a world-class product team.
              </p>
              <p className="mb-6 leading-relaxed">
                We are looking for someone who is curious, empathetic, and detail-oriented. You should be comfortable with ambiguity and able to adapt to a fast-paced environment.
              </p>

              <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">What you'll do</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-brand-accent">
                <li>Conduct qualitative and quantitative user research (interviews, surveys, usability testing).</li>
                <li>Analyze research data and synthesize findings into actionable insights.</li>
                <li>Create personas, user journeys, and other research deliverables.</li>
                <li>Collaborate with the design team to iterate on prototypes.</li>
                <li>Present research findings to stakeholders clearly and persuasively.</li>
              </ul>

              <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">What you'll need</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-brand-accent">
                <li>Currently enrolled in a Bachelor's or Master's degree in HCI, Psychology, Design, or related field.</li>
                <li>Valid student status in Germany for the next 12 months.</li>
                <li>Strong understanding of UX research methods.</li>
                <li>Fluent in English (German is a plus but not required).</li>
                <li>Availability to work 20 hours per week from our Munich office.</li>
              </ul>
            </div>

            {/* Footer / Similar Jobs */}
            <div className="mt-16 pt-10 border-t border-brand-border">
              <h4 className="font-heading font-bold text-brand-dark mb-6">Similar verified jobs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="block p-4 rounded-xl border border-brand-border hover:border-brand-accent hover:shadow-hover transition group bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-black text-white flex items-center justify-center"><i className="fa-brands fa-apple"></i></div>
                    <span className="font-bold text-brand-dark text-sm">UX Designer</span>
                  </div>
                  <p className="text-xs text-gray-500">Apple • Berlin</p>
                </a>
                <a href="#" className="block p-4 rounded-xl border border-brand-border hover:border-brand-accent hover:shadow-hover transition group bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center"><i className="fa-brands fa-meta"></i></div>
                    <span className="font-bold text-brand-dark text-sm">Product Researcher</span>
                  </div>
                  <p className="text-xs text-gray-500">Meta • Remote</p>
                </a>
              </div>
            </div>

            <div className="h-20"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Joblisting;