import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DejobSearch from "./Pages/JobListings";
import AboutUs from "./Pages/AboutUs";

import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import AuthLayout from "./Pages/auth/AuthLayout";

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
