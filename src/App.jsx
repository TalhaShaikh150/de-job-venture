import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DejobSearch from "./pages/JobListings";
import AboutUs from "./pages/AboutUs";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./pages/auth/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<DejobSearch />} />
        <Route path="/about" element={<AboutUs />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
