import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/backend/config";
import { 
  Briefcase, User, FileText, CheckCircle2, ChevronRight, 
  ShieldCheck, GraduationCap, Clock, BookOpen, AlertCircle, 
  Loader2, Camera, Lock, XCircle, CheckCircle
} from "lucide-react";

// ─── 1. CONFIG ───────────────────────────────────────────────────────────────
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

// Age Validation
const isAdult = (dateString) => {
  if (!dateString) return false;
  const birthday = new Date(dateString);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970) >= 16;
};

// Schema
const profileSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().min(8, "Phone number is too short"),
  address: z.string().min(5, "Address must be complete"),
  date_of_birth: z.string().refine(isAdult, { message: "You must be at least 16 years old." }),
  job_preference: z.string().min(1, "Selection required"),
  // We accept any string here. If it's a URL, great. If it's "pending", also great.
  resume_url: z.string().min(1, "Resume is required"),
  enrollment_cert_url: z.string().optional(),
  portfolio_link: z.string().optional(),
  avatar_url: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.job_preference === "work_student" && !data.enrollment_cert_url) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Enrollment Certificate is required",
      path: ["enrollment_cert_url"],
    });
  }
});

// ─── 2. PURE UI COMPONENTS (NO UPLOAD LOGIC HERE) ────────────────────────────

// 🛑 THIS COMPONENT ONLY PREVIEWS LOCAL FILES. NO UPLOAD.
const AvatarSelector = ({ currentUrl, onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Client-side validation
    if (file.size > MAX_FILE_SIZE) return alert("Image is too large (Max 2MB)");
    if (!file.type.startsWith("image/")) return alert("Invalid image format");

    // 1. Create a fake local URL just for display
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // 2. Pass the raw file to the parent (ProfilePage) to handle later
    onFileSelect(file);
  };

  // Display Priority: Local Preview > Database URL > Default Icon
  const displaySrc = preview || currentUrl;

  return (
    <div className="relative group w-20 h-20 shrink-0">
      <div className="w-20 h-20 rounded-full border-2 border-gray-200 overflow-hidden bg-white flex items-center justify-center shadow-inner relative">
        {displaySrc ? (
          <img src={displaySrc} alt="Avatar" className="w-full h-full object-cover" />
        ) : (
          <User className="text-gray-300 w-10 h-10" />
        )}
      </div>
      <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 backdrop-blur-sm z-20">
        <Camera className="w-6 h-6 text-white" />
        <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
};

// 🛑 THIS COMPONENT ONLY SELECTS PDFS. NO UPLOAD.
const FileSelector = ({ label, currentUrl, required, onFileSelect }) => {
  const [fileName, setFileName] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) return alert("File too large (Max 2MB)");
    if (file.type !== "application/pdf") return alert("Only PDF files allowed");

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
            {fileName ? (
              <span className="text-brand-green font-bold">Pending Upload: {fileName}</span>
            ) : currentUrl ? (
              <a href={currentUrl} target="_blank" className="text-blue-600 hover:underline">View Current File</a>
            ) : (
              "Max 2MB (PDF)"
            )}
          </p>
        </div>
      </div>
      <label className={`cursor-pointer text-xs font-bold px-4 py-2 rounded-lg border transition-all flex items-center gap-2 ${hasFile ? "border-gray-200 text-gray-600 bg-white hover:border-gray-300" : "border-brand-green text-brand-green bg-brand-green/5 hover:bg-brand-green hover:text-white"}`}>
        {hasFile ? "Replace" : "Select"}
        <input type="file" className="hidden" accept=".pdf" onChange={handleChange} />
      </label>
    </div>
  );
};

// Helper UI
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

