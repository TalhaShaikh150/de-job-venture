import React from "react";

const milestones = [
  {
    year: "2021",
    title: "Inception",
    desc: "Founded in London by two ex-recruiters.",
  },
  {
    year: "2022",
    title: "Series A",
    desc: "Raised $15M to build our AI engine.",
  },
  {
    year: "2023",
    title: "Scale",
    desc: "Hit 200k verified job listings in DE.",
  },
  {
    year: "Now",
    title: "Global",
    desc: "Expanding to US & Asia-Pacific markets.",
  },
];

const Milestone = () => {
  return (
    <section className="py-24 bg-brand-dark font-sans text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div className="max-w-xl">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Our History
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              From concept to{" "}
              <span className="text-brand-green">market leader.</span>
            </h2>
          </div>
          <p className="text-slate-400 mt-4 md:mt-0 max-w-sm text-right">
            A timeline of rapid growth and innovation.
          </p>
        </div>

        {/* Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="group relative">
              {/* Top Line */}
              <div className="w-full h-1 bg-white/10 mb-6 group-hover:bg-brand-green transition-colors duration-500"></div>

              {/* Year */}
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4 group-hover:from-brand-green group-hover:to-brand-green/50 transition-all duration-500">
                {item.year}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
