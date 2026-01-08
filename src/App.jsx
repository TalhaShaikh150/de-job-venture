import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import DejobSearch from "./views/JobListings";
import AboutUs from "./views/AboutUs";

import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import AuthLayout from "./views/auth/AuthLayout";

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
