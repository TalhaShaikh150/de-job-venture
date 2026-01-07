import React from "react";

const SucessStories = () => {
  return (
    <>
      {/* ==================== NEW: SUCCESS STORIES ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl relative">
              <svg
                className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
              </svg>
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
              <p className="text-gray-600 italic leading-relaxed">
                "Within 3 days of creating my profile, I had interviews
                scheduled with two top tech companies. The process was seamless
                and the job alerts were spot on."
              </p>
              <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl relative mt-0 md:-mt-4 shadow-lg border-b-4 border-brand-green">
              <svg
                className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
              </svg>
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
              <p className="text-gray-600 italic leading-relaxed">
                "The salary insights tool was a game changer. I realized I was
                underpaid and used the data to negotiate a 20% higher starting
                salary."
              </p>
              <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl relative">
              <svg
                className="absolute top-8 right-8 w-10 h-10 text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.0547 15.192 14.6328 16.741 14.3145C18.127 14.0293 19.525 14.2812 20.6133 13.9102C21.7344 13.5273 22.9805 12.5 22.9805 10.5C22.9805 8.29102 21.1895 6.5 18.9805 6.5C16.7715 6.5 14.9805 8.29102 14.9805 10.5C14.9805 10.707 15.0039 10.9082 15.0273 11.1133C14.4922 11.0508 13.9805 10.998 13.5078 10.875C9.77344 9.9043 7.50391 6.5 7.50391 6.5L6.5 8C6.5 8 8.8457 11.9688 11.832 13.9453C12.9238 14.668 12.9102 16.1758 12.9102 17.5C12.9102 19.4336 11.3438 21 9.41016 21H14.017ZM8 21L8 18C8 16.0547 9.1746 14.6328 10.7246 14.3145C12.1102 14.0293 13.5086 14.2812 14.5977 13.9102C15.7188 13.5273 16.9648 12.5 16.9648 10.5C16.9648 8.29102 15.1738 6.5 12.9648 6.5C10.7559 6.5 8.96484 8.29102 8.96484 10.5C8.96484 10.707 8.98828 10.9082 9.01172 11.1133C8.47656 11.0508 7.96484 10.998 7.49219 10.875C3.75781 9.9043 1.48828 6.5 1.48828 6.5L0.484375 8C0.484375 8 2.83008 11.9688 5.81641 13.9453C6.9082 14.668 6.89453 16.1758 6.89453 17.5C6.89453 19.4336 5.32812 21 3.39453 21H8Z" />
              </svg>
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
              <p className="text-gray-600 italic leading-relaxed">
                "Best job board I've used. No spam, just high quality leads. The
                company reviews helped me avoid a toxic workplace."
              </p>
              <div className="flex text-yellow-400 mt-4 text-sm">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SucessStories;
