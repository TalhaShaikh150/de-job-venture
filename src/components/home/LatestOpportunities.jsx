import React from 'react'

const LatestOpportunities = () => {
  return (
    <>
     {/* ==================== LATEST JOBS SECTION ==================== */}

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Latest Opportunities
                </h2>
                <p className="text-gray-400 mt-2">Fresh jobs added today</p>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
              >
                View all jobs{" "}
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
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {/* Job Row 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-green transition-colors">
                      Product Designer
                    </h3>
                    <span className="bg-green-100 text-brand-green text-[10px] font-bold px-2 py-0.5 rounded-full">
                      FULL TIME
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Zalando • Berlin, DE
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      UI/UX
                    </span>
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      Figma
                    </span>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
                  <span className="font-bold text-gray-900 text-lg">$120k</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-brand-green transition-colors w-full md:w-auto">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Job Row 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-500 transition-colors">
                      Frontend Developer
                    </h3>
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      REMOTE
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">N26 • Berlin, DE</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      Tailwind
                    </span>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
                  <span className="font-bold text-gray-900 text-lg">$90k</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors w-full md:w-auto">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Job Row 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-500 transition-colors">
                      Marketing Manager
                    </h3>
                    <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      PART TIME
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Delivery Hero • Munich, DE
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      SEO
                    </span>
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">
                      Growth
                    </span>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between">
                  <span className="font-bold text-gray-900 text-lg">$65k</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-500 transition-colors w-full md:w-auto">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

    
    </>
  )
}

export default LatestOpportunities