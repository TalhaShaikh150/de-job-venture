import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "@/components/layout/MainLayout"; 
import AuthLayout from "@/Pages/auth/AuthLayout";

// Components
import ProtectedRoute from "./Pages/auth/ProtectedRoute";

// Pages
import Home from "@/Pages/Home";
import DejobSearch from "@/Pages/JobListings";
import AboutUs from "@/Pages/AboutUs";
import Contact from "@/Pages/Contact";
import JobDetailsPage from "@/Pages/JobDetailsPage";
import ProfilePage from "@/Pages/ProfilePage";
import Login from "@/Pages/auth/Login";
import SignUp from "@/Pages/auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        
        {/* ─── GROUP 1: PUBLIC PAGES ─── */}
        {/* Navbar renders immediately. Used for Home, Jobs, etc. */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<DejobSearch />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    
        {/* ─── GROUP 2: PROTECTED PAGES ─── */}
        {/* 
           Logic:
           1. ProtectedRoute runs FIRST.
           2. If Loading -> Shows Spinner (No Navbar).
           3. If No User -> Redirects to Login (No Navbar).
           4. If User Exists -> Renders MainLayout (Navbar appears) -> Renders Profile.
        */}
        <Route element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
           <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* ─── GROUP 3: AUTH PAGES ─── */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;