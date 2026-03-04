import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/backend/config";
import { 
  Briefcase, User, FileText, CheckCircle2, ChevronRight, 
  ShieldCheck, GraduationCap, Clock, BookOpen, AlertCircle, 
  Loader2, Camera, Lock, XCircle, CheckCircle, CreditCard, Flag
} from "lucide-react";

// ─── 1. CONFIG & VALIDATION ──────────────────────────────────────────────────
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

// Age Validation Helper
const isAdult = (dateString) => {
  if (!dateString) return false;
  const birthday = new Date(dateString);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970) >= 16;
};

// Base Schema (Fields required for EVERYONE)
const profileSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().min(8, "Phone number is required"),
  address: z.string().min(5, "Full address is required"),
  job_preference: z.string().min(1, "Selection required"),
  resume_url: z.string().min(1, "Resume is required"),
  avatar_url: z.string().optional(),
  portfolio_link: z.string().optional(),

  // Optional initially, enforced via superRefine based on job type
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
    // ─── VALIDATION FOR WORK STUDENTS ───
    if (!data.date_of_birth || !isAdult(data.date_of_birth)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Valid Date of Birth (16+) is required", path: ["date_of_birth"] });
    }
    if (!data.enrollment_cert_url) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enrollment Certificate is required", path: ["enrollment_cert_url"] });
    }
    if (!data.health_insurance_url) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Health Insurance proof is required", path: ["health_insurance_url"] });
    }
    if (!data.valid_permit_url) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Residence Permit is required", path: ["valid_permit_url"] });
    }

  } else {
    // ─── VALIDATION FOR PERMANENT / INTERN / PART-TIME ───
    if (!data.tax_id || data.tax_id.length < 5) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Tax ID is required", path: ["tax_id"] });
    }
    if (!data.social_security_number || data.social_security_number.length < 5) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Social Security Number is required", path: ["social_security_number"] });
    }
    if (!data.passport_url) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Visa/Passport picture is required", path: ["passport_url"] });
    }
  }
});

// ─── 2. UI COMPONENTS ────────────────────────────────────────────────────────

const AvatarSelector = ({ currentUrl, onFileSelect }) => {
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) return alert("Image too large (Max 2MB)");
    if (!file.type.startsWith("image/")) return alert("Invalid image format");
    setPreview(URL.createObjectURL(file));
    onFileSelect(file);
  };
  const displaySrc = preview || currentUrl;
  return (
    <div className="relative group w-20 h-20 shrink-0">
      <div className="w-20 h-20 rounded-full border-2 border-gray-200 overflow-hidden bg-white flex items-center justify-center shadow-inner relative">
        {displaySrc ? <img src={displaySrc} alt="Avatar" className="w-full h-full object-cover" /> : <User className="text-gray-300 w-10 h-10" />}
      </div>
      <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 backdrop-blur-sm z-20">
        <Camera className="w-6 h-6 text-white" />
        <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
};

const FileSelector = ({ label, currentUrl, required, onFileSelect, accept = ".pdf" }) => {
  const [fileName, setFileName] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) return alert("File too large (Max 2MB)");
    setFileName(file.name);
    onFileSelect(file);
  };
  const hasFile = !!fileName || !!currentUrl;
  return (
    <div className={`flex items-center justify-between py-4 border-b border-gray-100 last:border-0 -mx-2 px-3 rounded-lg transition-colors ${!hasFile && required ? 'bg-red-50/50' : 'hover:bg-gray-50'}`}>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-all ${hasFile ? "bg-green-50 border-green-200 text-green-600" : "bg-white border-gray-200 text-gray-400"}`}>
          {hasFile ? <CheckCircle2 size={18} /> : <FileText size={18} />}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{label} {required && <span className="text-red-500">*</span>}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            {fileName ? <span className="text-brand-green font-bold">Pending: {fileName}</span> : currentUrl ? <a href={currentUrl} target="_blank" className="text-blue-600 hover:underline">View File</a> : "Max 2MB"}
          </p>
        </div>
      </div>
      <label className={`cursor-pointer text-xs font-bold px-4 py-2 rounded-lg border transition-all flex items-center gap-2 ${hasFile ? "border-gray-200 text-gray-600 bg-white hover:border-gray-300" : "border-brand-green text-brand-green bg-brand-green/5 hover:bg-brand-green hover:text-white"}`}>
        {hasFile ? "Replace" : "Select"}
        <input type="file" accept={accept} className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
};

const Toast = ({ message, type, onClose }) => {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-fade-in-up ${type === 'success' ? 'bg-gray-900 text-white' : 'bg-red-50 text-red-600 border border-red-200'}`}>
      {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
      <span className="font-semibold text-sm">{message}</span>
    </div>
  );
};

