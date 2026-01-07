import React from "react";

const SalaryEstimate = () => {
  return (
    <>
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
    </>
  );
};

export default SalaryEstimate;
