import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobHeader from "@/components/joblistings/JobHeader";
import FilterSection from "@/components/joblistings/Filter";
import JobCards from "@/components/joblistings/JobCards";
import Pagination from "@/components/common/Pagination";
import JobSorting from "@/components/joblistings/Sorting";
import JobCardSkeleton from "@/components/joblistings/JobCardSkeleton";
import { Funnel } from "@/components/icons";

import { supabase } from "@/backend/config";

const DejobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define how many skeletons to show
  const SKELETON_COUNT = 6;

  const fetchJobsFromDB = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setJobs(data || []);
    } catch (err) {
      console.error("Error fetching jobs:", err.message);
      setError("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsFromDB();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-green selection:text-white">
      <Navbar />

      <JobHeader />

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 mt-5 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR (FILTERS) */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Funnel /> Filters
                </h2>
                <button className="text-xs font-semibold text-emerald-600 hover:underline">
                  Reset
                </button>
              </div>

              <FilterSection
                title="Job Type"
                options={[
                  "Full Time",
                  "Part Time",
                  "Contract",
                  "Internship",
                  "Werkstudent",
                ]}
              />

              <FilterSection
                title="Salary Range"
                options={[
                  "€30k - €50k",
                  "€50k - €80k",
                  "€80k - €120k",
                  "€120k+",
                ]}
              />

              <FilterSection
                title="Experience Level"
                options={[
                  "Entry Level",
                  "Mid Level",
                  "Senior",
                  "Lead / Manager",
                  "Executive",
                ]}
              />

              <div className="mt-8 p-5 bg-gradient-to-br from-slate-50 to-emerald-50/50 rounded-2xl border border-slate-100 text-center">
                <h4 className="font-bold text-slate-900 mb-2">
                  Join our Talent Pool
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Get headhunted by top companies.
                </p>
                <button className="w-full py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 shadow-sm transition-all">
                  Upload CV
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT (JOB FEED) */}
          <main className="flex-1">
            {jobs && <JobSorting jobLength={jobs.length} />}

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl mb-6 text-center text-sm font-bold">
                {error}
              </div>
            )}

            <div className="grid gap-4">
              {loading ? (
                // SKELETON STATE
                Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                  <JobCardSkeleton key={index} />
                ))
              ) : jobs.length > 0 ? (
                // DATA STATE
                jobs.map((job) => <JobCards key={job.id} job={job} />)
              ) : (
                // EMPTY STATE
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                  <p className="text-slate-500 font-medium">
                    No jobs found matching your criteria.
                  </p>
                  <button
                    onClick={fetchJobsFromDB}
                    className="mt-4 text-brand-green font-bold text-sm hover:underline"
                  >
                    Refresh
                  </button>
                </div>
              )}
            </div>

            <Pagination />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DejobListing;
