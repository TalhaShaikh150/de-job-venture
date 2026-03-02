import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/backend/config"; // Check your path

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (mounted) {
        setSession(session);
        setLoading(false);
      }
    };

    checkSession();

    return () => { mounted = false; };
  }, []);

  // 1. While checking, show a full-screen spinner (No Navbar, No Page)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 2. If no session, Redirect to Login immediately
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // 3. If logged in, render the Profile Page
  return children;
};

export default ProtectedRoute;