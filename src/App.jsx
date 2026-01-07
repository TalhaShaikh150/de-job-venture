import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DejobSearch from "./Pages/JobListings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<DejobSearch />} />
      </Routes>
    </>
  );
}

export default App;
