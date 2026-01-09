import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div class="bg-[#0f1624] pt-16 pb-48 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div class="container mx-auto pax-6 text-center relative z-10">
          <span class="text-brand-green font-bold tracking-widest text-xs uppercase mb-4 block">
            Who We Are
          </span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We connect the world's <br />
            <span class="text-brand-green">untapped potential</span>
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
    </>
  );
};

export default AboutHeader;
