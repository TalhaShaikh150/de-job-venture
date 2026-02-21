import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "@/redux/services/jobsApi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Building2,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  Share2,
  Banknote,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; 
const JobDetailsHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: allJobs, isLoading } = useGetAllJobsQuery();
  const job = allJobs?.find((j) => j.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        Loading...
      </div>
    );
  if (!job) return <div>Job not found</div>;

  const handleShare = () => {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href);

    // Show success message
    toast.success("Link copied to clipboard!", {
      style: {
        background: "#333",
        color: "#fff",
      },
      iconTheme: {
        primary: "#22c55e", // Brand green
        secondary: "#fff",
      },
    });
  };
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <div className="bg-brand-dark text-white pb-32 pt-12 relative overflow-hidden">
        {/* Background blobs for texture */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-bold"
          >
            <ChevronLeft size={16} /> Back to Listings
          </button>

          <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
            <div className="flex gap-6 items-center">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg">
                {job.company_logo ? (
                  <img
                    src={job.company_logo}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Building2 className="text-slate-400" />
                )}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-slate-300 font-medium text-sm">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={16} className="text-brand-green" />{" "}
                    {job.company_name}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white text-xs uppercase tracking-wide">
                    {job.job_type.replace("_", " ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {/* 2. Ensure Toaster is rendered (if not already in App.jsx) */}
              <Toaster position="bottom-center" />
              {/* 3. The Button */}
              <button
                onClick={handleShare}
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all active:scale-95 group"
                title="Copy link"
              >
                <Share2
                  className="text-white group-hover:scale-110 transition-transform"
                  size={20}
                />
              </button>{" "}
              <button className="px-8 py-3 bg-brand-green text-brand-dark font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-brand-green/20">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAP --- */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-brand-dark mb-6">
                Description
              </h3>
              <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-line">
                {job.job_description || job.description}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-brand-dark mb-6">
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {job.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">
                Snapshot
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500 text-sm">Salary</span>
                  <span className="font-bold text-brand-dark">
                    €{job.salary_min / 1000}k - €{job.salary_max / 1000}k
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500 text-sm">Posted</span>
                  <span className="font-bold text-brand-dark">
                    {new Date(job.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500 text-sm">Experience</span>
                  <span className="font-bold text-brand-dark capitalize">
                    {job.experience_level}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500 text-sm">Industry</span>
                  <span className="font-bold text-brand-dark">
                    {job.industry || "Tech"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobDetailsHero;
