import React from "react";

const Offices = () => {
  return (
    <>
      {" "}
      <section class="bg-gray-50 py-24">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12">
            <div>
              <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
                Our Offices
              </span>
              <h2 class="text-3xl font-bold text-gray-900">Where we build.</h2>
            </div>
            <a
              href="#"
              class="text-sm font-medium text-gray-500 hover:text-brand-green transition hidden md:block"
            >
              View all locations &rarr;
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                  HQ
                </p>
                <h3 class="text-2xl font-bold">London, UK</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Engineering & Product
                </p>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  EMEA Hub
                </p>
                <h3 class="text-2xl font-bold">Berlin, DE</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Sales & Marketing
                </p>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Americas
                </p>
                <h3 class="text-2xl font-bold">New York, USA</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Partnerships & Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offices;
