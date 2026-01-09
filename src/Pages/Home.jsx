import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Recruiters from "@/components/home/Recruiters";
import WhyChoose from "@/components/home/WhyChoose";
import TopCites from "@/components/home/TopCites";
import LatestOpportunities from "@/components/home/LatestOpportunities";
import SalaryEstimate from "@/components/home/SalaryEstimate";
import SucessStories from "@/components/home/SucessStories";

import HowWeWork from "@/components/home/HowWeWork";
import WhoWeAre from "@/components/home/WhoWeAre";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Recruiters />
      <WhoWeAre />
      <HowWeWork />
      {/* Call to Action for Profile Update */}
      <section className="py-20 bg-brand-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start your career in Germany?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Update your profile with your education, portfolio, and documents to
            get matched with top employers.
          </p>
          <a
            href="/profile"
            className="bg-brand-green hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-brand-green/50"
          >
            Update Profile Now
          </a>
        </div>
      </section>
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