const ErrorMsg = ({ message }) => message ? <div className="flex items-center gap-1.5 mt-1.5 text-red-500 text-xs font-semibold animate-pulse"><AlertCircle size={12} />{message}</div> : null;

const Card = ({ children, title, subtitle, icon: Icon }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 relative overflow-hidden transition-all hover:shadow-md">
    {title && <div className="mb-6 pb-6 border-b border-gray-100"><div className="flex items-center gap-3 mb-1">{Icon && <div className="p-2 bg-gray-50 rounded-lg text-gray-500"><Icon size={20} /></div>}<h3 className="text-lg font-bold text-gray-900">{title}</h3></div>{subtitle && <p className="text-sm text-gray-500 ml-[52px]">{subtitle}</p>}</div>}
    {children}
  </div>
);

// ─── 3. MAIN PAGE LOGIC ──────────────────────────────────────────────────────

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  // Staging State for Files
  const [pendingFiles, setPendingFiles] = useState({
    avatar: null,
    resume: null,
    cert: null,
    health: null,
    permit: null,
    passport: null
  });

  const { register, handleSubmit, setValue, control, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "all",
  });

  const watched = useWatch({ control });

  // Progress Calculation (Dynamic based on Job Type)
  const progress = useMemo(() => {
    let score = 0;
    let total = 6; // Base fields
    
    // Base
    if (watched.job_preference) score++;
    if (watched.phone?.length > 8) score++;
    if (watched.address?.length > 5) score++;
    if (watched.resume_url || pendingFiles.resume) score++;
    if (watched.avatar_url || pendingFiles.avatar) score++;

    if (watched.job_preference === 'work_student') {
        total = 10; // Base (5) + DOB, Cert, Health, Permit, Portfolio
        if (watched.date_of_birth) score++;
        if (watched.enrollment_cert_url || pendingFiles.cert) score++;
        if (watched.health_insurance_url || pendingFiles.health) score++;
        if (watched.valid_permit_url || pendingFiles.permit) score++;
        if (watched.portfolio_link) score++;
    } else {
        total = 9; // Base (5) + Tax, SSN, Passport, Portfolio
        if (watched.tax_id) score++;
        if (watched.social_security_number) score++;
        if (watched.passport_url || pendingFiles.passport) score++;
        if (watched.portfolio_link) score++;
    }
    
    return Math.max(0, Math.min(Math.round((score / total) * 100), 100));
  }, [watched, pendingFiles]);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return navigate("/login");
      setUser(session.user);
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      if (data) {
        Object.keys(data).forEach(key => { if(data[key] !== null) setValue(key, data[key]); });
        if (!data.email) setValue("email", session.user.email);
      }
      setLoading(false);
    };
    init();
  }, [navigate, setValue]);

  const processUpload = async (file, bucket, folderName) => {
    if (!file) return null;
    const { data: list } = await supabase.storage.from(bucket).list(user.id);
    if (list?.length > 0) {
      const filesToDelete = list.filter(f => f.name.includes(folderName) || bucket === 'avatars').map(f => `${user.id}/${f.name}`);
      if (filesToDelete.length > 0) await supabase.storage.from(bucket).remove(filesToDelete);
    }
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${folderName}_${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, file, { upsert: true, cacheControl: '0' });
    if (error) throw error;
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const onSubmit = async (formData) => {
    setSaving(true);
    try {
      let finalData = { ...formData };

      // Helper to handle upload logic
      const handlePending = async (fileKey, storageBucket, folder, dbKey) => {
        if (pendingFiles[fileKey]) {
          const url = await processUpload(pendingFiles[fileKey], storageBucket, folder);
          finalData[dbKey] = url;
          if (dbKey === 'avatar_url') window.dispatchEvent(new CustomEvent("profileUpdated", { detail: { avatar_url: url } }));
        }
      };

      await handlePending('avatar', 'avatars', 'avatar', 'avatar_url');
      await handlePending('resume', 'user-documents', 'resume', 'resume_url');
      await handlePending('cert', 'user-documents', 'enrollment', 'enrollment_cert_url');
      await handlePending('health', 'user-documents', 'insurance', 'health_insurance_url');
      await handlePending('permit', 'user-documents', 'permit', 'valid_permit_url');
      await handlePending('passport', 'user-documents', 'passport', 'passport_url');

      const { error } = await supabase.from('profiles').update({ ...finalData, is_onboarded: true }).eq('id', user.id);
      if (error) throw error;

      // Update Form State
      Object.keys(finalData).forEach(key => setValue(key, finalData[key]));
      setPendingFiles({ avatar: null, resume: null, cert: null, health: null, permit: null, passport: null });
      setToast({ type: 'success', message: 'Profile saved successfully!' });
      window.dispatchEvent(new Event("profileUpdated"));
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: 'Save failed. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const showToast = (msg) => setToast({ type: 'error', message: msg });
  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-brand-green w-8 h-8" /></div>;
  const today = new Date().toISOString().split("T")[0];
  const isWorkStudent = watched.job_preference === 'work_student';

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mt-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
            <p className="text-gray-500 mt-1">Manage your personal information and application documents.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <form id="profile-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* 1. Identity */}
              <Card title="Identity" subtitle="Basic personal details." icon={User}>
                <div className="flex items-center gap-6 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AvatarSelector 
                    currentUrl={watched.avatar_url}
                    onFileSelect={(file) => {
                      setPendingFiles(prev => ({ ...prev, avatar: file }));
                      setValue("avatar_url", "pending_upload", { shouldValidate: true, shouldDirty: true });
                    }}
                  />
                  <div><h4 className="font-bold text-gray-900">Profile Photo</h4><p className="text-xs text-gray-500 mt-1">Max size: 2MB.</p></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['first_name', 'last_name', 'email'].map((field) => (
                    <div key={field} className="relative opacity-70">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">{field.replace('_', ' ')}</label>
                      <div className="relative">
                        <input {...register(field)} disabled className="w-full bg-gray-100 border border-transparent rounded-lg px-4 py-3 text-gray-600 text-sm font-medium cursor-not-allowed select-none" />
                        <Lock className="absolute right-3 top-3.5 text-gray-400 w-4 h-4" />
                      </div>
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Phone Number*</label>
                    <input {...register("phone")} placeholder="+49..." className={`input-field ${errors.phone ? 'border-red-300' : ''}`} />
                    <ErrorMsg message={errors.phone?.message} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Address*</label>
                    <input {...register("address")} placeholder="Street, City, Zip Code" className={`input-field ${errors.address ? 'border-red-300' : ''}`} />
                    <ErrorMsg message={errors.address?.message} />
                  </div>
                </div>
              </Card>

              {/* 2. Job Type */}
              <Card title="Contract Preference" subtitle="What kind of position are you looking for?" icon={Briefcase}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "work_student", label: "Work Student", Icon: BookOpen, desc: "For Enrolled Students" },
                    { id: "internship", label: "Internship", Icon: GraduationCap, desc: "Short-term learning" },
                    { id: "permanent", label: "Full-time", Icon: Briefcase, desc: "Permanent contract" },
                    { id: "part_time", label: "Part-time", Icon: Clock, desc: "Flexible hours" },
                  ].map((type) => {
                    const isSelected = watched.job_preference === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setValue("job_preference", type.id, { shouldValidate: true })}
                        className={`relative p-4 rounded-lg border text-left transition-all duration-200
                          ${isSelected ? "bg-white border-brand-green ring-1 ring-brand-green shadow-sm z-10" : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2 font-bold text-gray-900 text-sm"><type.Icon size={16} className={isSelected ? "text-brand-green" : "text-gray-400"} />{type.label}</div>
                          {isSelected && <CheckCircle2 size={16} className="text-brand-green" />}
                        </div>
                        <p className="text-xs text-gray-500 pl-6">{type.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </Card>

              {/* 3. Conditional Documents & Info */}
              <Card title="Documents & Details" subtitle="Required for your selected contract type." icon={FileText}>
                 <div className="space-y-6">
                    {/* Common Resume */}
                    <div>
                        <FileSelector label="Curriculum Vitae (CV)" currentUrl={watched.resume_url} required={true} onFileSelect={(f) => { setPendingFiles(p => ({...p, resume: f})); setValue("resume_url", "pending", {shouldValidate: true}); }} />
                        <ErrorMsg message={errors.resume_url?.message} />
                    </div>

                    {/* WORK STUDENT SPECIFIC */}
                    {isWorkStudent ? (
                        <div className="space-y-4 animate-fade-in">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
                                <AlertCircle className="text-blue-600 mt-1 shrink-0" size={18} />
                                <div className="text-sm text-blue-800">
                                    <p className="font-bold">Student Requirements</p>
                                    <p>Please provide proof of enrollment and valid permits.</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Date of Birth*</label>
                                    <input type="date" max={today} {...register("date_of_birth")} className={`input-field ${errors.date_of_birth ? 'border-red-300' : ''}`} />
                                    <ErrorMsg message={errors.date_of_birth?.message} />
                                </div>
                            </div>

                            <FileSelector label="Enrollment Certificate" currentUrl={watched.enrollment_cert_url} required={true} onFileSelect={(f) => { setPendingFiles(p => ({...p, cert: f})); setValue("enrollment_cert_url", "pending", {shouldValidate: true}); }} />
                            <ErrorMsg message={errors.enrollment_cert_url?.message} />

                            <FileSelector label="Health Insurance Proof" currentUrl={watched.health_insurance_url} required={true} onFileSelect={(f) => { setPendingFiles(p => ({...p, health: f})); setValue("health_insurance_url", "pending", {shouldValidate: true}); }} />
                            <ErrorMsg message={errors.health_insurance_url?.message} />

                            <FileSelector label="Valid Residence Permit" currentUrl={watched.valid_permit_url} required={true} onFileSelect={(f) => { setPendingFiles(p => ({...p, permit: f})); setValue("valid_permit_url", "pending", {shouldValidate: true}); }} />
                            <ErrorMsg message={errors.valid_permit_url?.message} />
                        </div>
                    ) : (
                        // OTHER JOBS SPECIFIC
                        <div className="space-y-4 animate-fade-in">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
                                <CreditCard className="text-gray-600 mt-1 shrink-0" size={18} />
                                <div className="text-sm text-gray-700">
                                    <p className="font-bold">Employment Details</p>
                                    <p>Tax and Social Security information is required for contracts.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Tax ID (Steuer-ID)*</label>
                                    <input {...register("tax_id")} placeholder="11-digit ID" className={`input-field ${errors.tax_id ? 'border-red-300' : ''}`} />
                                    <ErrorMsg message={errors.tax_id?.message} />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Social Security No. (SV)*</label>
                                    <input {...register("social_security_number")} placeholder="SV-Nummer" className={`input-field ${errors.social_security_number ? 'border-red-300' : ''}`} />
                                    <ErrorMsg message={errors.social_security_number?.message} />
                                </div>
                            </div>

                            <FileSelector label="Visa / Passport Picture" currentUrl={watched.passport_url} required={true} accept="image/*,.pdf" onFileSelect={(f) => { setPendingFiles(p => ({...p, passport: f})); setValue("passport_url", "pending", {shouldValidate: true}); }} />
                            <ErrorMsg message={errors.passport_url?.message} />
                        </div>
                    )}
                 
                    <div className="pt-6 border-t border-gray-100">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Portfolio URL (Optional)</label>
                        <input {...register("portfolio_link")} placeholder="https://..." className="input-field" />
                    </div>
                 </div>
              </Card>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-bold text-gray-900">Completion</h3>
                  <span className={`text-2xl font-black ${progress === 100 ? "text-brand-green" : "text-gray-900"}`}>{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className={`h-full transition-all duration-700 ease-out ${progress === 100 ? "bg-brand-green" : "bg-blue-600"}`} style={{ width: `${progress}%` }} />
                </div>
                <p className="text-xs text-gray-400 mt-4">{progress < 100 ? "Fill all required fields (*)." : "Profile is ready."}</p>
              </div>

              <button type="submit" form="profile-form" disabled={!isValid || saving} className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${!isValid || saving ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none" : "bg-brand-green hover:bg-[#5ab342] text-white shadow-green-500/20"}`}>
                {saving ? <Loader2 className="animate-spin" /> : <>Save Changes <ChevronRight size={18} /></>}
              </button>
              
              {!isValid && <div className="text-center bg-red-50 p-3 rounded-lg border border-red-100"><p className="text-xs text-red-500 font-semibold flex items-center justify-center gap-1"><AlertCircle size={12} /> Requirements not met.</p></div>}
              <div className="text-center"><p className="text-xs text-gray-400 flex items-center justify-center gap-1"><ShieldCheck size={12} /> Securely Encrypted</p></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`.input-field { width: 100%; background-color: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem 1rem; font-size: 0.875rem; color: #111827; transition: all 0.2s; } .input-field:focus { outline: none; border-color: #22c55e; box-shadow: 0 0 0 1px #22c55e; }`}</style>
    </div>
  );
}