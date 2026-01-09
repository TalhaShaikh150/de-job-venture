import z from "zod";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: "First name should not be less than 3 characters" })
    .max(20, { message: "First name should not be more than 20 characters" }),

  lastName: z
    .string()
    .trim()
    .min(3, { message: "Last name should not be less than 3 characters" })
    .max(20, { message: "Last name should not be more than 20 characters" }),

  email: z.string().email(),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
    ),
});
