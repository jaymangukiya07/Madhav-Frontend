// src/components/PageTransition.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when page loads or route changes
    window.scrollTo(0, 0);

    // Play animation on every route change and on refresh
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Loader / Transition Animation */}
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Horizontal Line Reveal */}
          <motion.div
            className="bg-orange-600 h-0.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Top Panel */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-white"
            initial={{ height: "50%", y: "-50%" }}
            animate={{ height: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          />

          {/* Bottom Panel */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-white"
            initial={{ height: "50%", y: "50%" }}
            animate={{ height: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Page Content */}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {children}
      </div>
    </>
  );
}
