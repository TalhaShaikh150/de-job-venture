// src/redux/services/jobsApi.js
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/backend/config"; // Ensure this matches your Supabase config path

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    
    // 1. GET ALL JOBS
    // Fetches all active jobs once so we can filter them instantly in the browser.
    getAllJobs: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("status", "active") // Only show active jobs
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching jobs:", error);
          return { error };
        }

        return { data };
      },
    }),

    // 2. GET AVAILABLE FILTER OPTIONS
    // Scans the database to see which Job Types and Experience Levels actually exist.
    // This prevents the sidebar from showing options that have 0 results.
    getJobFilters: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from("jobs")
          .select("job_type, experience_level")
          .eq("status", "active");

        if (error) {
          console.error("Error fetching filters:", error);
          return { error };
        }

        // Logic to extract unique (Distinct) values
        const uniqueJobTypes = [...new Set(data.map((item) => item.job_type))].filter(Boolean);
        const uniqueExpLevels = [...new Set(data.map((item) => item.experience_level))].filter(Boolean);

        return {
          data: {
            job_type: uniqueJobTypes,
            experience_level: uniqueExpLevels,
          },
        };
      },
    }),

  }),
});

// Export hooks for use in React components
export const { useGetAllJobsQuery, useGetJobFiltersQuery } = jobsApi;