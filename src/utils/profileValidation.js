// src/utils/profileValidation.js

export const calculateProfileCompletion = (profile) => {
  if (!profile) return 0;

  let score = 0;
  let total = 6; // Base fields for everyone

  // 1. Base Checks
  if (profile.job_preference) score++;
  if (profile.phone && profile.phone.length > 8) score++;
  if (profile.address && profile.address.length > 5) score++;
  if (profile.resume_url) score++;
  if (profile.avatar_url) score++;

  // 2. Conditional Checks
  if (profile.job_preference === 'work_student') {
      total = 10; // Higher requirement for students
      if (profile.date_of_birth) score++;
      if (profile.enrollment_cert_url) score++;
      if (profile.health_insurance_url) score++;
      if (profile.valid_permit_url) score++;
      if (profile.portfolio_link) score++; // Optional in schema but counts for 100% here? Adjust as needed. 
      // If portfolio is strictly optional and shouldn't block 100%, remove it from total and score.
  } else {
      total = 9; 
      if (profile.tax_id) score++;
      if (profile.social_security_number) score++;
      if (profile.passport_url) score++;
      if (profile.portfolio_link) score++;
  }

  return Math.max(0, Math.min(Math.round((score / total) * 100), 100));
};

// Helper to match Job Types (Database string vs UI string)
export const isJobTypeCompatible = (userPref, jobType) => {
  if (!userPref || !jobType) return false;
  
  const pref = userPref.toLowerCase();
  const job = jobType.toLowerCase();

  // Normalize mappings
  if (pref === 'work_student' && (job.includes('student') || job.includes('werk'))) return true;
  if (pref === 'permanent' && (job.includes('full') || job.includes('permanent'))) return true;
  if (pref === 'part_time' && (job.includes('part') || job.includes('flex'))) return true;
  if (pref === 'internship' && (job.includes('intern'))) return true;

  return pref === job; // Direct match fallback
};