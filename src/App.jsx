import React from "react";
import Home from "./Pages/Home";
import JobListing from "./Pages/JobListing";

import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Aplication from "./Pages/Aplication";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<JobListing />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/application" element={<Aplication />} />
      </Routes>
    </>
  );
}

export default App;
