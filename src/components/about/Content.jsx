import React from 'react'

const AboutContent = () => {
  return (
    <>
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
    </>
  )
}

export default AboutContent