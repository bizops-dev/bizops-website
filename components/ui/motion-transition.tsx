import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CrossfadeProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
}

export const CrossfadeContent: React.FC<CrossfadeProps> = ({ isLoading, children, skeleton }) => {
  return (
    <div className="relative w-full">
      <AnimatePresence mode="popLayout">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {skeleton || <div className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

