import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/backend/config"; 

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    // 1. Initial Check
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (mounted) {
          setSession(session);
          if (session) setLoading(false); // If we have session, stop loading
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    checkSession();

    // 2. Real-time Listener (CRITICAL FOR VERIFICATION LINKS)
    // This catches the moment the token in the URL is processed into a valid session
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setSession(session);
        setLoading(false); // Stop loading once Supabase decides our fate
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // 1. Loading State (Full Screen, Brand Dark Background)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#161F33]">
        <div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 2. If NO Session -> Redirect to Login
  // replace: true prevents them from clicking "Back" to return to the protected page
  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. If Valid Session -> Render the Page
  return children;
};

export default ProtectedRoute;