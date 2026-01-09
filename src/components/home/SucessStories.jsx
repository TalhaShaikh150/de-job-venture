import React from "react";
import { Quote, Star } from "@/components/icons";

const SucessStories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Success Stories
        </h2>

        {/* Changed items-start to items-stretch for equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Review 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl relative flex flex-col hover:shadow-lg transition-shadow duration-300">
            <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-200" />
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">David Chen</h4>
                <p className="text-xs text-gray-500">Hired at Google</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-grow">
              "Within 3 days of creating my profile, I had interviews scheduled with two top tech companies. The process was seamless and the job alerts were spot on."
            </p>
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>

          {/* Review 2 - Removed negative margin and border to match symmetry */}
          <div className="bg-gray-50 p-8 rounded-2xl relative flex flex-col hover:shadow-lg transition-shadow duration-300">
            <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-200" />
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                <p className="text-xs text-gray-500">Hired at Spotify</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-grow">
              "The salary insights tool was a game changer. I realized I was underpaid and used the data to negotiate a 20% higher starting salary."
            </p>
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl relative flex flex-col hover:shadow-lg transition-shadow duration-300">
            <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-200" />
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Marcus Reid</h4>
                <p className="text-xs text-gray-500">Hired at Tesla</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-grow">
              "Best job board I've used. No spam, just high quality leads. The company reviews helped me avoid a toxic workplace."
            </p>
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SucessStories;