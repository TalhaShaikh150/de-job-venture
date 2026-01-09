import React from "react";
import {Facebook,Instagram,Linkedin}from "@/components/icons"

 const Footer = () => {
  return (
    <>
      <footer className="bg-[#0f1624] text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-white flex items-center gap-1 mb-4">
                Dejob{" "}
                <span className="text-brand-green text-xs align-top">●</span>
              </div>
              <p className="text-sm leading-6 mb-6">
                Dejob is the UK's largest independent job board, connecting
                millions of job seekers with thousands of employers.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5"/>
                </a>
                <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5"/>
               
                </a>
                <a href="#" className="hover:text-white transition">
                  
                <Linkedin className="w-5 h-5"/>
                </a>
              </div>
            </div>

            {/* Job Seekers */}
            <div>
              <h4 className="text-white font-semibold mb-4">Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Search Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Upload CV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Job Alerts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Employers */}
            <div>
              <h4 className="text-white font-semibold mb-4">Employers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Search CVs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Recruitment Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-green">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <p className="text-sm mb-2">123 Business Avenue, London, UK</p>
              <p className="text-sm mb-2">support@Dejob.com</p>
              <p className="text-sm">+44 (0) 20 1234 5678</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2023 Dejob Job Board. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer