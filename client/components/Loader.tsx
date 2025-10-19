import React from 'react';
import { motion } from 'motion/react';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      onAnimationComplete={(definition: any) => {
        if (definition.opacity === 0) {
          const loader = document.getElementById('app-loader');
          if (loader) {
            loader.style.display = 'none';
          }
        }
      }}
      id="app-loader"
    >
      <div className="relative">
        <img 
          src="/assets/logo.png" 
          alt="HVAC to Equity" 
          className="h-24 w-auto relative z-10"
        />
        
        {/* Scanner effect */}
        <div 
          className="absolute inset-0 flex items-start justify-center"
          style={{
            animation: 'scan 2s infinite',
          }}
        >
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#326ec2] to-transparent opacity-90 blur-sm" />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent" />
        </div>
        
        {/* Loading text */}
        <p className="text-white font-satoshi text-sm mt-4 text-center tracking-wider">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}

export default Loader;
