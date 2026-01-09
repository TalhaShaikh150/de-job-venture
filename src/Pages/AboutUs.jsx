import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import Content from "@/components/about/Content";
import Milestone from "@/components/about/Milestone";
import Offices from "@/components/about/Offices";
import Impact from "@/components/about/Impact";
import Hiring from "@/components/about/Hiring";
import Vision from "@/components/about/Vision";

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutHeader />

      <Content/>

      <Milestone/>

     <Offices/>

    <Impact/>
    <Hiring/>

     <Vision/>
      <Footer />
    </>
  );
}

export default AboutUs;
