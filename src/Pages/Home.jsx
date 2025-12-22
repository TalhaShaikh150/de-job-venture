  import React from "react";
  const DejobLanding = () => {
    const cities = [
      {
        name: "Berlin",
        jobs: "14,203",
        image:
          "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVybGlufGVufDB8fDB8fHww",
        className: "md:col-span-2 md:row-span-2", // Big Card
      },
      {
        name: "Munich",
        jobs: "9,100",
        image:
          "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVuaWNofGVufDB8fDB8fHww",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        name: "Hamburg",
        jobs: "6,400",
        image:
          "https://images.unsplash.com/photo-1569150216991-aba1feb19ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3xlbnwwfHwwfHx8MA%3D%3D",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        name: "Frankfurt",
        jobs: "5,200",
        image:
          "https://images.unsplash.com/photo-1626447637943-4c9d412fa8cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmtmdXJ0fGVufDB8fDB8fHww",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        name: "Cologne",
        jobs: "3,800",
        image:
          "https://images.unsplash.com/photo-1561624485-0e43bcc1836d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb2duZXxlbnwwfHwwfHx8MA%3D%3D",
        className: "md:col-span-1 md:row-span-1",
      },
    ];
    return (
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* ==================== HERO SECTION ==================== */}
        <header className="relative bg-brand-dark min-h-[800px] pb-48">
          {/* Background Overlay Image */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>

          {/* Navbar */}
          <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center text-gray-300 text-sm">
            {/* Logo */}
            <div className="text-2xl font-bold text-white flex items-center gap-1">
              Dejob <span className="text-brand-green text-xs align-top">●</span>
            </div>

            {/* Links (Desktop) */}
            <div className="hidden md:flex gap-8">
              <a
                href="#"
                className="text-white hover:text-brand-green transition"
              >
                Home
              </a>
              <a href="#" className="hover:text-white transition">
                Courses
              </a>
              <a href="#" className="hover:text-white transition">
                Career Advice
              </a>
              <a href="#" className="hover:text-white transition">
                Company A-Z
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-4 items-center">
              <a href="#" className="hidden md:block hover:text-white">
                Log in
              </a>
              <a
                href="#"
                className="border border-gray-600 px-5 py-2 rounded text-white hover:bg-brand-green hover:border-brand-green transition"
              >
                Register Now
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center mt-16 px-4 text-center">
            <p className="text-gray-400 mb-2">It's simple and smart</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Search, Find & Apply
            </h1>

            {/* Stats Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded px-4 py-2 flex items-center gap-3">
                <div className="bg-orange-100 p-1.5 rounded text-orange-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <span className="text-white text-sm">200,036 Jobs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded px-4 py-2 flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded text-blue-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" />
                  </svg>
                </div>
                <span className="text-white text-sm">9,914 Companies</span>
              </div>
            </div>

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
                  placeholder="New York, USA"
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

            {/* Recent Searches Toggle */}
            <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm w-full max-w-4xl px-2">
              <input
                type="checkbox"
                id="recent"
                className="rounded border-gray-600 bg-transparent"
              />
              <label htmlFor="recent" className="cursor-pointer">
                View Recent Searches
              </label>
            </div>
          </div>
        </header>

        {/* ==================== FLOATING JOB CATEGORIES ==================== */}
        <div className="relative z-20 -mt-32 container mx-auto px-4 mb-20">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-8 border-b border-gray-100 pb-4 mb-6">
              <button className="flex items-center gap-2 text-gray-800 font-semibold border-b-2 border-brand-green pb-4 -mb-4">
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" />
                </svg>
                Jobs by Industry
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 pb-4 -mb-4 transition">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Jobs by Location
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 pb-4 -mb-4 transition">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Popular Jobs
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 pb-4 -mb-4 transition">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Jobs by Company
              </button>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2 text-sm text-gray-600">
              {[
                "Aviation",
                "Accountancy",
                "Administration",
                "Advertising",
                "Accounting",
                "Agriculture",
                "Apprenticeships",
                "Army",
                "Automotive",
                "Architecture",
                "Banking",
                "Catering",
                "Charity",
                "Civil Service",
                "Clerck",
                "Cleaning",
                "Construction",
                "Consulting",
                "Counselling",
                "Cabana",
                "Creative",
                "Customer Service",
                "Driving",
                "Education",
                "Engineering",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-brand-green font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== RECRUITERS ==================== */}
        <section className="py-10 text-center container mx-auto px-4">
          <h3 className="text-gray-700 font-semibold mb-10">
            Featured recruiters and employers
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Airbnb */}
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg>
              airbnb
            </div>
            {/* ShipBob */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l8 4-8 4-8-4 8-4z" />
                <path d="M2 8l8 4 8-4v6l-8 4-8-4V8z" />
              </svg>
              ShipBob
            </div>
            <div className="text-xl font-bold text-gray-500 tracking-wider">
              DISC<span className="text-orange-400">●</span>VER
            </div>
            <div className="text-xl font-bold text-gray-500 flex items-center gap-1">
              Walmart <span className="text-yellow-400 text-2xl">✴</span>
            </div>
            <div className="text-xl font-bold italic text-gray-500">
              CapitalOne
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-500">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              DISCORD
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE SECTIONS ==================== */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-green uppercase bg-green-50 rounded-full border border-green-100">
                Why Choose Dejob
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Everything you need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                  get hired fast.
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                We provide the most advanced tools to help you succeed. From smart
                alerts to AI-driven matches, your next career move starts here.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-6 h-auto md:h-[640px]">
              {/* Card 1: Large Left (Job Alerts) - Vertical focus */}
              <div className="md:col-span-1 md:row-span-2 bg-gray-50 rounded-[2rem] p-8 flex flex-col justify-between border border-gray-100 group hover:border-brand-green/30 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-500 overflow-hidden relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Instant Job Alerts
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Stop refreshing. Set up keywords and let the opportunities
                    come straight to your inbox the moment they are posted.
                  </p>
                </div>

                {/* Visual Element at Bottom */}
                <div className="mt-10 relative h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group-hover:translate-y-2 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover opacity-90"
                    alt="Job Alerts App"
                  />
                  {/* Floating Notification */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm pl-3 pr-5 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-pulse">
                    <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                    <div className="text-sm font-bold text-gray-800">
                      New Job Match Found!
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Top Right (Wide - Upload CV) - Dark Theme */}
              <div className="md:col-span-2 bg-brand-dark rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
                {/* Abstract Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-brand-green/30 transition-colors duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                <div className="relative z-10 md:w-1/2 text-left">
                  <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-white uppercase bg-white/10 rounded-md backdrop-blur-md">
                    For Job Seekers
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Let companies apply to{" "}
                    <span className="text-brand-green">you.</span>
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Create a standout profile. 70% of hiring happens through our
                    CV database search.
                  </p>
                  <button className="group/btn flex items-center gap-2 bg-white text-brand-dark px-7 py-3.5 rounded-xl font-bold hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
                    Upload Your CV
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image/Visual */}
                <div className="relative z-10 md:w-1/2 flex justify-center perspective-1000">
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                    className="rounded-xl shadow-2xl w-64 rotate-6 border-[6px] border-gray-700/50 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"
                    alt="Resume Preview"
                  />
                  {/* Decorative Badge behind */}
                  <div className="absolute -bottom-6 -right-4 bg-gray-800/90 backdrop-blur text-white px-4 py-3 rounded-lg shadow-xl border border-gray-700 text-xs font-mono">
                    Status: <span className="text-brand-green">Active</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom Middle (Career Advice) */}
              <div className="md:col-span-1 bg-white rounded-[2rem] p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    New
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Career Advice
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Expert tips on salary negotiation & interview prep.
                </p>

                {/* Avatars */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="User"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors cursor-pointer">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom Right (Stats) */}
              <div className="md:col-span-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2rem] p-8 border border-green-100 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:12px_12px]"></div>

                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-700 mb-1">
                    200k+
                  </h3>
                  <p className="text-gray-800 font-bold text-lg">Active Jobs</p>
                  <div className="w-12 h-1 bg-brand-green/20 mx-auto mt-4 rounded-full"></div>
                  <p className="text-xs text-gray-500 mt-3 font-medium uppercase tracking-wide">
                    Updated Daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <span className="text-brand-green font-bold tracking-widest text-xs uppercase mb-2 block">
                  Deutschland
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Explore Top German Cities
                </h2>
                <p className="text-gray-500 mt-3 text-lg">
                  Discover career opportunities in Germany's leading tech and
                  business hubs.
                </p>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:text-brand-green hover:gap-3 transition-all duration-300 group"
              >
                View all cities
                <span className="bg-gray-200 group-hover:bg-brand-green group-hover:text-white p-1 rounded-full transition-colors">
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[600px]">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${city.className}`}
                >
                  {/* Image */}
                  <img
                    src={city.image}
                    alt={city.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-green transition-colors">
                      {city.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                      <p className="text-gray-300 text-sm font-medium">
                        {city.jobs} Open positions
                      </p>
                    </div>
                    {/* Hover Reveal Button */}
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
                      <span className="inline-flex items-center text-white text-sm font-semibold border-b border-brand-green pb-0.5">
                        Browse Jobs &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Top Badge (Optional - e.g. for Capital) */}
                  {index === 0 && (
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                      Capital Hub
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile View All Link */}
            <div className="mt-8 text-center md:hidden">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-brand-green font-bold"
              >
                View all cities &rarr;
              </a>
            </div>
          </div>
        </section>
        {/* ==================== LATEST JOBS SECTION ==================== */}
      
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Latest Opportunities</h2>
          <p className="text-gray-400 mt-2">Fresh jobs added today</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all">
          View all jobs <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>

      <div className="flex flex-col gap-4">
        
        {/* Job Row 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
          <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-green transition-colors">Product Designer</h3>
              <span className="bg-green-100 text-brand-green text-[10px] font-bold px-2 py-0.5 rounded-full">FULL TIME</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">Zalando • Berlin, DE</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">UI/UX</span>
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">Figma</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
            <span className="font-bold text-gray-900 text-lg">$120k</span>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-brand-green transition-colors w-full md:w-auto">Apply Now</button>
          </div>
        </div>

        {/* Job Row 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
          <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-500 transition-colors">Frontend Developer</h3>
              <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">REMOTE</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">N26 • Berlin, DE</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">React</span>
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">Tailwind</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
            <span className="font-bold text-gray-900 text-lg">$90k</span>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors w-full md:w-auto">Apply Now</button>
          </div>
        </div>

        {/* Job Row 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
          <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-500 transition-colors">Marketing Manager</h3>
              <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full">PART TIME</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">Delivery Hero • Munich, DE</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">SEO</span>
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">Growth</span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
            <span className="font-bold text-gray-900 text-lg">$65k</span>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-500 transition-colors w-full md:w-auto">Apply Now</button>
          </div>
        </div>

      </div>
    </div>
  </section>
        {/* ==================== NEW: SALARY ESTIMATE ==================== */}
        <section className="py-24 bg-brand-dark relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green opacity-5 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Side */}
              <div className="lg:w-1/2">
                <div className="bg-gray-800 text-brand-green text-xs font-bold inline-block px-3 py-1 rounded mb-4">
                  MARKET INSIGHTS
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Know your worth
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Don't guess your salary. Use our real-time data to see how you
                  compare to others in your industry. Negotiate with confidence
                  based on location, experience, and skill set.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <select className="px-5 py-3 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:border-brand-green">
                    <option>Product Designer</option>
                    <option>Software Engineer</option>
                    <option>Marketing Manager</option>
                  </select>
                  <button className="px-6 py-3 bg-brand-green text-white font-bold rounded hover:bg-lime-600 transition">
                    Check Salary
                  </button>
                </div>
              </div>

              {/* Graph Side (Visual Representation) */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl">
                  <div className="flex justify-between items-end h-64 gap-4">
                    {/* Bar 1 */}
                    <div className="w-full flex flex-col justify-end group">
                      <div className="text-center text-xs text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition">
                        $45k
                      </div>
                      <div className="bg-gray-700 h-24 rounded-t-lg w-full group-hover:bg-gray-600 transition-all relative"></div>
                      <div className="text-center text-xs text-gray-400 mt-3">
                        Entry
                      </div>
                    </div>
                    {/* Bar 2 */}
                    <div className="w-full flex flex-col justify-end group">
                      <div className="text-center text-xs text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition">
                        $65k
                      </div>
                      <div className="bg-gray-600 h-36 rounded-t-lg w-full group-hover:bg-gray-500 transition-all"></div>
                      <div className="text-center text-xs text-gray-400 mt-3">
                        Junior
                      </div>
                    </div>
                    {/* Bar 3 (Active) */}
                    <div className="w-full flex flex-col justify-end relative">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">
                        $95k
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                      </div>
                      <div className="bg-brand-green h-52 rounded-t-lg w-full shadow-[0_0_20px_rgba(107,197,81,0.3)]"></div>
                      <div className="text-center text-xs text-white font-bold mt-3">
                        Median
                      </div>
                    </div>
                    {/* Bar 4 */}
                    <div className="w-full flex flex-col justify-end group">
                      <div className="text-center text-xs text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition">
                        $120k
                      </div>
                      <div className="bg-gray-600 h-64 rounded-t-lg w-full group-hover:bg-gray-500 transition-all"></div>
                      <div className="text-center text-xs text-gray-400 mt-3">
                        Senior
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== NEW: SUCCESS STORIES ==================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                <svg
                  className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
                </svg>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">David Chen</h4>
                    <p className="text-xs text-gray-500">Hired at Google</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Within 3 days of creating my profile, I had interviews
                  scheduled with two top tech companies. The process was seamless
                  and the job alerts were spot on."
                </p>
                <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
              </div>

              {/* Review 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl relative mt-0 md:-mt-4 shadow-lg border-b-4 border-brand-green">
                <svg
                  className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
                </svg>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                    <p className="text-xs text-gray-500">Hired at Spotify</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "The salary insights tool was a game changer. I realized I was
                  underpaid and used the data to negotiate a 20% higher starting
                  salary."
                </p>
                <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
              </div>

              {/* Review 3 */}
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                <svg
                  className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
                </svg>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Marcus Reid</h4>
                    <p className="text-xs text-gray-500">Hired at Tesla</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Best job board I've used. No spam, just high quality leads. The
                  company reviews helped me avoid a toxic workplace."
                </p>
                <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

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

  export default DejobLanding;
