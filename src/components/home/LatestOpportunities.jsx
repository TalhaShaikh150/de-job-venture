import React from "react";
import {
  MoveRight,
  Palette,
  Code,
  ChartNoAxesColumnIncreasing,
} from "@/components/icons";
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
              className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:text-brand-green hover:gap-3 transition-all duration-300 group"
            >
              View all jobs
              <span className="bg-white border border-gray-200 group-hover:bg-brand-green group-hover:border-brand-green group-hover:text-white p-2 rounded-full transition-colors shadow-sm">
                <MoveRight className="w-5 h-5" />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {/* Job Row 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 group">
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <Palette className="w-8 h-8 text-orange-500" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
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
                <Code className="w-8 h-8 text-blue-500" />
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
                <ChartNoAxesColumnIncreasing className="w-8 h-8 text-red-500" />
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
  );
};

export default LatestOpportunities;
