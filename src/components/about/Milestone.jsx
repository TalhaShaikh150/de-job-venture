import React from "react";

const Milestone = () => {
  return (
    <>
      <section class="py-24 bg-white relative">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Milestones
            </span>
            <h2 class="text-3xl font-bold text-gray-900">
              From concept to global platform.
            </h2>
          </div>

          <div class="max-w-4xl mx-auto relative">
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2 ml-6 md:ml-0"></div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:text-right md:pr-12 pl-16 md:pl-0">
                <h3 class="text-xl font-bold text-gray-900">The Inception</h3>
                <p class="text-gray-500 mt-2">
                  Dejob is founded in London by two ex-recruiters tired of the
                  status quo.
                </p>
              </div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2021</span>
              </div>
              <div class="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:pr-12 hidden md:block"></div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2022</span>
              </div>
              <div class="flex-1 md:pl-12 pl-16">
                <h3 class="text-xl font-bold text-gray-900">
                  Series A Funding
                </h3>
                <p class="text-gray-500 mt-2">
                  Raised $15M to build our proprietary AI matching engine and
                  expand to Europe.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:text-right md:pr-12 pl-16 md:pl-0">
                <h3 class="text-xl font-bold text-gray-900">
                  200k Jobs Milestone
                </h3>
                <p class="text-gray-500 mt-2">
                  We hit a critical mass of verified listings, becoming the
                  fastest growing board in the UK.
                </p>
              </div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2023</span>
              </div>
              <div class="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between group">
              <div class="flex-1 md:pr-12 hidden md:block"></div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-brand-green border-4 border-brand-green rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg shadow-green-500/30">
                <span class="text-xs font-bold text-white">NOW</span>
              </div>
              <div class="flex-1 md:pl-12 pl-16">
                <h3 class="text-xl font-bold text-gray-900">
                  Global Expansion
                </h3>
                <p class="text-gray-500 mt-2">
                  Launching in the US and Asia-Pacific markets with new
                  enterprise tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestone;
