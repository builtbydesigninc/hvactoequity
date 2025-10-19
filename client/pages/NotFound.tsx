import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0B]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="text-8xl font-clash font-bold mb-4 bg-gradient-to-r from-[#326ec2] to-[#4A90E2] bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-[#9CA3AF] mb-8 font-helvetica">
          This page doesn't exist
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#326ec2] hover:bg-[#2958a3] text-white rounded-lg transition-colors font-satoshi font-medium"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
