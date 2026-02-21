import React from "react";
import {
  MapPin,
  Clock,
  Bookmark,
  Building2,
  Globe,
  Banknote,
  Briefcase, // <--- Added Briefcase icon for Industry
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // 1. Import hook

// ==========================================
// 1. HELPER FUNCTIONS
// ==========================================

const formatCurrency = (amount) => {
  if (!amount) return "";
  if (amount >= 10000) {
    return `€${Math.round(amount / 1000)}k`;
  }
  return `€${amount}`;
};

const formatSalary = (min, max, jobType = "") => {
  if (!min && !max) return null;
  const isHourly =
    (min && min < 200) || (max && max < 200) || jobType.includes("contract");
  const suffix = isHourly ? "/hr" : "";

  if (min && max) {
    return `${formatCurrency(min)} - ${formatCurrency(max)}${suffix}`;
  }
  if (min) {
    return `From ${formatCurrency(min)}${suffix}`;
  }
  return `Up to ${formatCurrency(max)}${suffix}`;
};

const formatText = (text) => {
  if (!text) return "";
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

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
// 2. SUB-COMPONENTS
// ==========================================

const FeaturedBadge = () => (
  <div className="absolute -top-px -right-px bg-brand-green text-brand-dark text-[10px] font-extrabold px-3 py-1 rounded-bl-xl rounded-tr-xl z-10 shadow-sm uppercase tracking-wider">
    Featured
  </div>
);

const CompanyLogo = ({ url, name }) => (
  <div className="w-16 h-14 rounded-xl flex items-center justify-center  border border-slate-100 bg-white shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
    {url ? (
      <img
        src={url}
        alt={name}
        className="w-full h-full object-contain rounded-lg"
      />
    ) : (
      <Building2 className="w-6 h-6 text-slate-300" />
    )}
  </div>
);

const Tag = ({ icon: Icon, text, className }) => (
  <span
    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${className}`}
  >
    {Icon && <Icon className="w-3.5 h-3.5 opacity-70" />}
    {text}
  </span>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

const JobCards = ({ job }) => {
  const navigate = useNavigate(); // 2. Initialize hook

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
    // 1. Destructure new fields
    industry,
    job_description,
  } = job;

  const salaryDisplay = formatSalary(salary_min, salary_max, job_type);
  // 3. Create navigation handler
  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevents parent click events if card is interactive
    navigate(`/jobs/${job.id}`); // Navigate to the specific URL
  };
  return (
    <div
      onClick={handleViewDetails}
      className={`relative bg-white p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col h-full ${
        is_featured
          ? "border-brand-green/40 shadow-lg shadow-brand-green/5 ring-1 ring-brand-green/10"
          : "border-slate-200 hover:border-brand-green/30 hover:shadow-xl"
      }`}
    >
      {is_featured && <FeaturedBadge />}

      {/* --- HEADER --- */}
      <div className="flex justify-between items-start mb-4">
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
                {is_remote ? (
                  <Globe className="w-3.5 h-3.5" />
                ) : (
                  <MapPin className="w-3.5 h-3.5" />
                )}
                <span className="truncate max-w-[150px]">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="text-slate-400 hover:text-brand-green hover:bg-brand-green/5 p-2 rounded-full transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      {/* --- TAGS (Industry, Type, Salary) --- */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* 2. New Industry Tag */}
        {industry && (
          <Tag
            icon={Briefcase}
            text={industry}
            className="bg-blue-50 text-blue-600 border-blue-100"
          />
        )}

        <Tag
          text={formatText(job_type)}
          className="bg-slate-50 text-slate-600 border-slate-100"
        />

        {/* Only show experience if we have space, or prioritize it? kept for now */}
        <Tag
          text={formatText(experience_level)}
          className="bg-slate-50 text-slate-600 border-slate-100"
        />

        {salaryDisplay && (
          <Tag
            icon={Banknote}
            text={salaryDisplay}
            className="bg-emerald-50 text-emerald-700 border-emerald-100"
          />
        )}
      </div>

      {/* --- 3. JOB DESCRIPTION SNIPPET --- */}
      {/* line-clamp-2 ensures it takes up exactly 2 lines and adds '...' */}
      {job_description && (
        <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">
          {job_description}
        </p>
      )}

      {/* --- SKILLS --- */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-white text-slate-600 text-[10px] font-bold uppercase tracking-wide rounded-md border border-slate-200"
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
