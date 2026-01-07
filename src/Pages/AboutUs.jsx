import React from "react";
import Navbar from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div class="bg-[#0f1624] pt-16 pb-48 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div class="container mx-auto px-6 text-center relative z-10">
          <span class="text-brand-green font-bold tracking-widest text-xs uppercase mb-4 block">
            Who We Are
          </span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We connect the world's <br />
            <span class="text-brand-green">untapped potential.</span>
          </h1>
        </div>
      </div>

      <div class="container mx-auto px-6 -mt-32 relative z-20 mb-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform md:translate-y-12 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform md:translate-y-12 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <section class="container mx-auto px-6 mb-24 md:pt-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 leading-snug">
            Dejob began with a simple observation:
            <span class="text-gray-400">The resume is a broken concept.</span>
          </h2>

          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              For decades, recruitment has been about matching keywords on a PDF
              to keywords in a job description. It’s impersonal, inefficient,
              and often unfair. We realized that to fix hiring, we had to look
              beyond the paper.
            </p>
            <p>
              Founded in 2023, Dejob is building the infrastructure for a
              skills-first economy. We use advanced data modeling to understand
              what a candidate is truly capable of, matching them with companies
              that share their values and vision.
            </p>
            <p>
              Today, we serve millions of professionals across 120 countries,
              helping them navigate their careers with clarity, confidence, and
              data-backed insights. We aren't just a job board; we are your
              career operating system.
            </p>
          </div>

          <div class="mt-12 pt-12 border-t border-gray-100 flex flex-wrap gap-12">
            <div>
              <h3 class="text-4xl font-bold text-brand-dark mb-1">200k+</h3>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider">
                Jobs Posted
              </p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-brand-dark mb-1">9,914</h3>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider">
                Companies
              </p>
            </div>
            <div>
              <h3 class="text-4xl font-bold text-brand-dark mb-1">15M+</h3>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider">
                Matches Made
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white relative">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Milestones
            </span>
            <h2 class="text-3xl font-bold text-gray-900">
              From concept to global platform.
            </h2>
          </div>

          <div class="max-w-4xl mx-auto relative">
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2 ml-6 md:ml-0"></div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:text-right md:pr-12 pl-16 md:pl-0">
                <h3 class="text-xl font-bold text-gray-900">The Inception</h3>
                <p class="text-gray-500 mt-2">
                  Dejob is founded in London by two ex-recruiters tired of the
                  status quo.
                </p>
              </div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2021</span>
              </div>
              <div class="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:pr-12 hidden md:block"></div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2022</span>
              </div>
              <div class="flex-1 md:pl-12 pl-16">
                <h3 class="text-xl font-bold text-gray-900">
                  Series A Funding
                </h3>
                <p class="text-gray-500 mt-2">
                  Raised $15M to build our proprietary AI matching engine and
                  expand to Europe.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div class="flex-1 md:text-right md:pr-12 pl-16 md:pl-0">
                <h3 class="text-xl font-bold text-gray-900">
                  200k Jobs Milestone
                </h3>
                <p class="text-gray-500 mt-2">
                  We hit a critical mass of verified listings, becoming the
                  fastest growing board in the UK.
                </p>
              </div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-brand-green transition-colors duration-300">
                <span class="text-xs font-bold text-brand-dark">2023</span>
              </div>
              <div class="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            <div class="relative flex flex-col md:flex-row items-center justify-between group">
              <div class="flex-1 md:pr-12 hidden md:block"></div>
              <div class="absolute left-0 md:left-1/2 w-12 h-12 bg-brand-green border-4 border-brand-green rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg shadow-green-500/30">
                <span class="text-xs font-bold text-white">NOW</span>
              </div>
              <div class="flex-1 md:pl-12 pl-16">
                <h3 class="text-xl font-bold text-gray-900">
                  Global Expansion
                </h3>
                <p class="text-gray-500 mt-2">
                  Launching in the US and Asia-Pacific markets with new
                  enterprise tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-24">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-end mb-12">
            <div>
              <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
                Our Offices
              </span>
              <h2 class="text-3xl font-bold text-gray-900">Where we build.</h2>
            </div>
            <a
              href="#"
              class="text-sm font-medium text-gray-500 hover:text-brand-green transition hidden md:block"
            >
              View all locations &rarr;
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
                  HQ
                </p>
                <h3 class="text-2xl font-bold">London, UK</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Engineering & Product
                </p>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  EMEA Hub
                </p>
                <h3 class="text-2xl font-bold">Berlin, DE</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Sales & Marketing
                </p>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Americas
                </p>
                <h3 class="text-2xl font-bold">New York, USA</h3>
                <p class="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Partnerships & Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#0f1624] py-24 text-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-4 block">
                Impact
              </span>
              <h2 class="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Changing lives, <br />
                one placement at a time.
              </h2>
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-brand-dark cursor-pointer transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </div>
                <div class="w-12 h-12 rounded-full bg-brand-green text-brand-dark flex items-center justify-center cursor-pointer hover:bg-white transition">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-white/5 border border-white/10 p-10 rounded-3xl relative backdrop-blur-sm">
              <svg
                class="absolute top-8 left-8 w-10 h-10 text-brand-green opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.277 15.637 15.062C16.859 14.866 17.017 15.792 17.017 15.792C17.017 15.792 18.017 16 18.017 15C18.017 14 15.017 11 15.017 11L19.017 9C19.017 9 20.017 10 20.017 12C20.017 14 20.017 18 19.017 20C18.017 22 14.017 21 14.017 21ZM5 21L5 18C5 16.896 5.308 15.277 6.621 15.062C7.843 14.866 8 15.792 8 15.792C8 15.792 9 16 9 15C9 14 6 11 6 11L10 9C10 9 11 10 11 12C11 14 11 18 10 20C9 22 5 21 5 21Z" />
              </svg>

              <p class="text-xl md:text-2xl text-gray-200 leading-relaxed mt-4 mb-8 relative z-10">
                "I was stuck in a career rut for years. Dejob's transparency
                about salary and culture helped me find a remote role that
                doubled my income and gave me my freedom back."
              </p>

              <div class="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  class="w-12 h-12 rounded-full object-cover ring-2 ring-brand-green"
                />
                <div>
                  <h4 class="font-bold text-white">Michael Gough</h4>
                  <p class="text-sm text-gray-400">
                    Senior Developer @ Spotify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="bg-gray-50 rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 p-12 flex flex-col justify-center">
              <span class="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-bold w-fit mb-6">
                We are hiring
              </span>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Build the future with us.
              </h2>
              <p class="text-gray-600 mb-8 leading-relaxed">
                We're a remote-first team of 80+ people obsessed with fixing
                recruitment. If you love solving complex problems and care about
                impact, we want you.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fully remote culture
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Competitive equity packages
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <svg
                    class="w-5 h-5 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Annual company retreats
                </li>
              </ul>
              <a
                href="#"
                class="text-brand-dark font-bold border-b-2 border-brand-green pb-1 w-fit hover:text-brand-green transition-colors"
              >
                View Internal Openings &rarr;
              </a>
            </div>
            <div class="w-full md:w-1/2 relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 py-24">
        <div class="container mx-auto px-6">
          <div class="mb-16">
            <span class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">
              Our Vision
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Architecting the future of work.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#0f1624] rounded-3xl p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group">
              <div class="absolute right-0 top-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

              <div class="relative z-10">
                <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 border border-white/5">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Scientific Matching
                </h3>
                <p class="text-gray-400 leading-relaxed mb-8">
                  We removed the bias. Our algorithms prioritize skill density
                  and verified experience over prestigious school names or
                  personal connections. It's pure meritocracy.
                </p>
              </div>
              <a
                href="#"
                class="text-brand-green font-medium flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn about our AI <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div class="flex flex-col gap-8">
              <div class="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition duration-300">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-xl font-bold text-gray-900">
                    Total Transparency
                  </h3>
                  <span class="bg-green-50 text-brand-green px-3 py-1 rounded-full text-xs font-bold">
                    New Standard
                  </span>
                </div>
                <p class="text-gray-600 mb-6">
                  Salary ranges, interview stages, and response times are
                  visible before you apply. We are ending the era of
                  "competitive salary" mystery.
                </p>
              </div>

              <div class="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition duration-300">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-xl font-bold text-gray-900">
                    Border-less Talent
                  </h3>
                  <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    Global
                  </span>
                </div>
                <p class="text-gray-600 mb-6">
                  Location shouldn't limit potential. We provide the legal and
                  logistical framework for companies to hire the best person,
                  regardless of where they live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
