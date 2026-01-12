import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/Pages/auth/signUpSchema";
import { registerUserInDB } from "@/backend/services";
import { useState } from "react";

function SignUp() {
  const [formMessage, setFormMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
  });

  async function handleSignUp(formData) {
    try {
      setFormMessage("");

      const data = await registerUserInDB(formData);

      reset();

      setFormMessage("Account created. Check your email to confirm.");
    } catch (error) {
      if (error.message.includes("already")) {
        setFormMessage(
          "An account with this email already exists. Please log in."
        );
        reset();
      } else {
        setFormMessage("Something went wrong. Please try again.");
        reset();
      }
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
          Create Account
        </h1>
        <p className="text-slate-500">Start your journey with Dejob today.</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(handleSignUp)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all"
              placeholder="John"
              {...register("firstName")}
            />
            {errors.firstName?.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="group">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all"
              placeholder="Doe"
              {...register("lastName")}
            />
            {errors.lastName?.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300"
            placeholder="name@company.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="group">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-slate-900 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all placeholder:text-slate-300"
            placeholder="Create a password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {formMessage && (
          <p className="text-sm text-red-600 text-center">{formMessage}</p>
        )}
        <button
          className="w-full py-4 bg-brand-dark hover:bg-brand-green text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Create Account"}
        </button>

        <button className="w-full py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="G"
          />
          Sign up with Google
        </button>
      </form>

      <div className="mt-10 text-center border-t border-slate-100 pt-6">
        <p className="text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-brand-dark font-bold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
