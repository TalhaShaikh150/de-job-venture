import React from 'react'

const Impact = () => {
  return (
    <>
     
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
    </>
  )
}

export default Impact