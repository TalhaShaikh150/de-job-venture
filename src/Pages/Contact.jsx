import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ChevronDown, 
  Send, 
  Briefcase,
  ArrowRight
} from "@/components/icons";

// --- SUB-COMPONENTS ---

const ContactCard = ({ icon, title, desc, link, action }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group text-center flex flex-col items-center">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-slate-500 mb-6 text-sm leading-relaxed">{desc}</p>
    <a href={link} className="text-brand-green font-bold text-sm border-b-2 border-transparent group-hover:border-brand-green transition-all pb-0.5">
      {action}
    </a>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-brand-green transition-colors">{question}</span>
        <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
        <p className="text-slate-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- SECTIONS ---

const TeamSection = () => {
  const team = [
    { name: "Sarah Müller", role: "Head of Support", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
    { name: "Felix Bauer", role: "Sales Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
    { name: "Elena Weber", role: "Community Lead", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "Lukas Schmidt", role: "Tech Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Meet the team helping you succeed</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16">Real people, based in Berlin, ready to answer your questions.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-brand-green transition-colors">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
              <p className="text-sm text-brand-green font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfficeLocations = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Our Locations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Come visit us.</h2>
           </div>
           <p className="text-slate-500 max-w-md mt-4 md:mt-0 text-right">We have hubs in Germany's most vibrant cities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Berlin HQ */}
           <div className="relative h-80 rounded-[2rem] overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Berlin" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                 <h3 className="text-2xl font-bold text-white mb-1">Berlin HQ</h3>
                 <p className="text-slate-300 text-sm mb-4">Friedrichstraße 123, 10117 Berlin</p>
                 <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">Open 9am - 6pm</span>
              </div>
           </div>

           {/* Munich Hub */}
           <div className="relative h-80 rounded-[2rem] overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1595867865312-9ac2d5344556?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Munich" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                 <h3 className="text-2xl font-bold text-white mb-1">Munich Hub</h3>
                 <p className="text-slate-300 text-sm mb-4">Leopoldstraße 56, 80802 München</p>
                 <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">Co-working Access</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const CommunityCTA = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto bg-brand-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Community</h2>
            <p className="text-slate-400 mb-10 text-lg">
               Not ready to contact us? Join our Discord server to chat with 50,000+ other professionals and recruiters in real-time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-8 py-4 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2">
                  Join Discord <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all">
                  Read Documentation
               </button>
            </div>
         </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-green selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#161F33] pt-32 pb-40 relative overflow-hidden text-center">
        {/* Abstract Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            We're here to help
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Get in touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Dejob.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about finding a job or hiring talent? Our team is ready to help you succeed in the German job market.
          </p>
        </div>
      </section>

      {/* --- CONTACT GRID & FORM --- */}
      <div className="container mx-auto px-4 -mt-24 relative z-20 pb-24">
        
        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <ContactCard 
            icon={<Mail className="w-6 h-6" />} 
            title="Support" 
            desc="For technical issues and general inquiries about your account." 
            action="support@dejob.de" 
            link="mailto:support@dejob.de"
          />
          <ContactCard 
            icon={<Briefcase className="w-6 h-6" />} 
            title="Sales" 
            desc="Interested in our hiring solutions? Talk to our sales team." 
            action="sales@dejob.de" 
            link="mailto:sales@dejob.de"
          />
          <ContactCard 
            icon={<MapPin className="w-6 h-6" />} 
            title="Visit Us" 
            desc="Come say hello at our main office in Berlin." 
            action="View on Google Maps" 
            link="#"
          />
        </div>

        {/* Contact Form & Info Split */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row mb-24">
          
          {/* Left: Form */}
          <div className="w-full lg:w-3/5 p-10 md:p-16">
            <h3 className="text-3xl font-extrabold text-brand-dark mb-2">Send us a message</h3>
            <p className="text-slate-500 mb-10">We'll get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400" placeholder="Jane" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full md:w-auto px-8 py-4 bg-brand-dark hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Info Panel */}
          <div className="w-full lg:w-2/5 bg-slate-50 p-10 md:p-16 border-l border-slate-100 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

             <div>
                <h4 className="font-bold text-brand-dark mb-6">Contact Information</h4>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-green shadow-sm shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Email</p>
                         <p className="text-slate-500 text-sm">hallo@dejob.de</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-green shadow-sm shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Phone</p>
                         <p className="text-slate-500 text-sm">+49 (0) 30 1234 5678</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-green shadow-sm shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Office</p>
                         <p className="text-slate-500 text-sm">Friedrichstraße 123<br/>10117 Berlin, Germany</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-12">
                <h4 className="font-bold text-brand-dark mb-4">Follow us</h4>
                <div className="flex gap-3">
                   {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map(social => (
                      <a key={social} href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:text-brand-green hover:border-brand-green transition-all shadow-sm">
                         {social}
                      </a>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- ADDITIONAL SECTIONS --- */}
      <OfficeLocations />
      <TeamSection />
      <CommunityCTA />

      {/* --- FAQ SECTION --- */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
             <p className="text-slate-500">Quick answers to questions you might have.</p>
          </div>
          
          <div className="space-y-2">
             <FAQItem 
               question="How do I post a job on Dejob?" 
               answer="Posting a job is simple. Click on 'Post a Job' in the navigation bar, create an employer account, and follow the step-by-step guide to publish your listing."
             />
             <FAQItem 
               question="Is Dejob free for candidates?" 
               answer="Yes! Searching for jobs, creating a profile, and applying to companies is 100% free for all candidates."
             />
             <FAQItem 
               question="How long does it take to get verified?" 
               answer="Our team reviews profile verifications within 24-48 hours. You will receive an email notification once your profile status is updated."
             />
             <FAQItem 
               question="Can I apply for jobs outside of Germany?" 
               answer="Currently, Dejob is focused exclusively on the DACH region (Germany, Austria, Switzerland) to ensure the highest quality of matches."
             />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F172A] text-slate-400 py-16">
        <div className="container mx-auto px-4 text-center">
           <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xs">DJ</div>
              <span className="text-xl font-bold text-white tracking-tight">Dejob.</span>
           </div>
           <p className="text-sm mb-8">Connecting talent with opportunity in Germany.</p>
           <p className="text-xs text-slate-600">&copy; 2024 Dejob Venture GmbH. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default ContactUs;