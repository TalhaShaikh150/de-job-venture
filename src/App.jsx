import React from "react";

import { Route, Routes } from "react-router-dom";
import ChakriLanding from "./Pages/Home";
import DejobSearch from "./Pages/Listing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChakriLanding />} />
        <Route path="/listing" element={<DejobSearch />} />
      </Routes>
    </>
  );
}

export default App;
