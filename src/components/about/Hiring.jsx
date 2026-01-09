import React from "react";

const Hiring = () => {
  return (
    <>
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="bg-gray-50 rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 p-12 flex flex-col justify-center">
              <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-bold w-fit mb-6">
                We are hiring
              </span>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Build the future with us.
              </h2>
              <p class="text-gray-600 mb-8 leading-relaxed">
                We're a remote-first team of 80+ people obsessed with fixing
                recruitment. If you love solving complex problems and care about
                impact, we want you.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fully remote culture
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Competitive equity packages
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Annual company retreats
                </li>
              </ul>
              <a
                href="#"
                class="text-brand-dark font-bold border-b-2 border-brand-green pb-1 w-fit hover:text-brand-green transition-colors"
              >
                View Internal Openings &rarr;
              </a>
            </div>
            <div class="w-full md:w-1/2 relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hiring;
