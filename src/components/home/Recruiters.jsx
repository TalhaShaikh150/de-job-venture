import React from "react";

const logos = [
  { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
  { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
];

const Recruiters = () => {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8 md:mb-10">
        <h3 className="text-gray-400 font-semibold uppercase tracking-widest text-xs md:text-sm">
          Trusted by the world's best teams
        </h3>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto group">
        
        {/* Gradient Fades - Smaller on Mobile to show more logos */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 lg:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 lg:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:pause-scroll">
          
          {/* First Set */}
          <div className="flex items-center gap-8 md:gap-16 mx-4 md:mx-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Set for Loop */}
          <div className="flex items-center gap-8 md:gap-16 mx-4 md:mx-8">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recruiters;