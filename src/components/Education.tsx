import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    details: 'Specializing in Data Science and Artificial Intelligence. Focus on advanced algorithms, machine learning, and data engineering.',
    status: 'In Progress',
    color: 'neon-blue'
  },
  {
    degree: 'Intermediate (PCM)',
    institution: 'Vanasthali Public School',
    location: 'Delhi',
    period: 'Apr 2022 – Mar 2023',
    details: 'Completed with 89% aggregate. Strong foundation in Mathematics and Physics.',
    status: 'Completed',
    color: 'neon-purple'
  },
  {
    degree: 'Matriculation',
    institution: 'Vanasthali Public School',
    location: 'Delhi',
    period: 'Mar 2021 – Mar 2022',
    details: 'Completed with 91% aggregate.',
    status: 'Completed',
    color: 'neon-blue'
  }
];

export const Education = () => {
  return (
    <section id="education" className="pt-8 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#D1F7FF]">Academic Milestones</h2>
            <p className="text-white/40">Tracking my educational progress and foundational learning journey.</p>
          </div>
          <div className="dashboard-card px-6 py-3 flex items-center gap-3">
            <span className="text-xs font-mono text-white/30 uppercase">Current Status:</span>
            <span className="text-sm font-display font-bold text-neon-blue">Active Student</span>
          </div>
        </div>

        <div className="space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="dashboard-card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center group"
            >
              <div className="flex flex-col items-center gap-2 min-w-[120px]">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                  item.status === 'Completed' ? "bg-emerald-500/10 text-emerald-400" : "bg-neon-blue/10 text-neon-blue animate-pulse"
                )}>
                  {item.status === 'Completed' ? <CheckCircle2 size={24} /> : <GraduationCap size={24} />}
                </div>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{item.status}</span>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <h3 className="text-xl font-display font-bold text-[#D1F7FF] group-hover:text-neon-blue transition-colors">{item.degree}</h3>
                  <span className="hidden md:block text-white/10">•</span>
                  <span className="text-sm font-mono text-white/40">{item.period}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-white/30 mb-4">
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {item.location}</span>
                  <span className="flex items-center gap-1.5"><GraduationCap size={12} /> {item.institution}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed max-w-3xl">
                  {item.details}
                </p>
              </div>

              <div className="hidden lg:block relative">
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className={cn("h-full", item.status === 'Completed' ? "bg-emerald-500" : "bg-neon-blue")}
                    initial={{ width: 0 }}
                    whileInView={{ width: item.status === 'Completed' ? '100%' : '60%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                {/* Scan Effect on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 blur-sm pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
