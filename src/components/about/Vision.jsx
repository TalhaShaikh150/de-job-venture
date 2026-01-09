import React from "react";

const Vision = () => {
  return (
    <>
      {" "}
      <section class="bg-gray-50 py-24">
        <div class="container mx-auto px-6">
          <div class="mb-16">
            <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Our Vision
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Architecting the future of work.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#0f1624] rounded-3xl p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group">
              <div class="absolute right-0 top-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

              <div class="relative z-10">
                <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 border border-white/5">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Scientific Matching
                </h3>
                <p class="text-gray-400 leading-relaxed mb-8">
                  We removed the bias. Our algorithms prioritize skill density
                  and verified experience over prestigious school names or
                  personal connections. It's pure meritocracy.
                </p>
              </div>
              <a
                href="#"
                class="text-brand-green font-medium flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn about our AI <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div class="flex flex-col gap-8">
              <div class="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition duration-300">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-xl font-bold text-gray-900">
                    Total Transparency
                  </h3>
                  <span class="bg-green-50 text-brand-green px-3 py-1 rounded-full text-xs font-bold">
                    New Standard
                  </span>
                </div>
                <p class="text-gray-600 mb-6">
                  Salary ranges, interview stages, and response times are
                  visible before you apply. We are ending the era of
                  "competitive salary" mystery.
                </p>
              </div>

              <div class="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition duration-300">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-xl font-bold text-gray-900">
                    Border-less Talent
                  </h3>
                  <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    Global
                  </span>
                </div>
                <p class="text-gray-600 mb-6">
                  Location shouldn't limit potential. We provide the legal and
                  logistical framework for companies to hire the best person,
                  regardless of where they live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
