import React from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const radarData = [
  { subject: 'Python', A: 95, fill: '#00f2ff' },
  { subject: 'Statistics', A: 85, fill: '#bc13fe' },
  { subject: 'Power BI', A: 90, fill: '#00f2ff' },
  { subject: 'SQL', A: 88, fill: '#bc13fe' },
  { subject: 'ML/AI', A: 92, fill: '#00f2ff' },
  { subject: 'Data Viz', A: 90, fill: '#bc13fe' },
];

const spiralData = [
  { name: 'Python', value: 95, fill: '#00f2ff' },
  { name: 'ML/AI', value: 92, fill: '#bc13fe' },
  { name: 'Power BI', value: 90, fill: '#00f2ff' },
  { name: 'SQL', value: 88, fill: '#bc13fe' },
  { name: 'Stats', value: 85, fill: '#00f2ff' },
];

const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`relative group inline-block ${className}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 text-neon-blue opacity-0 group-hover:opacity-70 group-hover:translate-x-[-2px] group-hover:translate-y-[1px] transition-all duration-75">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 text-neon-purple opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[-1px] transition-all duration-75">
      {text}
    </span>
  </div>
);

const HUDCorner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const styles = {
    tl: "top-0 left-0 border-t-2 border-l-2",
    tr: "top-0 right-0 border-t-2 border-r-2",
    bl: "bottom-0 left-0 border-b-2 border-l-2",
    br: "bottom-0 right-0 border-b-2 border-r-2",
  };
  return <div className={`absolute w-4 h-4 border-neon-blue/40 ${styles[position]} pointer-events-none`} />;
};

const SkillModule = ({ label, value, color = "neon-blue" }: any) => (
  <div className="relative p-4 bg-white/5 border border-white/10 group hover:border-neon-blue/50 transition-all overflow-hidden">
    <div className="flex justify-between items-end mb-2">
      <div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">Module_ID: {label.substring(0, 3).toUpperCase()}_0X</div>
        <div className="text-sm font-display font-bold text-white group-hover:text-neon-blue transition-colors">{label}</div>
      </div>
      <div className="text-xs font-mono text-neon-blue">{value}%</div>
    </div>
    <div className="h-1 bg-white/5 flex gap-0.5">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: i < (value / 5) ? 1 : 0.1 }}
          className={`h-full flex-grow ${i < (value / 5) ? (color === 'neon-blue' ? 'bg-neon-blue' : 'bg-neon-purple') : 'bg-white/10'}`}
          transition={{ delay: i * 0.02 }}
        />
      ))}
    </div>
    {/* Decorative bits */}
    <div className="absolute top-1 right-1 w-1 h-1 bg-neon-blue/20" />
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-neon-blue/20" />
  </div>
);

const CustomActiveDot = (props: any) => {
  const { cx, cy, x, y } = props;
  
  // Robust guard against invalid or uninitialized coordinates
  if (
    typeof cx !== 'number' || 
    typeof cy !== 'number' || 
    typeof x !== 'number' || 
    typeof y !== 'number' ||
    isNaN(cx) || isNaN(cy) || isNaN(x) || isNaN(y) ||
    (cx === 0 && cy === 0)
  ) {
    return null;
  }

  return (
    <g>
      <line 
        x1={x} 
        y1={y} 
        x2={cx} 
        y2={cy} 
        stroke="white" 
        strokeWidth={2} 
        strokeLinecap="round"
      />
      <circle cx={x} cy={y} r={4} fill="white" />
      <circle cx={x} cy={y} r={12} stroke="white" strokeOpacity={0.4} fill="none" className="animate-ping" />
    </g>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-neon-blue" />
              <span className="text-xs font-mono text-neon-blue uppercase tracking-[0.3em]">Neural_Network_Status: Optimal</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">
              Skills & <span className="text-neon-blue">Expertise</span>
            </h2>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
            Data_Stream_Active<br />
            Encryption_Level: AES-256<br />
            Location: Virtual_Node_01
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Radar - Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative bg-white/5 border border-white/10 p-8 min-h-[500px] group"
          >
            <HUDCorner position="tl" />
            <HUDCorner position="tr" />
            <HUDCorner position="bl" />
            <HUDCorner position="br" />
            
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Cognitive Mapping</h3>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Multi-dimensional proficiency analysis</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-neon-blue animate-pulse" />
                <div className="w-2 h-2 bg-neon-purple animate-pulse [animation-delay:0.2s]" />
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <defs>
                    <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#00f2ff" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#bc13fe" stopOpacity={0.1} />
                    </radialGradient>
                  </defs>
                  <PolarGrid stroke="#ffffff05" radialLines={false} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#ffffff', fontSize: 12, fontWeight: 900, fontFamily: 'JetBrains Mono' }} 
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#00f2ff"
                    fill="url(#radarGradient)"
                    fillOpacity={0.6}
                    animationDuration={2500}
                    dot={{ r: 3, fill: '#00f2ff', fillOpacity: 1 }}
                    activeDot={<CustomActiveDot />}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff20', borderRadius: '0px', fontSize: '10px', fontFamily: 'JetBrains Mono' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Scanning Line */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent h-20 w-full z-20 pointer-events-none"
              animate={{ top: ['-20%', '100%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Side Stats - Skill Helix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative bg-white/5 border border-white/10 p-8 flex flex-col justify-between"
          >
            <HUDCorner position="tl" />
            <HUDCorner position="br" />
            
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-1">Skill_Helix</h3>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-8">Skill density helix</p>
              
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart 
                    cx="50%" 
                    cy="40%" 
                    innerRadius="20%" 
                    outerRadius="85%" 
                    barSize={10} 
                    data={spiralData}
                    startAngle={90}
                    endAngle={450}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={5}
                      animationDuration={2000}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff20', borderRadius: '0px', fontSize: '10px', fontFamily: 'JetBrains Mono' }}
                    />
                    <Legend 
                      iconSize={8} 
                      layout="vertical" 
                      verticalAlign="bottom" 
                      align="center" 
                      wrapperStyle={{ 
                        fontSize: '10px', 
                        fontFamily: 'JetBrains Mono', 
                        color: '#ffffff40',
                        paddingTop: '30px',
                        lineHeight: '1.5'
                      }} 
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </motion.div>

          {/* Skill Grid - Bento Style */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillModule label="Python" value={95} />
              <SkillModule label="SQL" value={88} color="neon-purple" />
              <SkillModule label="Java" value={75} />
              <SkillModule label="C++" value={82} color="neon-purple" />
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillModule label="Power BI" value={92} color="neon-purple" />
              <SkillModule label="Excel" value={85} />
              <SkillModule label="ML/AI" value={90} color="neon-purple" />
              <SkillModule label="Tableau" value={78} />
            </div>
          </div>

          {/* Soft Skills - Technical Readout Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 relative bg-white/5 border border-white/10 p-8 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-display font-bold text-white mb-4">Core_Processors</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Beyond technical syntax, these are the fundamental algorithms that drive my problem-solving approach and professional interaction.
                </p>
              </div>
              
              <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {[
                  'Problem_Solving', 'Adaptability', 'Emotional_Int', 
                  'Collaboration', 'Fast_Learning', 'Critical_Think'
                ].map((skill, i) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 242, 255, 0.1)' }}
                    className="p-4 border border-white/10 flex flex-col gap-2 group cursor-crosshair"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-mono text-white/20">PROC_0{i+1}</span>
                      <div className="w-1 h-1 bg-neon-blue group-hover:animate-ping" />
                    </div>
                    <div className="text-xs font-mono text-white group-hover:text-neon-blue transition-colors uppercase tracking-wider">{skill}</div>
                    <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                      <motion.div 
                        className="h-full bg-neon-blue"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
