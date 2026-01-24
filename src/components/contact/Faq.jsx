import React, { useState } from "react";
// --- SUB-COMPONENTS ---
import { ArrowRight, ChevronDown } from "lucide-react";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border-brand-green/50 bg-brand-green/5"
          : "border-slate-200 bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span
          className={`text-lg font-bold transition-colors ${
            isOpen ? "text-brand-dark" : "text-slate-700"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-brand-green bg-brand-green text-white rotate-180"
              : "border-slate-200 text-slate-400"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-slate-500 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <>
      {/* ==================== 3. FAQ SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* FAQ Header */}
            <div className="lg:w-1/3">
              <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2 block">
                Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Can't find the answer you're looking for? Chat with our team
                directly.
              </p>
              <a
                href="#map"
                className="inline-flex items-center gap-2 text-brand-dark font-bold border-b-2 border-brand-green hover:text-brand-green transition-colors pb-1"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* FAQ Items */}
            <div className="lg:w-2/3 space-y-4">
              <FAQItem
                question="How do I post a job on Dejob?"
                answer="Posting a job is simple. Click on 'Post a Job' in the navigation bar, create an employer account, and follow the step-by-step guide to publish your listing. Verified companies get priority listing."
              />
              <FAQItem
                question="Is Dejob free for candidates?"
                answer="Yes! Searching for jobs, creating a profile, and applying to companies is 100% free for all candidates. We only charge companies for premium listings."
              />
              <FAQItem
                question="How long does profile verification take?"
                answer="Our team reviews profile verifications within 24-48 hours. Please ensure your uploaded documents (ID, Education) are clear to avoid delays."
              />
              <FAQItem
                question="Can I apply for jobs from outside the EU?"
                answer="Yes. Many of our partner companies offer visa sponsorship. Make sure to filter jobs by 'Visa Sponsorship Available' when searching."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
