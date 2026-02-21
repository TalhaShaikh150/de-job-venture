import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Recruiters from "@/components/home/Recruiters";
import WhyChoose from "@/components/home/WhyChoose";
import TopCities from "@/components/home/TopCities";
import LatestOpportunities from "@/components/home/LatestOpportunities";
import SalaryEstimate from "@/components/home/SalaryEstimate";
import SuccessStories from "@/components/home/SuccessStories";

import HowWeWork from "@/components/home/HowWeWork";
import WhoWeAre from "@/components/home/WhoWeAre";
import CTAProfile from "@/components/layout/Cta";
const Home = () => {
  return (
    <>
      {/* Before */}
      <Navbar />
      <Hero />
      <Recruiters />
      <WhoWeAre />
      <HowWeWork />
      {/* <CTAProfile /> */}
      <WhyChoose />
      <TopCities />
      <LatestOpportunities />
      {/* <SalaryEstimate /> */}
      <SuccessStories />
      <Footer />
    </>
  );
};

export default Home;
