import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobHeader from "@/components/joblistings/JobHeader";
import FilterSection from "@/components/joblistings/Filter";
import JobCards from "@/components/joblistings/JobCards";
import Pagination from "@/components/common/Pagination";
import JobSorting from "@/components/joblistings/Sorting";
import { Funnel } from "@/components/icons";
// --- DATA ---
const JOBS = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Zalando",
    location: "Berlin, DE",
    type: "Full Time",
    salary: "€75k - €95k",
    posted: "2 hours ago",
    logo: "https://ui-avatars.com/api/?name=Zalando&background=FF9900&color=fff&size=128",
    bg: "bg-orange-50",
    tags: ["UI/UX", "Figma", "English"],
    featured: true,
  },
  {
    id: 2,
    title: "Frontend Engineer (React)",
    company: "N26",
    location: "Remote (Germany)",
    type: "Full Time",
    salary: "€65k - €85k",
    posted: "5 hours ago",
    logo: "https://ui-avatars.com/api/?name=N26&background=36A18B&color=fff&size=128",
    bg: "bg-teal-50",
    tags: ["React", "TypeScript", "Fintech"],
    featured: false,
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "HelloFresh",
    location: "Berlin, DE",
    type: "Hybrid",
    salary: "€55k - €70k",
    posted: "1 day ago",
    logo: "https://ui-avatars.com/api/?name=HelloFresh&background=91C949&color=fff&size=128",
    bg: "bg-green-50",
    tags: ["Growth", "SEO", "German C1"],
    featured: false,
  },
  {
    id: 4,
    title: "Backend Developer (Go)",
    company: "Trade Republic",
    location: "Berlin, DE",
    type: "Contract",
    salary: "€800 / day",
    posted: "2 days ago",
    logo: "https://ui-avatars.com/api/?name=Trade+Republic&background=111111&color=fff&size=128",
    bg: "bg-slate-100",
    tags: ["Golang", "AWS", "English"],
    featured: false,
  },
  {
    id: 5,
    title: "Head of Product",
    company: "SAP",
    location: "Walldorf, DE",
    type: "Full Time",
    salary: "€120k+",
    posted: "3 days ago",
    logo: "https://ui-avatars.com/api/?name=SAP&background=008FD3&color=fff&size=128",
    bg: "bg-blue-50",
    tags: ["Management", "SaaS", "German C2"],
    featured: true,
  },
  {
    id: 6,
    title: "Customer Support Lead",
    company: "Lufthansa",
    location: "Frankfurt, DE",
    type: "On-site",
    salary: "€45k - €55k",
    posted: "4 days ago",
    logo: "https://ui-avatars.com/api/?name=Lufthansa&background=05164d&color=fff&size=128",
    bg: "bg-yellow-50",
    tags: ["Support", "Team Lead"],
    featured: false,
  },
];

const DejobListing = () => {
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
            <JobSorting />

            <div className="grid gap-4">
              {JOBS.map((job) => (
                <JobCards key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
          </main>
        </div>
        <Pagination />
      </div>

      <Footer />
    </div>
  );
};

export default DejobListing;
