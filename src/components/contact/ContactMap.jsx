import React from "react";
import { Send, Phone, Clock, MapPin } from "lucide-react";
const ContactMap = () => {
  return (
    <>
      {/* =================== 2. SPLIT LAYOUT: FORM & MAP ==================== */}
      <section id="map" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-dark/5 overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-auto lg:h-[800px]">
            {/* LEFT: Contact Form */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-brand-dark mb-2">
                  Send a message
                </h2>
                <p className="text-slate-500">
                  Fill out the form and we'll be in touch shortly.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-green hover:shadow-lg hover:shadow-brand-green/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Send Message{" "}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Bottom Info */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-6 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-green" /> +49 (0) 30 1234
                  5678
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-green" /> Mon-Fri,
                  9am-6pm
                </span>
              </div>
            </div>

            {/* RIGHT: Creative Map Embed */}
            <div className="w-full lg:w-1/2 relative bg-slate-200 group overflow-hidden">
              {/* Overlay for Styling (Grayscale to Color on Hover) */}
              <div className="absolute inset-0 bg-brand-dark/20 z-10 pointer-events-none mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700"></div>

              {/* GOOGLE MAP IFRAME */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.51786676343!2d13.259928373804368!3d52.50651167732238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1709228491234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(0%) contrast(1.1)",
                }}
                className="w-full h-full group-hover:filter-none transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Location Card on Map */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-brand-dark">Berlin HQ</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Friedrichstraße 123, 10117 Berlin
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-green/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
