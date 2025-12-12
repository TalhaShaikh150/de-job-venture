import React from "react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Aplication from "./Pages/Aplication";
import { Route, Routes } from "react-router-dom";
import Joblisting from "./Pages/Listing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/listing" element={<Joblisting />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/application" element={<Aplication />} />
      </Routes>
    </>
  );
}

export default App;
