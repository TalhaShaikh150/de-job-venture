import React from "react";

const cities = [
  {
    name: "Berlin",
    jobs: "14,203",
    image: "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=500&auto=format&fit=crop&q=60",
    className: "col-span-1 md:col-span-2 md:row-span-2 h-64 md:h-auto", // Big Card responsive
  },
  {
    name: "Munich",
    jobs: "9,100",
    image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=500&auto=format&fit=crop&q=60",
    className: "col-span-1 h-64",
  },
  {
    name: "Hamburg",
    jobs: "6,400",
    image: "https://images.unsplash.com/photo-1569150216991-aba1feb19ac5?w=500&auto=format&fit=crop&q=60",
    className: "col-span-1 h-64",
  },
  {
    name: "Frankfurt",
    jobs: "5,200",
    image: "https://images.unsplash.com/photo-1626447637943-4c9d412fa8cf?w=500&auto=format&fit=crop&q=60",
    className: "col-span-1 h-64",
  },
  {
    name: "Cologne",
    jobs: "3,800",
    image: "https://images.unsplash.com/photo-1561624485-0e43bcc1836d?w=500&auto=format&fit=crop&q=60",
    className: "col-span-1 h-64",
  },
];

const TopCites = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-green font-bold tracking-widest text-xs uppercase mb-2 block">
              Deutschland
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Explore Top German Cities
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg">
              Discover career opportunities in Germany's leading tech and
              business hubs.
            </p>
          </div>
          
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:text-brand-green hover:gap-3 transition-all duration-300 group"
          >
            View all cities
            <span className="bg-white border border-gray-200 group-hover:bg-brand-green group-hover:border-brand-green group-hover:text-white p-2 rounded-full transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:h-[600px] auto-rows-min">
          {cities.map((city, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 w-full ${city.className}`}
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
              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-brand-green transition-colors">
                  {city.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                  <p className="text-gray-300 text-sm font-medium">
                    {city.jobs} Open positions
                  </p>
                </div>
                
                {/* Hover Reveal Button (Desktop only effect) */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden hidden md:block">
                  <span className="inline-flex items-center text-white text-sm font-semibold border-b border-brand-green pb-0.5">
                    Browse Jobs &rarr;
                  </span>
                </div>
              </div>

              {/* Top Badge */}
              {index === 0 && (
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">
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
            className="inline-flex items-center gap-2 text-brand-green font-bold text-sm bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            View all cities &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopCites;