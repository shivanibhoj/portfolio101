import React from 'react';
import { motion } from 'motion/react';
import { Brain, BarChart, Eye, Search, Zap, Globe } from 'lucide-react';

const features = [
  { icon: <Brain size={20} />, title: 'AI & ML', desc: 'Building intelligent systems with NLP & ML' },
  { icon: <BarChart size={20} />, title: 'Data Analytics', desc: 'Raw data —> actionable insight' },
  { icon: <Eye size={20} />, title: 'Visualization', desc: 'Compelling dashboards & charts' },
  { icon: <Search size={20} />, title: 'Problem Solving', desc: 'Logical thinking, creative execution' },
  { icon: <Zap size={20} />, title: 'Fast Learner', desc: 'Always pushing boundaries' },
  { icon: <Globe size={20} />, title: 'Open Source', desc: 'Contributing & collaborating' },
];

export const About = () => {
  const jsonCode = `{
  "name": "Shivani Bhoj",
  "role": "Data Science & AI Developer",
  "university": "LPU, Punjab",
  "status": "open_to_work",
  "passion": "Turning data into intelligence"
}`;

  return (
    <section id="about" className="pt-16 pb-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-white/30 uppercase tracking-[0.5em] mb-4">— WHO I AM —</p>
          <h2 className="section-title mb-0">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* JSON Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dashboard-card p-8 font-mono text-sm leading-relaxed relative overflow-hidden group"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              <span className="ml-2 text-white/20">about.json</span>
            </div>
            <pre className="text-neon-blue">
              <code>{jsonCode}</code>
            </pre>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-white/60 mb-6 italic">
                Hi! I'm Shivani Bhoj — a CS undergrad at LPU specializing in <span className="text-neon-blue">Data Science & AI</span>. My world revolves around patterns, predictions, and pipelines.
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                From building Power BI dashboards to developing AI file management systems, I bridge the gap between complex data and real-world impact. Every dataset tells a story — I help tell it.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {['PYTHON', 'POWER BI', 'MACHINE LEARNING', 'EDA', 'NLP'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40 font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="dashboard-card p-8 group hover:border-neon-blue/30 transition-all relative overflow-hidden"
              >
                {/* Data Pulse Effect */}
                <motion.div 
                  className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-blue mb-6 group-hover:neon-glow-blue transition-all relative z-10">
                  {f.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 relative z-10">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed relative z-10">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