// ─── 3. MAIN PAGE LOGIC ──────────────────────────────────────────────────────

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  // STAGING STATE: Files sit here until you click "Save"
  const [pendingFiles, setPendingFiles] = useState({
    avatar: null,
    resume: null,
    cert: null
  });

  const { register, handleSubmit, setValue, control, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "all",
  });

  const watched = useWatch({ control });

  // Progress Bar Logic
  const progress = useMemo(() => {
    let score = 0;
    if (watched.job_preference) score++;
    if (watched.phone && watched.phone.length > 8) score++;
    if (watched.address && watched.address.length > 5) score++;
    if (watched.date_of_birth) score++;
    if (watched.resume_url || pendingFiles.resume) score += 2; // Count DB URL or Pending File
    if (watched.avatar_url || pendingFiles.avatar) score++;
    
    if (watched.job_preference === 'work_student') {
        if(watched.enrollment_cert_url || pendingFiles.cert) score++;
        else score -= 1;
    } else { score++; }
    
    return Math.max(0, Math.min(Math.round((score / 8) * 100), 100));
  }, [watched, pendingFiles]);

  // Load Data
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

  // ─── THE UPLOAD FUNCTION (With Debugging) ──────────────────────────────
  const processUpload = async (file, bucket, folderName) => {
    if (!file) return null;

    console.log(`[1] Starting upload process for ${bucket}...`);

    // 1. LIST existing files in user folder
    // Note: We list the folder corresponding to the User's ID
    const { data: list, error: listError } = await supabase.storage.from(bucket).list(user.id);
    
    if (listError) {
      console.error("Error listing files:", listError);
      return null;
    }

    // 2. DELETE old files
    if (list && list.length > 0) {
       // Filter files to ensure we don't accidentally delete something else if sharing folder
       // (Though usually, 1 folder = 1 user)
       const filesToDelete = list
        .map(f => `${user.id}/${f.name}`); // Construct full path: userID/filename
       
       console.log("[2] Deleting old files:", filesToDelete);

       const { error: deleteError } = await supabase.storage
        .from(bucket)
        .remove(filesToDelete);
       
       if (deleteError) {
         console.error("Error deleting old files (Check RLS Policies!):", deleteError);
       } else {
         console.log("[3] Old files deleted successfully.");
       }
    }

    // 3. UPLOAD New
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${folderName}_${Date.now()}.${fileExt}`;

    console.log(`[4] Uploading new file: ${fileName}`);

    const { error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file, { 
      upsert: true,
      cacheControl: '0' 
    });

    if (uploadError) throw uploadError;
    
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data.publicUrl;
  };

  // ─── ON SUBMIT ─────────────────────────────────────────────────────────────
  const onSubmit = async (formData) => {
    setSaving(true);
    try {
      let finalData = { ...formData };

      // 1. Process Avatar Upload
      if (pendingFiles.avatar) {
        const url = await processUpload(pendingFiles.avatar, 'avatars', 'avatar');
        finalData.avatar_url = url;
        // Notify Navbar immediately
        window.dispatchEvent(new CustomEvent("profileUpdated", { detail: { avatar_url: url } }));
      }

      // 2. Process Resume Upload
      if (pendingFiles.resume) {
        const url = await processUpload(pendingFiles.resume, 'user-documents', 'resume');
        finalData.resume_url = url;
      }

      // 3. Process Cert Upload
      if (pendingFiles.cert) {
        const url = await processUpload(pendingFiles.cert, 'user-documents', 'enrollment');
        finalData.enrollment_cert_url = url;
      }

      // 4. Save Text Data to DB
      const { error } = await supabase
        .from('profiles')
        .update({ ...finalData, is_onboarded: true })
        .eq('id', user.id);

      if (error) throw error;

      // 5. Update Local State & Clear Pending
      setValue("avatar_url", finalData.avatar_url);
      setValue("resume_url", finalData.resume_url);
      setValue("enrollment_cert_url", finalData.enrollment_cert_url);
      setPendingFiles({ avatar: null, resume: null, cert: null });

      setToast({ type: 'success', message: 'Profile saved successfully!' });
      window.dispatchEvent(new Event("profileUpdated")); // General update

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
              
              <Card title="Personal Information" subtitle="Your identity details." icon={User}>
                
                <div className="flex items-center gap-6 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <AvatarSelector 
                    currentUrl={watched.avatar_url}
                    onFileSelect={(file) => {
                      // 1. Store file in Staging state
                      setPendingFiles(prev => ({ ...prev, avatar: file }));
                      // 2. Trick form into thinking field is filled (so "Save" becomes clickable)
                      setValue("avatar_url", "pending_upload", { shouldValidate: true, shouldDirty: true });
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Profile Photo</h4>
                    <p className="text-xs text-gray-500 mt-1">Allowed: JPG, PNG, WebP. <br/> Max size: 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['first_name', 'last_name', 'email'].map((field) => (

                    <div key={field} className="relative opacity-70">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">{field.replace('_', ' ')}</label>
                      <div className="relative">
                        <input {...register(field)}disabled className="w-full
                         bg-gray-100 border border-transparent rounded-lg px-4 py-3 text-gray-600 text-sm font-medium cursor-not-allowed 
                         select-none" />
                        <Lock className="absolute right-3 top-3.5 text-gray-400 w-4 h-4" />
                      </div>
                    </div>
                  ))}

                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Phone Number</label>
                    <input {...register("phone")} placeholder="+49..." className={`input-field ${errors.phone ? 'border-red-300' : ''}`} />
                    <ErrorMsg message={errors.phone?.message} />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Date of Birth</label>
                    <input type="date" max={today} {...register("date_of_birth")} className={`input-field ${errors.date_of_birth ? 'border-red-300' : ''}`} />
                    <ErrorMsg message={errors.date_of_birth?.message} />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Address</label>
                    <input {...register("address")} placeholder="Street, City, Zip Code" className={`input-field ${errors.address ? 'border-red-300' : ''}`} />
                    <ErrorMsg message={errors.address?.message} />
                  </div>
                </div>
              </Card>

              <Card title="Contract Preference" subtitle="What kind of position are you looking for?" icon={Briefcase}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "internship", label: "Internship", Icon: GraduationCap, desc: "Short-term learning" },
                    { id: "permanent", label: "Full-time", Icon: Briefcase, desc: "Permanent contract" },
                    { id: "part_time", label: "Part-time", Icon: Clock, desc: "Flexible hours" },
                    { id: "work_student", label: "Work Student", Icon: BookOpen, desc: "Requires Enrollment Cert" },
                  ].map((type) => {
                    const isSelected = watched.job_preference === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setValue("job_preference", type.id, { shouldValidate: true })}
                        className={`relative p-4 rounded-lg border text-left transition-all duration-200
                          ${isSelected 
                            ? "bg-white border-brand-green ring-1 ring-brand-green shadow-sm z-10" 
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
                <ErrorMsg message={errors.job_preference?.message} />
              </Card>

              <Card title="Documents" subtitle="Upload your latest files. PDF only." icon={FileText}>
                 <div className="space-y-3">
                    <FileSelector 
                      label="Curriculum Vitae (CV)"
                      currentUrl={watched.resume_url}
                      required={true}
                      onFileSelect={(file) => {
                        setPendingFiles(prev => ({ ...prev, resume: file }));
                        setValue("resume_url", "pending", { shouldValidate: true, shouldDirty: true });
                      }}
                    />
                    <ErrorMsg message={errors.resume_url?.message} />

                    <div className={`transition-all duration-300 overflow-hidden ${watched.job_preference === 'work_student' ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                       <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-3">
                            <AlertCircle size={16} /> Student Verification Required
                          </div>
                          <FileSelector 
                            label="Enrollment Certificate"
                            currentUrl={watched.enrollment_cert_url}
                            required={true}
                            onFileSelect={(file) => {
                                setPendingFiles(prev => ({ ...prev, cert: file }));
                                setValue("enrollment_cert_url", "pending", { shouldValidate: true, shouldDirty: true });
                            }}
                          />
                          <ErrorMsg message={errors.enrollment_cert_url?.message} />
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Portfolio URL (Optional)</label>
                    <input {...register("portfolio_link")} placeholder="https://..." className="input-field" />
                 </div>
              </Card>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-bold text-gray-900">Profile Strength</h3>
                  <span className={`text-2xl font-black ${progress === 100 ? "text-brand-green" : "text-gray-900"}`}>{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className={`h-full transition-all duration-700 ease-out ${progress === 100 ? "bg-brand-green" : "bg-blue-600"}`} style={{ width: `${progress}%` }} />
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  {progress < 100 ? "Complete all required fields (*)." : "Your profile is fully optimized."}
                </p>
              </div>

              <button 
                type="submit" 
                form="profile-form"
                disabled={!isValid || saving} 
                className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 
                  ${!isValid || saving 
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none" 
                    : "bg-brand-green hover:bg-[#5ab342] text-white shadow-green-500/20"}`}
              >
                {saving ? <Loader2 className="animate-spin" /> : <>Save Changes <ChevronRight size={18} /></>}
              </button>
              
              {!isValid && (
                <div className="text-center bg-red-50 p-3 rounded-lg border border-red-100">
                    <p className="text-xs text-red-500 font-semibold flex items-center justify-center gap-1">
                        <AlertCircle size={12} /> Please fill required fields.
                    </p>
                </div>
              )}

              <div className="text-center">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> Securely Encrypted
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .input-field {
          width: 100%;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #111827;
          transition: all 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: #22c55e;
          box-shadow: 0 0 0 1px #22c55e;
        }
      `}</style>
    </div>
  );
}