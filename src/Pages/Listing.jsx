import React, { useState } from "react";

// --- GLOBAL STYLES ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif; }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

    .custom-checkbox:checked + div { background-color: #10b981; border-color: #10b981; }
    .custom-checkbox:checked + div svg { display: block; }
  `}</style>
);

// --- ICONS ---
const Icons = {
  Search: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Location: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Filter: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
  Clock: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Bookmark: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>,
  Check: () => <svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>,
  ChevronDown: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
};


// --- DATA ---
const JOBS = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Zalando",
    location: "Berlin, DE",
    type: "Full Time",
    salary: "€75k - €95k",
    posted: "2 hours ago",
    logo: "https://ui-avatars.com/api/?name=Zalando&background=FF9900&color=fff&size=128",
    bg: "bg-orange-50",
    tags: ["UI/UX", "Figma", "English"],
    featured: true
  },
  {
    id: 2,
    title: "Frontend Engineer (React)",
    company: "N26",
    location: "Remote (Germany)",
    type: "Full Time",
    salary: "€65k - €85k",
    posted: "5 hours ago",
    logo: "https://ui-avatars.com/api/?name=N26&background=36A18B&color=fff&size=128",
    bg: "bg-teal-50",
    tags: ["React", "TypeScript", "Fintech"],
    featured: false
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "HelloFresh",
    location: "Berlin, DE",
    type: "Hybrid",
    salary: "€55k - €70k",
    posted: "1 day ago",
    logo: "https://ui-avatars.com/api/?name=HelloFresh&background=91C949&color=fff&size=128",
    bg: "bg-green-50",
    tags: ["Growth", "SEO", "German C1"],
    featured: false
  },
  {
    id: 4,
    title: "Backend Developer (Go)",
    company: "Trade Republic",
    location: "Berlin, DE",
    type: "Contract",
    salary: "€800 / day",
    posted: "2 days ago",
    logo: "https://ui-avatars.com/api/?name=Trade+Republic&background=111111&color=fff&size=128",
    bg: "bg-slate-100",
    tags: ["Golang", "AWS", "English"],
    featured: false
  },
  {
    id: 5,
    title: "Head of Product",
    company: "SAP",
    location: "Walldorf, DE",
    type: "Full Time",
    salary: "€120k+",
    posted: "3 days ago",
    logo: "https://ui-avatars.com/api/?name=SAP&background=008FD3&color=fff&size=128",
    bg: "bg-blue-50",
    tags: ["Management", "SaaS", "German C2"],
    featured: true
  },
  {
    id: 6,
    title: "Customer Support Lead",
    company: "Lufthansa",
    location: "Frankfurt, DE",
    type: "On-site",
    salary: "€45k - €55k",
    posted: "4 days ago",
    logo: "https://ui-avatars.com/api/?name=Lufthansa&background=05164d&color=fff&size=128",
    bg: "bg-yellow-50",
    tags: ["Support", "Team Lead"],
    featured: false
  },
];

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
    <div className="container mx-auto px-6 h-20 flex justify-between items-center">
      <div className="text-2xl font-bold text-white flex items-center gap-2 tracking-tight">
        <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white text-xs shadow-lg shadow-emerald-500/30">DJ</div>
        Dejob.
      </div>
      <div className="hidden md:flex gap-8 text-slate-300 font-medium text-sm">
        {['Find Jobs', 'Companies', 'Salaries', 'Career Advice'].map(link => (
            <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="hidden md:block text-slate-300 hover:text-white text-sm font-medium">Log in</a>
        <a href="#" className="bg-brand-green hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-all">Post a Job</a>
      </div>
    </div>
  </nav>
);

const FilterSection = ({ title, options }) => (
  <div className="mb-8">
    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center justify-between cursor-pointer group">
      {title} <Icons.ChevronDown />
    </h3>
    <div className="space-y-3">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input type="checkbox" className="custom-checkbox peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:border-emerald-500 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Icons.Check />
            </div>
          </div>
          <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{opt}</span>
          <span className="ml-auto text-xs text-slate-400">({Math.floor(Math.random() * 50) + 1})</span>
        </label>
      ))}
    </div>
  </div>
);

const JobCard = ({ job }) => (
  <div className={`bg-white p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer ${job.featured ? 'border-emerald-200 shadow-lg shadow-emerald-500/5' : 'border-slate-100 hover:border-emerald-200'}`}>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 border border-slate-100 bg-white shadow-sm`}>
          <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-2 mt-1">
            {job.company} 
            <span className="w-1 h-1 rounded-full bg-slate-300"></span> 
            <span className="flex items-center gap-1"><Icons.Location /> {job.location}</span>
          </p>
        </div>
      </div>
      <button className="text-slate-400 hover:text-emerald-500 transition-colors">
        <Icons.Bookmark />
      </button>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">{job.type}</span>
      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">{job.salary}</span>
      {job.tags.slice(0, 2).map(tag => (
        <span key={tag} className="px-3 py-1 bg-white text-emerald-600 text-xs font-semibold rounded-lg border border-emerald-100">{tag}</span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
        <Icons.Clock /> {job.posted}
      </span>
      <button className="text-sm font-bold text-white bg-[#0F172A] px-5 py-2 rounded-lg hover:bg-lime-600 transition-colors shadow-md">
        Apply Now
      </button>
    </div>
  </div>
);

const DejobListing = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-green selection:text-white">
      <GlobalStyles />
      <Navbar />

      {/* --- HEADER SEARCH --- */}
      <div className="relative bg-[#0F172A] pt-16 pb-32 overflow-hidden">
        {/* Header Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Modern Corporate Architecture" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -mr-20 -mt-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Find your next role in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">Germany</span>
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
       {/* Search Bar */}
            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center gap-2">
              {/* Keyword Input */}
              <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-200">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Berlin, Germany"
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Distance/Filter */}
              <div className="w-full md:w-auto flex items-center px-4 py-3 justify-between md:justify-start gap-2">
                <div className="flex items-center text-gray-500 text-sm gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <span>Upto 15 miles</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-brand-green text-white px-8 py-3 rounded md:rounded-md w-full md:w-auto font-medium hover:bg-lime-600 transition">
                Search
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR (FILTERS) */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2"><Icons.Filter /> Filters</h2>
                <button className="text-xs font-semibold text-emerald-600 hover:underline">Reset</button>
              </div>

              <FilterSection 
                title="Job Type" 
                options={["Full Time", "Part Time", "Contract", "Internship", "Werkstudent"]} 
              />
              
              <FilterSection 
                title="Salary Range" 
                options={["€30k - €50k", "€50k - €80k", "€80k - €120k", "€120k+"]} 
              />

              <FilterSection 
                title="Experience Level" 
                options={["Entry Level", "Mid Level", "Senior", "Lead / Manager", "Executive"]} 
              />

              <div className="mt-8 p-5 bg-gradient-to-br from-slate-50 to-emerald-50/50 rounded-2xl border border-slate-100 text-center">
                <h4 className="font-bold text-slate-900 mb-2">Join our Talent Pool</h4>
                <p className="text-xs text-slate-500 mb-4">Get headhunted by top companies.</p>
                <button className="w-full py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 shadow-sm transition-all">Upload CV</button>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT (JOB FEED) */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-sm mb-2 sm:mb-0">Showing <span className="font-bold text-slate-900">284</span> jobs</p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                <select className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 outline-none cursor-pointer font-medium">
                  <option>Recommended</option>
                  <option>Newest</option>
                  <option>Salary (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4">
              {JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:border-slate-300 text-sm font-medium">Previous</button>
                <button className="px-4 py-2 rounded-lg bg-brand-green text-white font-bold shadow-md text-sm">1</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors text-sm font-medium">2</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors text-sm font-medium">3</button>
                <span className="px-2 py-2 text-slate-400 text-sm">...</span>
                <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:border-slate-300 text-sm font-medium">Next</button>
              </div>
            </div>
          </main>

        </div>
      </div>

        {/* ==================== FOOTER ==================== */}
        <footer className="bg-[#0f1624] text-gray-400 py-16 border-t border-gray-800">
          <div className="container mx-auto px-4">  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1 mb-4">
                  Dejob{" "}
                  <span className="text-brand-green text-xs align-top">●</span>
                </div>
                <p className="text-sm leading-6 mb-6">
                  Dejob is the UK's largest independent job board, connecting
                  millions of job seekers with thousands of employers.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Job Seekers */}
              <div>
                <h4 className="text-white font-semibold mb-4">Job Seekers</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Search Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Upload CV
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Career Advice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Job Alerts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Employers */}
              <div>
                <h4 className="text-white font-semibold mb-4">Employers</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Search CVs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Recruitment Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-green">
                      Advertise
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                <p className="text-sm mb-2">123 Business Avenue, London, UK</p>
                <p className="text-sm mb-2">support@Dejob.com</p>
                <p className="text-sm">+44 (0) 20 1234 5678</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
              <p>&copy; 2023 Dejob Job Board. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default DejobListing;