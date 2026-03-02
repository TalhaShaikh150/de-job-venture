import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { supabase } from "../backend/config";
import { 
  Briefcase, 
  User, 
  FileText, 
  CheckCircle2, 
  UploadCloud,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Clock,
  BookOpen,
  AlertCircle
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────
const JOB_TYPES = [
  { id: "internship", label: "Internship", Icon: GraduationCap, desc: "Short-term learning contract" },
  { id: "permanent", label: "Full-time", Icon: Briefcase, desc: "Permanent employment" },
  { id: "part_time", label: "Part-time", Icon: Clock, desc: "Flexible working hours" },
  { id: "work_student", label: "Work Student", Icon: BookOpen, desc: "University student contract" },
];

// ─── Clean UI Components ─────────────────────────────────────────────────────

const Card = ({ children, title, subtitle, icon: Icon, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-xl shadow-sm p-8 ${className}`}>
    {title && (
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-1">
          {Icon && <div className="p-2 bg-gray-50 rounded-lg text-gray-500"><Icon size={20} /></div>}
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        {subtitle && <p className="text-sm text-gray-500 ml-[52px]">{subtitle}</p>}
      </div>
    )}
    {children}
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder, type = "text", disabled, colSpan }) => (
  <div className={`flex flex-col gap-2 ${colSpan ? "md:col-span-2" : ""}`}>
    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm transition-all
        placeholder:text-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green
        ${disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200" : "hover:border-gray-400"}
      `}
    />
  </div>
);

const DocUpload = ({ label, value, required }) => {
  const hasFile = value && value.trim() !== "";
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded-lg">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border
          ${hasFile ? "bg-green-50 border-green-200 text-green-600" : "bg-white border-gray-200 text-gray-400"}`}>
          {hasFile ? <CheckCircle2 size={18} /> : <FileText size={18} />}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {label} {required && <span className="text-red-500">*</span>}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {hasFile ? "Uploaded successfully" : "PDF / JPG (Max 5MB)"}
          </p>
        </div>
      </div>
      <label className={`
        cursor-pointer text-xs font-semibold px-4 py-2 rounded-lg border transition-all
        ${hasFile 
          ? "border-gray-200 text-gray-600 bg-white hover:border-gray-300 hover:text-gray-900" 
          : "border-brand-green text-brand-green bg-brand-green/5 hover:bg-brand-green hover:text-white"}
      `}>
        {hasFile ? "Replace" : "Upload File"}
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

// ─── Sidebar / Timeline ──────────────────────────────────────────────────────
const Timeline = ({ completion }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sticky top-24">
    <h3 className="text-lg font-bold text-gray-900 mb-6">Application Status</h3>
    
    <div className="space-y-8 relative pl-2">
      <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gray-100" />

      <div className="relative flex items-start gap-4">
        <div className={`z-10 w-4 h-4 rounded-full border-2 mt-1 shrink-0 bg-white transition-colors
          ${completion >= 50 ? "border-brand-green bg-brand-green" : "border-gray-300"}`} />
        <div>
          <p className="text-sm font-bold text-gray-900">Profile Setup</p>
          <p className="text-xs text-gray-500 mt-1">Complete your personal details.</p>
        </div>
      </div>

      <div className="relative flex items-start gap-4">
        <div className={`z-10 w-4 h-4 rounded-full border-2 mt-1 shrink-0 bg-white transition-colors
          ${completion >= 80 ? "border-brand-green bg-brand-green" : "border-gray-300"}`} />
        <div>
          <p className="text-sm font-bold text-gray-900">Document Review</p>
          <p className="text-xs text-gray-500 mt-1">Our team verifies your uploads.</p>
        </div>
      </div>

      <div className="relative flex items-start gap-4">
        <div className={`z-10 w-4 h-4 rounded-full border-2 mt-1 shrink-0 bg-white transition-colors
          ${completion === 100 ? "border-brand-green bg-brand-green" : "border-gray-300"}`} />
        <div>
          <p className="text-sm font-bold text-gray-900">Final Decision</p>
          <p className="text-xs text-gray-500 mt-1">Contract offer sent.</p>
        </div>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-100">
       <div className="flex justify-between text-xs font-semibold text-gray-900 mb-2">
         <span>Completion</span>
         <span>{completion}%</span>
       </div>
       <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
         <div className="h-full bg-brand-green transition-all duration-500" style={{ width: `${completion}%` }} />
       </div>
    </div>
  </div>
);

// ─── Welcome Modal ───────────────────────────────────────────────────────────
const WelcomeModal = ({ onConfirm }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden p-8 animate-fade-in">
        <div className="text-center mb-8">
            <div className="w-12 h-12 bg-green-50 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome to DJV</h2>
            <p className="text-gray-500 text-sm mt-2">Please select your primary objective to configure your dashboard.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {JOB_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`flex items-center justify-between px-5 py-4 rounded-lg border text-left transition-all
                ${selected === type.id 
                  ? "bg-green-50 border-brand-green text-gray-900 ring-1 ring-brand-green" 
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                  <type.Icon size={18} className={selected === type.id ? "text-brand-green" : "text-gray-400"} />
                  <span className="font-semibold text-sm">{type.label}</span>
              </div>
              {selected === type.id && <CheckCircle2 size={18} className="text-brand-green" />}
            </button>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={() => onConfirm(selected)}
          className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all
            ${selected 
              ? "bg-brand-green text-white hover:bg-[#5ab342] shadow-md" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
        >
          Initialize Profile
        </button>
      </div>
    </div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const navigate = useNavigate(); // Hook for redirection
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [jobType, setJobType] = useState(null);

  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", phone: "", address: "", 
    date_of_birth: "", resume_url: "", enrollment_cert_url: "", 
    health_insurance_url: "", valid_permit_url: "", passport_url: "", 
    portfolio_link: "", tax_id: "", social_security_number: ""
  });

  useEffect(() => {
    // Check Auth Status
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const u = session?.user ?? null;

      // REDIRECT IF NOT LOGGED IN
      if (!u) {
        navigate("/login"); 
        return;
      }

      // If logged in, set state
      setUser(u);
      setForm((prev) => ({ ...prev, email: u.email || "" }));
      
      const savedType = localStorage.getItem(`job_type_${u.id}`);
      if (savedType) setJobType(savedType);
      else setShowPopup(true);
      
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Logic: 20% Job Type, 40% Basics, 40% Resume
  const calculateCompletion = () => {
    let score = 0;
    if (jobType) score += 20;
    if (form.first_name && form.last_name && form.phone && form.address) score += 40;
    if (form.resume_url) score += 40;
    return Math.min(score, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isWorkStudent = jobType === "work_student";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-green-100 selection:text-green-900 pb-20">
      
      {showPopup && <WelcomeModal onConfirm={(t) => {
          setJobType(t);
          setShowPopup(false);
          if (user) localStorage.setItem(`job_type_${user.id}`, t);
      }} />}

      {/* Navbar placed at the top */}
      <div className="max-w-6xl mx-auto px-6 py-10 mt-6">
        
        {/* Header */}
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-500 mt-1">Manage your information and application documents.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Left Column: Forms ── */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* 1. Identity */}
                <Card title="Personal Information" subtitle="Used for contract generation and identification." icon={User}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} placeholder="John" />
                        <InputField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Doe" />
                        <InputField label="Email Address" name="email" value={form.email} disabled />
                        <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="+49 ..." />
                        <InputField label="Date of Birth" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} type="date" />
                        <InputField label="Home Address" name="address" value={form.address} onChange={handleChange} placeholder="Street, City, Zip" colSpan />
                    </div>
                </Card>

                {/* 2. Job Preference */}
                <Card title="Contract Preferences" subtitle="Your preferred working arrangement." icon={Briefcase}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {JOB_TYPES.map((type) => {
                            const isSelected = jobType === type.id;
                            return (
                                <button
                                    key={type.id}
                                    onClick={() => {
                                        setJobType(type.id);
                                        localStorage.setItem(`job_type_${user?.id}`, type.id);
                                    }}
                                    className={`relative p-4 rounded-lg border text-left transition-all duration-200
                                        ${isSelected 
                                            ? "bg-white border-brand-green ring-1 ring-brand-green shadow-sm" 
                                            : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                                            <type.Icon size={16} className={isSelected ? "text-brand-green" : "text-gray-400"} />
                                            {type.label}
                                        </div>
                                        {isSelected && <CheckCircle2 size={16} className="text-brand-green" />}
                                    </div>
                                    <p className="text-xs text-gray-500 pl-6">{type.desc}</p>
                                </button>
                            );
                        })}
                    </div>
                </Card>

                {/* 3. Documents */}
                <Card title="Documents" subtitle="Please provide PDF or high-quality images." icon={FileText}>
                    <div className="space-y-2">
                        <DocUpload label="Curriculum Vitae (CV)" value={form.resume_url} required />
                        
                        {isWorkStudent && (
                            <div className="mt-6 pt-6 border-t border-gray-100 bg-blue-50/50 rounded-lg p-4">
                                <div className="flex items-start gap-3 mb-4">
                                    <AlertCircle className="text-blue-600 mt-0.5" size={18} />
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900">Student Verification</h4>
                                        <p className="text-xs text-blue-700 mt-1">Required for Work Student contracts.</p>
                                    </div>
                                </div>
                                <div className="space-y-1 bg-white rounded-lg border border-blue-100 px-2">
                                    <DocUpload label="Enrollment Certificate" value={form.enrollment_cert_url} />
                                    <DocUpload label="Health Insurance Proof" value={form.health_insurance_url} />
                                </div>
                            </div>
                        )}

                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Portfolio URL" name="portfolio_link" value={form.portfolio_link} onChange={handleChange} placeholder="https://..." />
                            <InputField label="Social Security (Optional)" name="social_security_number" value={form.social_security_number} onChange={handleChange} placeholder="SV-Number" />
                        </div>
                    </div>
                </Card>

            </div>

            {/* ── Right Column: Sidebar ── */}
            <div className="lg:col-span-1">
                <Timeline completion={calculateCompletion()} />
                
                <div className="mt-6">
                    <button className="w-full bg-brand-green hover:bg-[#5ab342] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2">
                        Save Profile <ChevronRight size={18} />
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        <ShieldCheck size={12} className="inline mr-1" />
                        Securely encrypted & GDPR compliant
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}