import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import RTK Query hooks
import {
  useGetAllJobsQuery,
  useGetJobFiltersQuery,
} from "@/redux/services/jobsApi";
// Import Redux Actions
import { resetFilters, setPage } from "@/redux/features/jobs/jobsSlice";

// Import Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobHeader from "@/components/joblistings/JobHeader";
import FilterSection from "@/components/joblistings/Filter";
import JobCards from "@/components/joblistings/JobCards";
import Pagination from "@/components/common/Pagination";
import JobSorting from "@/components/joblistings/Sorting";
import JobCardSkeleton from "@/components/joblistings/JobCardSkeleton";
import { Funnel, Search } from "@/components/icons";

const DejobListing = () => {
  const dispatch = useDispatch();

  // 1. Get Redux State (Current UI Selection)
  const { filters, sort, searchTerm, pagination } = useSelector(
    (state) => state.jobs,
  );

  // 2. API CALLS
  // Fetch ALL jobs once (Client-Side Filtering approach)
  const { data: allJobsData, isLoading, error } = useGetAllJobsQuery();

  // Fetch available categories for sidebar
  const { data: filterOptions, isLoading: filtersLoading } =
    useGetJobFiltersQuery();

  // 3. FILTERING LOGIC (useMemo)
  const filteredJobs = useMemo(() => {
    // If data hasn't loaded yet, return empty
    if (!allJobsData) return [];

    let result = [...allJobsData];

    // A. Search Bar Logic (Title, Company, Skills)
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(lowerTerm) ||
          job.company_name.toLowerCase().includes(lowerTerm) ||
          (job.skills &&
            job.skills.some((skill) =>
              skill.toLowerCase().includes(lowerTerm),
            )),
      );
    }

    // B. Sidebar Filters Logic

    // Job Type (Single Select Logic now, based on your previous request)
    if (filters.job_type) {
      result = result.filter((job) => job.job_type === filters.job_type);
    }

    // Experience (Single Select)
    if (filters.experience_level) {
      result = result.filter(
        (job) => job.experience_level === filters.experience_level,
      );
    }

    // Location (Text search from "Where" input)
    if (filters.location) {
      result = result.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase()),
      );
    }

    // Min Salary (Numeric check)
    if (filters.min_salary > 0) {
      result = result.filter((job) => job.salary_min >= filters.min_salary);
    }

    // C. Sorting Logic
    if (sort === "newest") {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sort === "salary_high") {
      result.sort((a, b) => b.salary_max - a.salary_max);
    } else if (sort === "salary_low") {
      result.sort((a, b) => a.salary_min - b.salary_min);
    }

    return result;
  }, [allJobsData, filters, sort, searchTerm]);

  // 4. PAGINATION LOGIC (useMemo)
  const totalCount = filteredJobs.length;

  const paginatedJobs = useMemo(() => {
    // Fixed typo: was pagination.limitf
    const startIndex = (pagination.page - 1) * pagination.limit;
    const endIndex = startIndex + pagination.limit;
    return filteredJobs.slice(startIndex, endIndex);
  }, [filteredJobs, pagination.page, pagination.limit]);

  // 5. HELPERS FOR EMPTY STATE
  // Check if DB is totally empty (ignoring filters)
  const isDatabaseEmpty = !isLoading && allJobsData && allJobsData.length === 0;

  // Check if filters are active
  const hasActiveFilters =
    searchTerm !== "" ||
    (filters.job_type && filters.job_type.length > 0) ||
    filters.experience_level !== "" ||
    (filters.location && filters.location !== "") ||
    filters.min_salary > 0;

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagination.page]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-green selection:text-white">
      <Navbar />
      <JobHeader />

      <div className="container mx-auto px-4 mt-5 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- LEFT SIDEBAR (FILTERS) --- */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Funnel /> Filters
                </h2>
                <button
                  onClick={() => dispatch(resetFilters())}
                  className="text-xs font-semibold text-emerald-600 hover:underline"
                >
                  Reset
                </button>
              </div>

              {filtersLoading ? (
                // Skeleton for Sidebar
                <div className="space-y-6 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-20 bg-slate-100 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-20 bg-slate-100 rounded"></div>
                </div>
              ) : (
                <>
                  {/* Job Type (Single-Select) */}
                  <FilterSection
                    title="Job Type"
                    filterKey="job_type"
                    isMulti={false}
                    options={filterOptions?.job_type || []}
                  />

                  {/* Experience Level (Single-Select) */}
                  <FilterSection
                    title="Experience Level"
                    filterKey="experience_level"
                    isMulti={false}
                    options={filterOptions?.experience_level || []}
                  />

                  {/* Salary (Static ranges mapping to min_salary) */}
                  <FilterSection
                    title="Min Salary (Annual)"
                    filterKey="min_salary"
                    isMulti={false}
                    options={["30000", "50000", "80000", "100000", "120000"]}
                  />
                </>
              )}

              {/* Promo Box */}
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

          {/* --- RIGHT CONTENT (JOB FEED) --- */}
          <main className="flex-1">
            {/* Sorting & Count */}
            <JobSorting jobLength={totalCount} isLoading={isLoading} />

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl mb-6 text-center text-sm font-bold">
                Error loading jobs. Please check your internet connection.
              </div>
            )}

            {/* Job Grid */}
            <div className="grid gap-4">
              {isLoading ? (
                // LOADING SKELETONS
                Array.from({ length: 6 }).map((_, i) => (
                  <JobCardSkeleton key={i} />
                ))
              ) : paginatedJobs.length > 0 ? (
                // JOB CARDS (Render only the current page slice)
                paginatedJobs.map((job) => <JobCards key={job.id} job={job} />)
              ) : (
                // EMPTY STATE
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 px-6 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <Search className="text-slate-300 w-8 h-8" />
                  </div>

                  {/* 1. Title Logic */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {isDatabaseEmpty
                      ? "No jobs posted yet"
                      : "No matches found"}
                  </h3>

                  {/* 2. Description Logic */}
                  <p className="text-slate-500 font-medium max-w-sm mb-6">
                    {isDatabaseEmpty
                      ? "We are currently sourcing new opportunities. Please check back later!"
                      : "We couldn't find any jobs matching your current search. Try adjusting your filters or search terms."}
                  </p>

                  {/* 3. Button Logic: Only show clear button if NOT empty DB */}
                  {!isDatabaseEmpty && hasActiveFilters && (
                    <button
                      onClick={() => dispatch(resetFilters())}
                      className="px-6 py-2.5 bg-brand-green text-white font-bold rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-brand-green/20 transition-all"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Pagination */}
            {paginatedJobs.length > 0 && <Pagination totalCount={totalCount} />}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DejobListing;
