import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center p-6"
        >
          <div className="relative w-64 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono text-white/40 uppercase tracking-[0.3em]"
            >
              Initializing Neural Interface
            </motion.p>
            <p className="text-2xl font-display font-bold text-neon-blue">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Decorative Data Nodes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute w-1 h-1 bg-neon-blue rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
