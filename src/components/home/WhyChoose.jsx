import React from "react";
import { Bell, MoveRight ,BookOpen,ChevronRight} from "@/components/icons";
const WhyChoose = () => {
  return (
    <>
      {/* ==================== WHY CHOOSE SECTIONS ==================== */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-green uppercase bg-green-50 rounded-full border border-green-100">
              Why Choose Dejob
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">
                get hired fast.
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              We provide the most advanced tools to help you succeed. From smart
              alerts to AI-driven matches, your next career move starts here.
            </p>
          </div>

          {/* Main Layout: Flex Column on Mobile -> Grid on Desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[640px]">
            {/* Card 1: Job Alerts (Tall on Desktop, Normal on Mobile) */}
            <div className="lg:row-span-2 bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-gray-100 group hover:border-brand-green/30 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-500 overflow-hidden relative min-h-[350px]">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 text-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Instant Job Alerts
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Stop refreshing. Set up keywords and let the opportunities
                  come straight to your inbox.
                </p>
              </div>

              <div className="mt-6 relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group-hover:translate-y-2 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  className="w-full h-full object-cover opacity-90"
                  alt="Job Alerts App"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm pl-3 pr-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-pulse whitespace-nowrap">
                  <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                  <div className="text-xs font-bold text-gray-800">
                    New Match Found!
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Upload CV (Wide on Desktop, Stacked on Mobile) */}
            <div className="lg:col-span-2 bg-brand-dark rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group min-h-[400px] md:min-h-[320px]">
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-green/20 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-brand-green/30 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-600/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>

              <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
                <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-white uppercase bg-white/10 rounded-md backdrop-blur-md">
                  For Job Seekers
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let companies apply to{" "}
                  <span className="text-brand-green">you.</span>
                </h3>
                <p className="text-gray-400 mb-6 text-sm md:text-base">
                  Create a standout profile. 70% of hiring happens through our
                  CV database search.
                </p>
                <button className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-xl font-bold hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg shadow-white/5 text-sm">
                  Upload Your CV
                  <MoveRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative z-10 w-full md:w-1/2 flex justify-center perspective-1000 mt-4 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  className="rounded-xl shadow-2xl w-48 md:w-60 rotate-3 md:rotate-6 border-[6px] border-gray-700/50 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"
                  alt="Resume Preview"
                />
              </div>
            </div>

            {/* Bottom Row Wrapper for Mobile Flex / Desktop Grid */}
            <div className="flex flex-col md:flex-row lg:col-span-2 gap-6 w-full">
              {/* Card 3: Career Advice */}
              <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group min-h-[240px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5"/>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">
                      New
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Career Advice
                  </h3>
                  <p className="text-sm text-gray-500">
                    Expert tips on salary negotiation & interview prep.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
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
                  <div className="w-8 h-8 rounded-full  flex items-center justify-center bg-blue-600 text-white transition-colors cursor-pointer">
                  <ChevronRight/>
                  </div>
                </div>
              </div>

              {/* Card 4: Stats */}
              <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[240px]">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-700 mb-1">
                    200k+
                  </h3>
                  <p className="text-gray-800 font-bold text-base md:text-lg">
                    Active Jobs
                  </p>
                  <div className="w-12 h-1 bg-brand-green/20 mx-auto mt-4 rounded-full"></div>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-3 font-bold uppercase tracking-wide">
                    Updated Daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
