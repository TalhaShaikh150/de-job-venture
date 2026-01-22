import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", // For the search bar
  filters: {
    location: "", // <--- ADD THIS
    job_type:"", // e.g. ['contract', 'full-time']
    experience_level: "", // e.g. 'senior'
    is_remote: false,
    min_salary: 0,
  },
  sort: "newest", // 'newest', 'salary_high', 'salary_low'
  pagination: {
    page: 1,
    limit: 20,
  },
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.pagination.page = 1; // Reset to page 1 on search
    },
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      // Handle logic for arrays or single values based on your UI needs
      state.filters[name] = value;
      state.pagination.page = 1;
    },
    setLocation: (state, action) => {
      state.filters.location = action.payload;
      state.pagination.page = 1;
    },
    toggleRemote: (state) => {
      state.filters.is_remote = !state.filters.is_remote;
      state.pagination.page = 1;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearchTerm,
  setFilter,
  setLocation,
  toggleRemote,
  setSort,
  setPage,
  resetFilters,
} = jobsSlice.actions;

export default jobsSlice.reducer;
