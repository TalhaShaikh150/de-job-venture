import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "@/redux/services/jobsApi";
import {
  MoveRight,
  Code,
  Palette,
  TrendingUp,
  Clock,
  MapPin,
  Briefcase,
  Layers
} from "lucide-react";

// ==========================================
// 1. HELPER FUNCTIONS
// ==========================================

// Pick an icon based on the job title
const getIconForJob = (title) => {
  const t = title.toLowerCase();
  if (t.includes("design") || t.includes("ui") || t.includes("ux")) return Palette;
  if (t.includes("market") || t.includes("sales") || t.includes("growth")) return TrendingUp;
  if (t.includes("manager") || t.includes("product") || t.includes("lead")) return Layers;
  return Code; // Default for developer/engineer roles
};

// Format Salary (e.g., 60000 -> €60k)
const formatSalary = (min, max) => {
  if (!min && !max) return "Competitive";
  const format = (n) => (n >= 1000 ? `€${Math.round(n / 1000)}k` : `€${n}/hr`);
  if (min && max) return `${format(min)} - ${format(max)}`;
  return format(max);
};

// Calculate Time Ago
const timeAgo = (dateString) => {
  const diff = Math.floor((new Date() - new Date(dateString)) / 3600000); // Hours
  if (diff < 1) return "Just now";
  if (diff < 24) return `${diff}h ago`;
  return `${Math.floor(diff / 24)}d ago`;
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

const LatestOpportunities = () => {
  const navigate = useNavigate();
  
  // 1. Fetch Data from Redux
  const { data: allJobs, isLoading } = useGetAllJobsQuery();

  // 2. Filter & Slice Data
  // - Must be Active
  // - Must be Featured
  // - Take top 3
  const featuredJobs = allJobs
    ? allJobs
        .filter((job) => job.is_featured === true)
        .slice(0, 3) 
    : [];

  // If loading or no featured jobs, show nothing (or a skeleton if preferred)
  if (isLoading) return <div className="py-24 text-center">Loading opportunities...</div>;
  if (featuredJobs.length === 0) return null;

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 pb-6 border-b border-slate-100">
          <div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Latest Opportunities
            </h2>
          </div>
          <Link
            to="/listing"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-dark transition-colors"
          >
            View all <MoveRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-4">
          {featuredJobs.map((job) => {
            const Icon = getIconForJob(job.title);

            return (
              <div
                key={job.id}
                onClick={() => navigate(`/jobs/${job.id}`)} // Navigate to details on click
                className="group bg-[#161F33] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:shadow-brand-dark/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon Area */}
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-brand-green shrink-0 border border-white/5">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Main Info */}
                <div className="flex-1 text-center md:text-left w-full">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" /> {job.company_name}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {timeAgo(job.created_at)}
                    </span>
                  </div>
                </div>

                {/* Right Side: Salary & Button */}
                <div className="flex flex-col md:items-end w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                  <span className="block text-center md:text-right font-bold text-white text-lg">
                    {formatSalary(job.salary_min, job.salary_max)}
                  </span>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent double navigation
                      navigate(`/jobs/${job.id}`);
                    }}
                    className="w-full md:w-auto bg-brand-green hover:bg-white text-brand-dark font-bold px-6 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    Apply Now <MoveRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/find-jobs"
            className="text-brand-dark font-bold border-b-2 border-brand-green pb-1"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestOpportunities;