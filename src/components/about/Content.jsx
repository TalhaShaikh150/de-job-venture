import React from 'react'
import { CheckCircle2 } from "lucide-react";

const Content = () => {
  return (
    <section className="container mx-auto px-6 mb-24 md:pt-16 font-sans">
      {/* 1. Changed max-w-4xl to max-w-7xl so the two columns fit side-by-side comfortably */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-brand-green font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
            Dejob began with a simple observation: <br />
            <span className="text-slate-400">The resume is a broken concept.</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Text - Takes up 7 columns */}
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              <span className="text-6xl float-left mr-3 mt-[-10px] font-bold text-brand-green">F</span>
              or decades, recruitment has been about matching keywords on a PDF
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

          {/* RIGHT SIDE: Pull Quote - Takes up 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-center mt-4 lg:mt-0">
            <div className="bg-slate-50 border-l-4 border-brand-green p-8 md:p-12 rounded-r-3xl relative shadow-sm hover:shadow-md transition-shadow">
                
                {/* Big Quote Icon */}
                <div className="text-brand-green/20 absolute top-4 left-6 text-8xl font-serif leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="relative z-10 pt-4">
                  <blockquote className="text-2xl font-bold text-brand-dark leading-snug mb-8 font-serif italic">
                    We didn't want to build just another job board. We wanted to build a path to a better life.
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center text-lg font-bold shadow-md">
                        {/* Initials Placeholder */}
                        S
                     </div>
                     <div>
                        <div className="font-bold text-brand-dark text-lg">Simon K.</div>
                        <div className="text-xs font-bold text-brand-green uppercase tracking-wider">Founder, Dejob</div>
                     </div>
                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Content