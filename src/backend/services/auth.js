import { supabase } from "../config";

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
        data: {
          firstName,
          lastName,
        },
      },
    });

    if (error) throw error;

    if (data.user && data.user.identities.length === 0) {
      // user already exists
      throw new Error("Email already registered. Please log in.");
    }

    return data;
  } catch (err) {
    console.error("registerUserInDB error:", err);
    throw err;
  }
}
