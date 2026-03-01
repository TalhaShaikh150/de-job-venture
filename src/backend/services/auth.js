import { supabase } from "@/backend/config";

export async function registerUserInDB({
  firstName,
  lastName,
  email,
  password,
}) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "https://de-job-venture.vercel.app/login",
        data: {
          firstName,
          lastName,
        },
      },
    });

    if (error) throw error;

    if (data.user && data.user.identities.length === 0) {
      throw new Error("Email already registered. Please log in.");
    }

    return data;
  } catch (err) {
    console.error("registerUserInDB error:", err);
    throw err;
  }
}

export async function signUserInDB({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("signUserInDB error:", err);
    throw err;
  }
}

export async function loginWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          prompt: "select_account",
        },
      },
    });
    if (error) throw error;
    return data;
  } catch (err) {
    console.log("Error in google registration", err);
  }
}
