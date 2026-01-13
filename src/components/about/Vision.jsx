import React from "react";

const VisionNumbers = () => {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Architecting the future.
          </h2>
          <p className="text-xl text-slate-500">
             Three pillars that define our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group border-t-4 border-slate-100 hover:border-brand-green pt-8 transition-colors duration-300">
             <span className="text-5xl font-bold text-slate-200 group-hover:text-brand-green transition-colors mb-6 block">01</span>
             <h3 className="text-2xl font-bold text-brand-dark mb-4">Scientific Matching</h3>
             <p className="text-slate-500 leading-relaxed text-lg">
               Algorithms that prioritize skill density and verified experience. No bias, just data.
             </p>
          </div>

          {/* Card 2 */}
          <div className="group border-t-4 border-slate-100 hover:border-brand-green pt-8 transition-colors duration-300">
             <span className="text-5xl font-bold text-slate-200 group-hover:text-brand-green transition-colors mb-6 block">02</span>
             <h3 className="text-2xl font-bold text-brand-dark mb-4">Total Transparency</h3>
             <p className="text-slate-500 leading-relaxed text-lg">
               Salaries and response times are visible upfront. We respect your time.
             </p>
          </div>

          {/* Card 3 */}
          <div className="group border-t-4 border-slate-100 hover:border-brand-green pt-8 transition-colors duration-300">
             <span className="text-5xl font-bold text-slate-200 group-hover:text-brand-green transition-colors mb-6 block">03</span>
             <h3 className="text-2xl font-bold text-brand-dark mb-4">Global Reach</h3>
             <p className="text-slate-500 leading-relaxed text-lg">
               Legal frameworks to hire the best person, anywhere in the world.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionNumbers;