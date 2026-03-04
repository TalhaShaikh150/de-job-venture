import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/backend/config";
import { 
  Briefcase, User, FileText, CheckCircle2, ChevronRight, 
  ShieldCheck, GraduationCap, Clock, BookOpen, AlertCircle, 
  Loader2, Camera, UploadCloud, MapPin, Phone, 
  Save, Mail, Calendar as CalendarIcon, Link as LinkIcon, CheckCircle, XCircle
} from "lucide-react";
import Footer from "@/components/layout/Footer";

// ─── 1. CONFIG & VALIDATION ──────────────────────────────────────────────────
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

// Helper: Check if 16+
const isAdult = (dateString) => {
  if (!dateString) return false;
  const ageDifMs = Date.now() - new Date(dateString).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970) >= 16;
};

// Base Schema
const profileSchema = z.object({
  phone: z.string().min(8, "Phone number is required"),
  address: z.string().min(5, "Full address is required"),
  job_preference: z.string().min(1, "Selection required"),
  resume_url: z.string().min(1, "Resume is required"),
  bio: z.string().optional(),
  avatar_url: z.string().optional(),
  portfolio_link: z.string().optional().or(z.literal("")), // Allows empty string

  // Conditional Fields
  date_of_birth: z.string().optional(),
  enrollment_cert_url: z.string().optional(),
  health_insurance_url: z.string().optional(),
  valid_permit_url: z.string().optional(),
  tax_id: z.string().optional(),
  social_security_number: z.string().optional(),
  passport_url: z.string().optional(),
}).superRefine((data, ctx) => {
  const isWorkStudent = data.job_preference === "work_student";
  if (isWorkStudent) {
    if (!data.date_of_birth || !isAdult(data.date_of_birth)) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Valid Date of Birth (16+) is required", path: ["date_of_birth"] });
    if (!data.enrollment_cert_url) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enrollment Certificate is required", path: ["enrollment_cert_url"] });
    if (!data.health_insurance_url) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Health Insurance proof is required", path: ["health_insurance_url"] });
  } else {
    if (!data.tax_id || data.tax_id.length < 5) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Tax ID is required", path: ["tax_id"] });
    if (!data.social_security_number || data.social_security_number.length < 5) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Social Security Number is required", path: ["social_security_number"] });
    if (!data.passport_url) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Visa/Passport picture is required", path: ["passport_url"] });
  }
});

// ─── 2. SUB-COMPONENTS ───────────────────────────────────────────────────────

const Toast = ({ message, type, onClose }) => {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-5 duration-300 border ${type === 'success' ? 'bg-white border-green-200 text-green-700' : 'bg-white border-red-200 text-red-600'}`}>
      <div className={`p-1.5 rounded-full ${type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
        {type === 'success' ? <CheckCircle size={18} /> : <XCircle size={18} />}
      </div>
      <div>
        <p className="font-bold text-sm text-gray-900">{type === 'success' ? 'Success' : 'Error'}</p>
        <p className="text-xs text-gray-500">{message}</p>
      </div>
    </div>
  );
};

const FileBox = ({ label, currentUrl, required, onFileSelect, accept = ".pdf" }) => {
  const [fileName, setFileName] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) { setFileName(file.name); onFileSelect(file); }
  };
  const hasFile = !!fileName || !!currentUrl;
  
  return (
    <div className={`relative flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group ${hasFile ? 'bg-green-50/50 border-green-200' : 'bg-white border-slate-200 hover:border-brand-green/50 hover:shadow-sm'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${hasFile ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-green/10 group-hover:text-brand-green'}`}>
          {hasFile ? <CheckCircle2 size={20} /> : <UploadCloud size={20} />}
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-slate-900 truncate">{label} {required && <span className="text-red-500">*</span>}</p>
          <p className="text-xs text-slate-500 truncate max-w-[150px]">{fileName || (currentUrl ? "Document Uploaded" : "PDF or JPG (Max 2MB)")}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {currentUrl && !fileName && (
            <a href={currentUrl} target="_blank" className="p-2 text-slate-400 hover:text-brand-green transition-colors"><FileText size={18}/></a>
        )}
        <label className={`cursor-pointer text-xs font-bold px-3 py-2 rounded-lg border transition-all ${hasFile ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50' : 'bg-brand-dark text-white border-transparent hover:bg-brand-green'}`}>
            {hasFile ? "Change" : "Upload"}
            <input type="file" accept={accept} className="hidden" onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-6 pb-4 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Icon className="text-brand-green" size={20} /> {title}
        </h3>
        {subtitle && <p className="text-xs text-slate-400 ml-7 mt-0.5">{subtitle}</p>}
    </div>
);

// ─── 3. LOGIC HOOK ───────────────────────────────────────────────────────────
const useProfileLogic = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [displayInfo, setDisplayInfo] = useState({ name: "", email: "" }); 
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null); // Added Toast State
  const [pendingFiles, setPendingFiles] = useState({});

  const { register, handleSubmit, setValue, control, trigger, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(profileSchema), 
    mode: "all",
    reValidateMode: "onChange"
  });

  const watched = useWatch({ control });

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return navigate("/login");
      setUser(session.user);
      
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      if (data) {
        Object.keys(data).forEach(key => data[key] && setValue(key, data[key]));
        setDisplayInfo({ 
            name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            email: session.user.email 
        });
        trigger(); 
      }
      setLoading(false);
    };
    init();
  }, [navigate, setValue, trigger]);

  const processUpload = async (file, bucket, folderName) => {
    if (!file) return null;
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${folderName}_${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, file, { upsert: true });
    if (error) throw error;
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const onSubmit = async (formData) => {
    setSaving(true);
    try {
      let finalData = { ...formData };
      
      // Handle Optional Portfolio: Ensure it's null if empty
      if (!finalData.portfolio_link) finalData.portfolio_link = null;

      const uploadMap = [
        { key: 'avatar', bucket: 'avatars', db: 'avatar_url' },
        { key: 'resume', bucket: 'user-documents', db: 'resume_url' },
        { key: 'cert', bucket: 'user-documents', db: 'enrollment_cert_url' },
        { key: 'health', bucket: 'user-documents', db: 'health_insurance_url' },
        { key: 'permit', bucket: 'user-documents', db: 'valid_permit_url' },
        { key: 'passport', bucket: 'user-documents', db: 'passport_url' },
      ];

      for (const item of uploadMap) {
        if (pendingFiles[item.key]) {
          const url = await processUpload(pendingFiles[item.key], item.bucket, item.key);
          finalData[item.db] = url;
        }
      }

      await supabase.from('profiles').update({ ...finalData, is_onboarded: true }).eq('id', user.id);
      
      // SHOW SUCCESS TOAST
      setToast({ type: "success", message: "Your profile has been saved successfully." });
      
      // Wait 1.5s then reload to reflect changes
      setTimeout(() => window.location.reload(), 1500);

    } catch (err) {
      console.error(err);
      setToast({ type: "error", message: "Failed to save profile. Please try again." });
    } finally {
      setSaving(false);
    }
  };

  const progress = useMemo(() => {
    let score = 0;
    
    // Core Fields (5 Points)
    if (watched.job_preference) score++;
    if (watched.phone) score++;
    if (watched.address) score++;
    if (watched.resume_url || pendingFiles.resume) score++;
    if (watched.avatar_url || pendingFiles.avatar) score++;

    let total = 5;

    // Work Student Extra (4 Points)
    if (watched.job_preference === 'work_student') {
        total = 9;
        if (watched.date_of_birth) score++;
        if (watched.enrollment_cert_url || pendingFiles.cert) score++;
        if (watched.health_insurance_url || pendingFiles.health) score++;
        if (watched.valid_permit_url || pendingFiles.permit) score++;
    } 
    // Other Jobs Extra (3 Points)
    else {
        total = 8;
        if (watched.tax_id) score++;
        if (watched.social_security_number) score++;
        if (watched.passport_url || pendingFiles.passport) score++;
    }
    
    return Math.min(Math.round((score / total) * 100), 100);
  }, [watched, pendingFiles]);

  return { displayInfo, loading, saving, register, handleSubmit, setValue, errors, isValid, watched, setPendingFiles, onSubmit, progress, toast, setToast };
};

// ─── 4. MAIN COMPONENT ───────────────────────────────────────────────────────

export default function ProfilePage() {
  const { 
    displayInfo, loading, saving, register, handleSubmit, setValue, 
    errors, isValid, watched, setPendingFiles, onSubmit, progress, toast, setToast 
  } = useProfileLogic();
  
  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-brand-green" /></div>;
  const isWorkStudent = watched.job_preference === 'work_student';

  return (
    <>
    <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-10 font-sans">
      
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Date Picker CSS */}
      <style>{`
        input[type="date"] { position: relative; padding-right: 2rem; }
        input[type="date"]::-webkit-calendar-picker-indicator {
            position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%);
            width: 1.25rem; height: 1.25rem; cursor: pointer; opacity: 0; z-index: 10;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ─── LEFT SIDEBAR (Sticky) ─── */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center sticky top-28">
              
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full border-[6px] border-slate-50 overflow-hidden mx-auto bg-slate-100 shadow-inner group">
                  {watched.avatar_url 
                    ? <img src={watched.avatar_url} className="w-full h-full object-cover transition-transform group-hover:scale-105" /> 
                    : <User className="w-16 h-16 text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                  <div className="absolute inset-0 bg-black/30 hidden group-hover:flex items-center justify-center transition-all backdrop-blur-[2px]">
                      <Camera className="text-white opacity-90" />
                  </div>
                </div>
                <label className="absolute bottom-1 right-1 p-2.5 bg-brand-green text-white rounded-full cursor-pointer hover:bg-[#5ab342] shadow-lg transition-transform hover:scale-110 border-4 border-white">
                  <Camera size={16} />
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { if(e.target.files[0]) { setPendingFiles(p=>({...p, avatar: e.target.files[0]})); setValue("avatar_url", URL.createObjectURL(e.target.files[0])); } }} />
                </label>
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mb-1">{displayInfo.name || "My Profile"}</h2>
              <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 mb-8 bg-slate-100 py-1.5 px-4 rounded-full w-fit mx-auto border border-slate-200">
                  <Mail size={12} /> {displayInfo.email}
              </div>

              <div className="text-left mb-2 flex justify-between items-end">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Profile Strength</span>
                  <span className={`text-sm font-black ${progress===100 ? 'text-brand-green' : 'text-slate-900'}`}>{progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-8 overflow-hidden">
                <div className={`h-2 rounded-full transition-all duration-1000 ease-out ${progress === 100 ? "bg-brand-green" : "bg-gradient-to-r from-slate-700 to-slate-900"}`} style={{ width: `${progress}%` }}></div>
              </div>

              <button disabled={!isValid || saving} className={`w-full py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]
                ${!isValid || saving 
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" 
                    : "bg-brand-dark text-white shadow-slate-200 hover:shadow-2xl hover:bg-slate-800"}`}>
                {saving ? <Loader2 className="animate-spin" /> : <><Save size={18} /> Save Profile</>}
              </button>
            </div>
          </div>

          {/* ─── RIGHT CONTENT (Forms) ─── */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <SectionTitle icon={MapPin} title="Contact Information" subtitle="How can recruiters reach you?" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Phone Number</label>
                  <div className="relative group">
                      <Phone className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-brand-green transition-colors" size={18} />
                      <input {...register("phone")} className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all placeholder:font-normal" placeholder="+49..." />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Current City</label>
                  <div className="relative group">
                      <MapPin className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-brand-green transition-colors" size={18} />
                      <input {...register("address")} className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all placeholder:font-normal" placeholder="Berlin, Germany" />
                  </div>
                  {errors.address && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.address.message}</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <SectionTitle icon={Briefcase} title="Employment Status" subtitle="Select the type of contract you are looking for." />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "work_student", label: "Work Student", icon: BookOpen },
                    { id: "internship", label: "Internship", icon: GraduationCap },
                    { id: "permanent", label: "Full-time", icon: Briefcase },
                    { id: "part_time", label: "Part-time", icon: Clock },
                  ].map((type) => {
                    const isSelected = watched.job_preference === type.id;
                    return (
                        <button 
                            key={type.id} 
                            type="button" 
                            onClick={() => setValue("job_preference", type.id)} 
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left group
                            ${isSelected 
                                ? 'border-brand-green bg-green-50/50 shadow-inner' 
                                : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}
                        >
                            <div className={`p-2.5 rounded-lg transition-colors ${isSelected ? 'bg-brand-green text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200 group-hover:border-slate-300'}`}>
                                <type.icon size={20} />
                            </div>
                            <span className={`font-bold text-sm ${isSelected ? 'text-brand-dark' : 'text-slate-600'}`}>
                                {type.label}
                            </span>
                            {isSelected && <CheckCircle2 className="ml-auto text-brand-green" size={18} />}
                        </button>
                    )
                  })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <SectionTitle icon={FileText} title="Documents & Compliance" subtitle="Securely upload your verification documents." />
              
              <div className="space-y-6">
                 <div>
                    <FileBox label="Resume / CV" currentUrl={watched.resume_url} required onFileSelect={(f) => { setPendingFiles(p => ({...p, resume: f})); setValue("resume_url", "pending"); }} />
                    {errors.resume_url && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.resume_url.message}</p>}
                 </div>

                 {isWorkStudent ? (
                    <div className="animate-fade-in space-y-5 pt-6 border-t border-slate-100">
                       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 items-center text-blue-800">
                           <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm"><AlertCircle size={18} /></div>
                           <span className="text-sm font-bold">Student Verification Required</span>
                       </div>
                       
                       <div className="w-full md:w-1/2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Date of Birth</label>
                           <div className="relative group">
                               <CalendarIcon className="absolute left-4 top-3.5 text-slate-400 z-0" size={18} />
                               <input 
                                 type="date" 
                                 {...register("date_of_birth")} 
                                 className="date-input w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all z-10 relative bg-transparent" 
                               />
                           </div>
                           {errors.date_of_birth && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.date_of_birth.message}</p>}
                       </div>

                       <div className="grid md:grid-cols-2 gap-4">
                           <div>
                                <FileBox label="Enrollment Certificate" currentUrl={watched.enrollment_cert_url} required onFileSelect={(f) => { setPendingFiles(p => ({...p, cert: f})); setValue("enrollment_cert_url", "pending"); }} />
                                {errors.enrollment_cert_url && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.enrollment_cert_url.message}</p>}
                           </div>
                           <div>
                                <FileBox label="Health Insurance Proof" currentUrl={watched.health_insurance_url} required onFileSelect={(f) => { setPendingFiles(p => ({...p, health: f})); setValue("health_insurance_url", "pending"); }} />
                                {errors.health_insurance_url && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.health_insurance_url.message}</p>}
                           </div>
                       </div>
                       <div>
                            <FileBox label="Valid Residence Permit" currentUrl={watched.valid_permit_url} required onFileSelect={(f) => { setPendingFiles(p => ({...p, permit: f})); setValue("valid_permit_url", "pending"); }} />
                            {errors.valid_permit_url && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.valid_permit_url.message}</p>}
                       </div>
                    </div>
                 ) : (
                    <div className="animate-fade-in space-y-5 pt-6 border-t border-slate-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Tax ID</label>
                                <input {...register("tax_id")} placeholder="11-digit ID" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                                {errors.tax_id && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.tax_id.message}</p>}
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Social Security</label>
                                <input {...register("social_security_number")} placeholder="SV-Nummer" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" />
                                {errors.social_security_number && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.social_security_number.message}</p>}
                            </div>
                        </div>
                        <div>
                            <FileBox label="Passport / ID Copy" currentUrl={watched.passport_url} required onFileSelect={(f) => { setPendingFiles(p => ({...p, passport: f})); setValue("passport_url", "pending"); }} />
                            {errors.passport_url && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.passport_url.message}</p>}
                        </div>
                    </div>
                 )}

                 <div className="pt-6 mt-6 border-t border-slate-100">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Portfolio URL (Optional)</label>
                    <div className="relative group">
                        <LinkIcon className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-brand-green transition-colors" size={18} />
                        <input {...register("portfolio_link")} placeholder="https://..." className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all placeholder:font-normal" />
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}