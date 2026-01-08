import { useState } from "react";
import { Login, SignUp } from "../components/ui";

function LoginSignUp() {
  const [toggle, setToggle] = useState("login");
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center cursor-default">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          DeJob<span className="text-brand-blue">Venture</span>
        </h1>
      </div>
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden">
        {/* <!-- Login View --> */}
        <Login toggle={toggle} setToggle={setToggle} />

        {/* <!-- Sign Up View (Hidden Initially) --> */}
        <SignUp toggle={toggle} setToggle={setToggle} />
      </div>
      <footer className="mt-12 text-center text-slate-400 text-sm">
        &copy; 2024 DeJobVenture. All rights reserved.
      </footer>
    </div>
  );
}

export default LoginSignUp;
