import React from 'react';
import { motion } from 'framer-motion';

// Shake Input (Validation Error)
export const ShakeInput: React.FC<{ isError: boolean } & React.InputHTMLAttributes<HTMLInputElement>> = ({ isError, className, ...props }) => {
  return (
    <motion.input
      animate={isError ? { x: [-10, 10, -10, 10, 0], borderColor: "#ef4444" } : { x: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }} // Fast vibration
      className={`border-2 rounded-md p-2 w-full transition-colors ${isError ? 'border-red-500 bg-red-50' : 'border-slate-200'} ${className}`}
      {...props as any}
    />
  );
};

