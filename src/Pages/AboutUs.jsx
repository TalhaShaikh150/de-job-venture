import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import Content from "@/components/about/Content";
import Milestone from "@/components/about/Milestone";
import Hiring from "@/components/about/Hiring";
import Vision from "@/components/about/Vision";

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutHeader />

      <Content />

      <Hiring />
      <Milestone />


      <Vision />
      <Footer />
    </>
  );
}

export default AboutUs;
