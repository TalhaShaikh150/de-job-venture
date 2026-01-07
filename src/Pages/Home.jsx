import React from "react";
import Navbar from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Recruiters from "../components/home/Recruiters";
import WhyChoose from "../components/home/WhyChoose";
import TopCites from "../components/home/TopCites";
import LatestOpportunities from "../components/home/LatestOpportunities";
import SalaryEstimate from "../components/home/SalaryEstimate";
import SucessStories from "../components/home/SucessStories";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-50 text-gray-800">
        <Hero />

        <Recruiters />

        <WhyChoose />

        <TopCites />

        <LatestOpportunities />
        <SalaryEstimate />
        <SucessStories />

        {/* ==================== FOOTER ==================== */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
