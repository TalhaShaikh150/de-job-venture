import React from "react";
import { MapPin, Clock, Bookmark, Building2, Globe, Banknote } from "@/components/icons";

// ==========================================
// 1. HELPER FUNCTIONS (Logic Layer)
// ==========================================

/**
 * Formats salary range (e.g. 60, 80 -> "€60k - €80k")
 */
const formatSalary = (min, max) => {
  if (!min && !max) return null;
  const format = (n) => `€${n}k`;
  if (min && max) return `${format(min)} - ${format(max)}`;
  if (min) return `From ${format(min)}`;
  return `Up to ${format(max)}`;
};

/**
 * Formats enum strings (e.g. "full_time" -> "Full Time")
 */
const formatText = (text) => {
  if (!text) return "";
  return text.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

/**
 * Calculates relative time (e.g. "2 days ago")
 */
const timeAgo = (dateString) => {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  const now = new Date();
  const diffSeconds = Math.floor((now - date) / 1000);
  
  if (diffSeconds < 60) return "Just now";
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
  
  const diffDays = Math.floor(diffSeconds / 86400);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
};

// ==========================================
// 2. SUB-COMPONENTS (UI Parts)
// ==========================================

const FeaturedBadge = () => (
  <div className="absolute -top-px -right-px bg-brand-green text-brand-dark text-[10px] font-extrabold px-3 py-1 rounded-bl-xl rounded-tr-xl z-10 shadow-sm uppercase tracking-wider">
    Featured
  </div>
);

const CompanyLogo = ({ url, name }) => (
  <div className="w-14 h-14 rounded-xl flex items-center justify-center p-1 border border-slate-100 bg-white shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
    {url ? (
      <img src={url} alt={name} className="w-full h-full object-contain rounded-lg" />
    ) : (
      <Building2 className="w-6 h-6 text-slate-300" />
    )}
  </div>
);

const Tag = ({ icon: Icon, text, className }) => (
  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${className}`}>
    {Icon && <Icon className="w-3.5 h-3.5" />}
    {text}
  </span>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

const JobCards = ({ job }) => {
  const {
    title,
    company_name,
    company_logo,
    location,
    job_type,
    experience_level,
    salary_min,
    salary_max,
    skills,
    is_remote,
    is_featured,
    created_at,
  } = job;

  return (
    <div
      className={`relative bg-white p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col h-full ${
        is_featured
          ? "border-brand-green/40 shadow-lg shadow-brand-green/5 ring-1 ring-brand-green/10"
          : "border-slate-200 hover:border-brand-green/30 hover:shadow-xl"
      }`}
    >
      {is_featured && <FeaturedBadge />}

      {/* --- HEADER --- */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-start gap-4">
          <CompanyLogo url={company_logo} name={company_name} />
          
          <div>
            <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-green transition-colors line-clamp-1">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-500 font-medium">
              <span className="text-slate-700">{company_name}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <div className="flex items-center gap-1">
                {is_remote ? <Globe className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                <span className="truncate max-w-[150px]">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="text-slate-400 hover:text-brand-green hover:bg-brand-green/5 p-2 rounded-full transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      {/* --- DETAILS ROW --- */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Tag 
          text={formatText(job_type)} 
          className="bg-slate-50 text-slate-600 border-slate-100" 
        />
        <Tag 
          text={formatText(experience_level)} 
          className="bg-slate-50 text-slate-600 border-slate-100" 
        />
        {(salary_min || salary_max) && (
          <Tag 
            icon={Banknote}
            text={formatSalary(salary_min, salary_max)} 
            className="bg-brand-dark/5 text-brand-dark border-brand-dark/10" 
          />
        )}
      </div>

      {/* --- SKILLS --- */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-white text-brand-green text-[10px] font-bold uppercase tracking-wide rounded-md border border-brand-green/20"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="text-[10px] text-slate-400 py-1 font-medium pl-1">
              +{skills.length - 3}
            </span>
          )}
        </div>
      )}

      {/* --- FOOTER --- */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> {timeAgo(created_at)}
        </span>
        
        <button className="text-xs font-bold text-white bg-brand-dark px-5 py-2.5 rounded-xl hover:bg-brand-green hover:text-brand-dark transition-all shadow-md shadow-brand-dark/10 active:scale-95">
          View Details
        </button>
      </div>

    </div>
  );
};

export default JobCards;