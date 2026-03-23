import React from 'react';
import { motion } from 'motion/react';

const tech = [
  'Python', 'SQL', 'Power BI', 'Tableau', 'Scikit-learn', 'Pandas', 
  'NumPy', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Git',
  'R', 'Java', 'C++', 'Excel', 'DAX', 'NLP'
];

export const TechMarquee = () => {
  return (
    <div className="py-8 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...tech, ...tech].map((item, idx) => (
            <span 
              key={idx} 
              className="text-sm font-mono text-white/20 uppercase tracking-[0.4em] hover:text-neon-blue transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
