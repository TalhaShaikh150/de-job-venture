import React from "react";
import { MoveRight, Code, Palette, TrendingUp, Clock, MapPin, Briefcase } from "@/components/icons";
import { Link } from "react-router-dom";

const jobs = [
  { 
    id: 1, 
    title: "Senior Product Designer", 
    company: "Zalando", 
    time: "2h ago", 
    salary: "€85k - €110k",
    type: "Full Time",
    icon: Palette 
  },
  { 
    id: 2, 
    title: "Frontend Developer", 
    company: "N26 Bank", 
    time: "5h ago", 
    salary: "€75k - €95k",
    type: "Remote",
    icon: Code 
  },
  { 
    id: 3, 
    title: "Growth Marketing Lead", 
    company: "Delivery Hero", 
    time: "1d ago", 
    salary: "€65k - €85k",
    type: "Hybrid",
    icon: TrendingUp 
  },
];

const LatestOpportunities = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 pb-6 border-b border-slate-100">
           <div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Featured</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Latest Opportunities</h2>
           </div>
           <Link to="/listing" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-dark transition-colors">
              View all <MoveRight className="w-4 h-4"/>
           </Link>
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="group bg-[#161F33] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:shadow-brand-dark/20 transition-all duration-300 transform hover:-translate-y-1">
               
               {/* Icon Area */}
               <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-brand-green shrink-0 border border-white/5">
                  <job.icon className="w-7 h-7" />
               </div>

               {/* Main Info */}
               <div className="flex-1 text-center md:text-left w-full">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                     {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-400 font-medium">
                     <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5"/> {job.company}</span>
                     <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/> {job.type}</span>
                     <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {job.time}</span>
                  </div>
               </div>

               {/* Right Side: Salary & Button */}
               <div className="flex flex-col md:items-end w-full md:w-auto gap-4  pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                  <span className="block text-center md:text-right font-bold text-white text-lg">
                     {job.salary}
                  </span>
                  
                  <button className="w-full md:w-auto bg-brand-green hover:bg-white text-brand-dark font-bold px-6 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2">
                     Apply Now <MoveRight className="w-4 h-4"/>
                  </button>
               </div>

            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
           <Link to="/listing" className="text-brand-dark font-bold border-b-2 border-brand-green pb-1">
              View All Jobs
           </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestOpportunities;