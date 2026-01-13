import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactMap from "@/components/contact/ContactMap";
import Faq from "@/components/contact/Faq";

// --- MAIN PAGE ---

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-green selection:text-white">
      <Navbar />
      <ContactHeader />
      <ContactMap />
      <Faq />
      <Footer />
    </div>
  );
};

export default ContactUs;
