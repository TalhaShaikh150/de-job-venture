import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .toLowerCase()
    .trim()
    .min(3, { message: "First name should not be less than 3 characters" })
    .max(20, { message: "First name should not be more than 20 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, "Only letters are allowed"),
  lastName: z
    .string()
    .toLowerCase()
    .trim()
    .min(3, {
      message: "Last name should not be less than 3 characters",
    })
    .max(20, { message: "Last name should not be more than 20 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, "Only letters are allowed"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please provide a valid email address" }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/(?=.*[a-z])/, "Must include a lowercase letter")
    .regex(/(?=.*[A-Z])/, "Must include an uppercase letter")
    .regex(/(?=.*\d)/, "Must include a number")
    .regex(/(?=.*[^A-Za-z0-9])/, "Must include a special character"),
});
