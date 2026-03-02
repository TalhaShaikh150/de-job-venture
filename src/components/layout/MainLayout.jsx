import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar"; // Ensure path is correct

const MainLayout = () => {
  return (
    <>
      {/* Navbar loads here ONCE */}
      <Navbar />
      
      {/* Outlet is where Home, About, Profile, etc. will appear */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;