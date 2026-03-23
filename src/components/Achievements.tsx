import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { Trophy, Zap, Award, Target, Flame, Star } from 'lucide-react';

const statCards = [
  {
    percentage: 82,
    value: "100+",
    label: "LeetCode",
    subLabel: "Problems Solved",
    color: "#f97316", // Orange
  },
  {
    percentage: 78,
    value: "100+",
    label: "GeeksForGeeks",
    subLabel: "Problems Solved",
    color: "#10b981", // Green
  },
  {
    percentage: 65,
    value: "50 days",
    label: "Streak Badge",
    subLabel: "LeetCode Consistency",
    color: "#f43f5e", // Rose
  },
  {
    percentage: 90,
    value: "3",
    label: "Certifications",
    subLabel: "Industry Recognized",
    color: "#3b82f6", // Blue
  }
];

const distributionData = [
  { name: 'DSA', value: 40, color: '#06b6d4' },
  { name: 'Arrays', value: 25, color: '#8b5cf6' },
  { name: 'Trees', value: 20, color: '#ec4899' },
  { name: 'DP', value: 15, color: '#f59e0b' },
];

const masteryData = [
  { subject: 'Arrays', A: 90 },
  { subject: 'Strings', A: 80 },
  { subject: 'Trees', A: 70 },
  { subject: 'DP', A: 85 },
  { subject: 'Graphs', A: 65 },
  { subject: 'Sorting', A: 95 },
];

const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90 overflow-visible" viewBox="0 0 96 96">
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-white/5"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={radius}
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <span className="absolute text-sm font-bold text-white">{percentage}%</span>
    </div>
  );
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-neon-blue" />
            <span className="text-xs font-mono text-neon-blue uppercase tracking-[0.3em]">Performance_Metrics</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
            Achievements & <span className="text-neon-blue">Milestones</span>
          </h2>
        </div>

        {/* Top Row: Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:border-white/30 hover:bg-slate-900/80 transition-all shadow-lg"
            >
              <CircularProgress percentage={stat.percentage} color={stat.color} />
              <div>
                <div className="text-3xl font-black leading-none mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm font-bold text-white group-hover:text-white transition-colors">{stat.label}</div>
                <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider">{stat.subLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: Charts and Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Problem Distribution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-1">Problem Distribution</h3>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-8">200+ problems across categories</p>
            
            <div className="h-64 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {distributionData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-mono text-white/60">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Topic Mastery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-1">Topic Mastery</h3>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-8">Self-assessed by success rate</p>
            
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={masteryData}>
                  <PolarGrid stroke="#ffffff10" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff60', fontSize: 10, fontFamily: 'monospace' }} />
                  <Radar
                    name="Mastery"
                    dataKey="A"
                    stroke="#00f2ff"
                    fill="#00f2ff"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Badges and Highlights */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/[0.07] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">LEETCODE</div>
                <div className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">50-Day Streak Badge</div>
                <div className="text-xs text-white/40">Consistency champion</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/[0.07] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">GEEKSFORGEEKS</div>
                <div className="text-lg font-bold text-white group-hover:text-emerald-500 transition-colors">100+ Solutions</div>
                <div className="text-xs text-white/40">DSA problem setter</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/[0.07] transition-all flex-grow justify-center"
            >
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-3">
                  <Flame className="w-5 h-5 text-rose-500" />
                  <Star className="w-5 h-5 text-amber-500" />
                  <Award className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-sm font-bold text-white">Consistent Growth</div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-1">Continuous Learning Path</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
