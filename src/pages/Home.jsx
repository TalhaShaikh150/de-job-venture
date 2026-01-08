import React from "react";
import Navbar from "../components/layout/Navbar";
import  Footer  from "../components/layout/Footer";

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
      <Hero />
      <Recruiters />
      <WhyChoose />
      <TopCites />
      <LatestOpportunities />
      <SalaryEstimate />
      <SucessStories />
      <Footer />
    </>
  );
};

export default Home;
