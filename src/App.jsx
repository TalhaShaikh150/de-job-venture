import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DejobSearch from "./Pages/JobListings";
import AboutUs from "./Pages/AboutUs";
import LoginSignUp from "./Pages/LoginSignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<DejobSearch />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </>
  );
}

export default App;
