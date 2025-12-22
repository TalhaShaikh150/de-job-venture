import React from "react";

import { Route, Routes } from "react-router-dom";
import ChakriLanding from "./Pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChakriLanding />} />
      </Routes>
    </>
  );
}

export default App;
