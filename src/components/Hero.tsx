import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import cvFile from '../Shivani_Bhoj_CV.docx';

const sparklineData = [
  { value: 40 }, { value: 30 }, { value: 60 }, { value: 45 }, { value: 80 }, { value: 55 }, { value: 90 }
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-32 pb-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:pl-16 lg:pl-24"
          >
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9] text-[#D1F7FF]">
              Shivani <br />
              Bhoj
            </h1>
            
            <p className="text-xl text-white/50 max-w-xl mb-12 font-light leading-relaxed">
              Data Science Enthusiast | Machine Learning Engineer | Problem Solver. 
              Specializing in turning complex data into actionable intelligence through advanced analytics and machine learning.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-white text-dark-bg font-bold flex items-center gap-3 hover:bg-neon-blue transition-all"
              >
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                id="resume-download"
                href={cvFile}
                download="Shivani_Bhoj_CV.docx"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-3"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center lg:justify-center -mt-12 md:-mt-32"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-neon-purple/20 animate-reverse-spin-slow" />
              
              {/* Photo Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 neon-glow-blue">
                <img 
                  src="/src/WhatsApp Image 2026-03-16 at 18.15.53.jpeg" 
                  alt="Shivani Bhoj"
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Data Visualization Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 dashboard-card p-4 flex items-center justify-between gap-8 overflow-x-auto whitespace-nowrap relative"
        >
          {/* Scanning Line Animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent w-1/2 h-full pointer-events-none"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="flex items-center gap-4 px-4 border-r border-white/10 relative z-10">
            <div className="w-12 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-blue shadow-[0_0_10px_#00f2ff]" 
                initial={{ width: 0 }} 
                animate={{ width: ['80%', '90%', '85%'] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase">Python Proficiency</span>
          </div>
          
          <div className="flex items-center gap-4 px-4 border-r border-white/10 relative z-10">
            <div className="w-12 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-purple shadow-[0_0_10px_#bc13fe]" 
                initial={{ width: 0 }} 
                animate={{ width: ['65%', '75%', '70%'] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase">ML Accuracy Avg</span>
          </div>

          <div className="flex items-center gap-4 px-4 relative z-10">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-1 h-4 bg-neon-blue/40 rounded-full"
                  animate={{ 
                    height: [Math.random() * 10 + 5, Math.random() * 20 + 10, Math.random() * 10 + 5],
                    backgroundColor: i % 2 === 0 ? ['#00f2ff44', '#00f2ffaa', '#00f2ff44'] : ['#bc13fe44', '#bc13feaa', '#bc13fe44']
                  }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase">Real-time Analytics</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
