import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetAllJobsQuery } from "@/redux/services/jobsApi";
import { supabase } from "@/backend/config";
import Footer from "@/components/layout/Footer";
import {
  Building2, MapPin, Share2, ChevronLeft,
  AlertCircle, ArrowRight, X, FileWarning, CheckCircle, Loader2
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const calculateProfileProgress = (profile) => {
  if (!profile) return 0;
  
  let score = 0;
  if (profile.job_preference) score++;
  if (profile.phone && profile.phone.length > 8) score++;
  if (profile.address && profile.address.length > 5) score++;
  if (profile.resume_url) score++;
  if (profile.avatar_url) score++;

  let targetTotal = 5; 

  if (profile.job_preference === 'work_student') {
      targetTotal = 9; 
      if (profile.date_of_birth) score++;
      if (profile.enrollment_cert_url) score++;
      if (profile.health_insurance_url) score++;
      if (profile.valid_permit_url) score++;
  } else {
      targetTotal = 8;
      if (profile.tax_id) score++;
      if (profile.social_security_number) score++;
      if (profile.passport_url) score++;
  }

  return Math.min(Math.round((score / targetTotal) * 100), 100);
};

const checkCompatibility = (userPref, jobType) => {
  if (!userPref || !jobType) return false;
  const pref = userPref.toLowerCase().replace('_', ' ');
  const job = jobType.toLowerCase().replace('_', ' ');

  if (pref === job) return true;
  if (pref === 'permanent' && job.includes('full time')) return true;
  if (pref === 'part time' && job.includes('part time')) return true;
  if (pref === 'internship' && job.includes('intern')) return true;
  if (pref.includes('student') && (job.includes('student') || job.includes('werk'))) return true;

  return false;
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const JobDetailsHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: allJobs, isLoading } = useGetAllJobsQuery();
  const job = allJobs?.find((j) => j.id.toString() === id);

  // State
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [profileCompletion, setProfileCompletion] = useState(0);
  
  // Application State
  const [hasApplied, setHasApplied] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  // NEW: Loading state for the initial check to prevent "Jumping"
  const [checkingApplication, setCheckingApplication] = useState(true); 
  
  // Modal State
  const [blockerType, setBlockerType] = useState(null); 

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkUserStatus = async () => {
      // 1. Start checking
      setCheckingApplication(true); 

      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);

        if (session?.user && job) {
          // Parallel Fetch for Speed
          const [profileResponse, applicationResponse] = await Promise.all([
            supabase.from('profiles').select('*').eq('id', session.user.id).single(),
            supabase.from('applications').select('id').eq('job_id', job.id).eq('user_id', session.user.id).maybeSingle()
          ]);

          // Handle Profile
          if (profileResponse.data) {
            setUserProfile(profileResponse.data);
            setProfileCompletion(calculateProfileProgress(profileResponse.data));
          }

          // Handle Application
          if (applicationResponse.data) {
            setHasApplied(true);
          }
        }
      } catch (error) {
        console.error("Error checking status:", error);
      } finally {
        // 2. Stop checking (UI can now render the correct button)
        setCheckingApplication(false);
      }
    };
    
    if (job) checkUserStatus();
  }, [job]);

  // ─── APPLY HANDLER ───
  const handleApplyClick = async () => {
    if (!user) {
      toast.error("Please log in to apply.");
      navigate("/login");
      return;
    }

    const isCompatible = checkCompatibility(userProfile?.job_preference, job.job_type);
    if (!isCompatible) return setBlockerType('mismatch');
    if (profileCompletion < 100) return setBlockerType('incomplete');

    setIsApplying(true);
    
    try {
      const cleanPhone = userProfile.phone ? userProfile.phone.replace(/[^0-9]/g, '') : null;

      const applicationPayload = {
        job_id: job.id,
        user_id: user.id,
        status: 'pending',
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        email: userProfile.email || user.email,
        phone: cleanPhone, 
        address: userProfile.address,
        resume_url: userProfile.resume_url,
        date_of_birth: userProfile.date_of_birth || null,
        enrollment_cert_url: userProfile.enrollment_cert_url || null,
        portfolio_link: userProfile.portfolio_link || null,
        health_insurance_url: userProfile.health_insurance_url || null,
        valid_permit_url: userProfile.valid_permit_url || null,
        tax_id: userProfile.tax_id ? Number(userProfile.tax_id) : null,
        social_security_number: userProfile.social_security_number || null,
        passport_url: userProfile.passport_url || null,
      };

      const { error } = await supabase.from('applications').insert(applicationPayload);

      if (error) {
        if (error.code === '23505') { 
           toast.error("You have already applied for this job.");
           setHasApplied(true);
        } else {
           throw error;
        }
      } else {
        toast.success("Application Submitted Successfully!");
        setHasApplied(true);
      }
    } catch (err) {
      console.error("Application Error:", err);
      toast.error("Failed to submit application. Check your profile data.");
    } finally {
      setIsApplying(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  if (isLoading) return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      <Toaster position="bottom-right" />

      {/* --- HERO HEADER --- */}
      <div className="bg-brand-dark text-white pb-32 pt-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-bold">
            <ChevronLeft size={16} /> Back to Listings
          </button>

          <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
            <div className="flex gap-6 items-center">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg">
                {job.company_logo ? <img src={job.company_logo} className="w-full h-full object-contain" alt="logo" /> : <Building2 className="text-slate-400" />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{job.title}</h1>
                <div className="flex flex-wrap gap-4 text-slate-300 font-medium text-sm">
                  <span className="flex items-center gap-1.5"><Building2 size={16} className="text-brand-green" /> {job.company_name}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white text-xs uppercase tracking-wide">{job.job_type.replace("_", " ")}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 z-30">
              <button onClick={handleShare} className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all active:scale-95 group">
                <Share2 className="text-white group-hover:scale-110 transition-transform" size={20} />
              </button>
              
              {/* ─── SMART BUTTON LOGIC ─── */}
              {checkingApplication ? (
                // 1. LOADING STATE (Prevents Jump)
                <button disabled className="px-8 py-3 bg-white/5 text-white/40 font-bold rounded-xl flex items-center gap-2 cursor-wait">
                  <Loader2 className="animate-spin" size={18} /> Checking...
                </button>
              ) : hasApplied ? (
                // 2. APPLIED STATE
                <button disabled className="px-8 py-3 bg-white/10 border border-white/20 text-white/60 font-bold rounded-xl cursor-not-allowed flex items-center gap-2">
                  <CheckCircle size={18} className="text-brand-green" /> Applied
                </button>
              ) : (
                // 3. DEFAULT STATE
                <button 
                  onClick={handleApplyClick}
                  disabled={isApplying}
                  className="px-8 py-3 bg-brand-green text-brand-dark font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-brand-green/20 flex items-center gap-2"
                >
                  {isApplying ? <Loader2 className="animate-spin" size={18} /> : "Apply Now"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 -mt-20 relative pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Description</h3>
              <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-line">{job.job_description || job.description}</div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Required Skills</h3>
              <div className="flex flex-wrap gap-3">
                {job.skills?.map((skill, i) => <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-lg text-sm">{skill}</span>)}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Snapshot</h4>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-50"><span className="text-slate-500 text-sm">Salary</span><span className="font-bold text-brand-dark">€{job.salary_min / 1000}k - €{job.salary_max / 1000}k</span></div>
                <div className="flex justify-between py-3 border-b border-slate-50"><span className="text-slate-500 text-sm">Experience</span><span className="font-bold text-brand-dark capitalize">{job.experience_level}</span></div>
                <div className="flex justify-between py-3"><span className="text-slate-500 text-sm">Industry</span><span className="font-bold text-brand-dark">{job.industry || "Tech"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* ─── DYNAMIC BLOCKER MODAL ─── */}
      {blockerType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setBlockerType(null)} className="absolute top-4 right-4 p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"><X size={20} /></button>
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${blockerType === 'incomplete' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                {blockerType === 'incomplete' ? <AlertCircle size={32} /> : <FileWarning size={32} />}
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">{blockerType === 'incomplete' ? "Profile Incomplete" : "Criteria Mismatch"}</h2>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed px-2">
                {blockerType === 'incomplete' 
                  ? "To maintain quality standards for employers, please complete your profile details and documents (100%) before applying."
                  : `This position is for "${job.job_type.replace('_', ' ')}", but your profile is set to "${userProfile?.job_preference?.replace('_', ' ')}". You must match the criteria.`
                }
              </p>
              {blockerType === 'incomplete' && (
                <div className="w-full mb-8">
                    <div className="w-full bg-slate-100 rounded-full h-3 mb-2"><div className="bg-red-500 h-3 rounded-full transition-all duration-500" style={{ width: `${profileCompletion}%` }} /></div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Current Progress: {profileCompletion}%</p>
                </div>
              )}
              <div className="flex flex-col gap-3 w-full">
                <Link to="/profile" className="w-full py-3.5 bg-brand-green hover:bg-[#5ab342] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-green/20">
                  {blockerType === 'incomplete' ? "Complete Profile" : "Update Preference"} <ArrowRight size={18} />
                </Link>
                <button onClick={() => setBlockerType(null)} className="w-full py-3.5 text-slate-500 font-bold hover:text-slate-800 transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default JobDetailsHero;