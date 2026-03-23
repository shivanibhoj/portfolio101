import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, BarChart3, Database, BrainCircuit, Linkedin, ChevronRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

import spotifyImage from '../Gemini_Generated_Image_o9ipdho9ipdho9ip.png';
import streamingImage from '../Gemini_Generated_Image_eejhixeejhixeejh.png';
import directoryImage from '../Gemini_Generated_Image_gkyfk0gkyfk0gkyf.png';
import spotifyVideo from '../Screen Recording 2026-03-21 202612.mp4';

const spotifyLineData = [
  { name: 'Jan', value: 300 }, { name: 'Feb', value: 380 }, { name: 'Mar', value: 340 },
  { name: 'Apr', value: 450 }, { name: 'May', value: 520 }, { name: 'Jun', value: 680 },
  { name: 'Jul', value: 740 }
];

const directoryBarData = [
  { name: 'Docs', value: 245 }, { name: 'Images', value: 180 }, { name: 'Code', value: 320 },
  { name: 'Media', value: 95 }
];

const streamingAreaData = [
  { name: '00h', value: 10 }, { name: '04h', value: 5 }, { name: '08h', value: 52 },
  { name: '12h', value: 78 }, { name: '16h', value: 92 }, { name: '20h', value: 65 },
  { name: '23h', value: 30 }
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  links: {
    github?: string;
    linkedin?: string;
    live: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  chart: React.ReactNode;
  video?: string;
  image?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Spotify Trends Analysis Dashboard',
    description: 'Interactive Power BI dashboard analyzing song trends, artist performance, and popularity patterns using DAX and Power Query.',
    tags: ['Power BI', 'DAX', 'Power Query', 'Data Analytics'],
    icon: <BarChart3 className="w-5 h-5" />,
    links: {
      linkedin: 'https://www.linkedin.com/in/shivani-bhoj-510707298/recent-activity/all/',
      live: 'https://www.linkedin.com/in/shivani-bhoj-510707298',
    },
    metrics: [
      { label: 'Popularity', value: '72.4' },
      { label: 'Total Tracks', value: '1.2K' },
      { label: 'Distinct Artists', value: '348' }
    ],
    chart: (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={spotifyLineData}>
          <Line type="monotone" dataKey="value" stroke="#00f2ff" strokeWidth={2} dot={{ fill: '#00f2ff', r: 4 }} />
          <Tooltip contentStyle={{ backgroundColor: '#0d0d12', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
        </LineChart>
      </ResponsiveContainer>
    ),
    video: spotifyVideo,
    color: 'neon-blue'
  },
  {
    title: 'AI-Powered Directory Management',
    description: 'Intelligent file organization system using NLP-based keyword extraction and Sentence Transformers for automatic classification.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Transformers'],
    icon: <BrainCircuit className="w-5 h-5" />,
    links: {
      github: 'https://github.com/shivanibhoj/Ai-Powered--Directory-management-system',
      live: '#',
    },
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Categories', value: '12+' },
      { label: 'Speed', value: '3x' }
    ],
    chart: (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={directoryBarData}>
          <Bar dataKey="value" fill="#bc13fe" radius={[4, 4, 0, 0]} />
          <Tooltip contentStyle={{ backgroundColor: '#0d0d12', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
        </BarChart>
      </ResponsiveContainer>
    ),
    image: directoryImage,
    color: 'neon-purple'
  },
  {
    title: 'Spotify Streaming Data Analysis',
    description: 'Exploratory data analysis on streaming history using Pandas/NumPy. Visualized patterns with Seaborn heatmaps and histograms.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'EDA'],
    icon: <Database className="w-5 h-5" />,
    links: {
      github: 'https://github.com/shivanibhoj/Spotify--history-analysis',
      live: '#',
    },
    metrics: [
      { label: 'Tracks Analyzed', value: '850+' },
      { label: 'Avg Time', value: '3.4m' },
      { label: 'Skip Rate', value: '18%' }
    ],
    chart: (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={streamingAreaData}>
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="#00f2ff" fill="url(#colorArea)" strokeWidth={2} />
          <Tooltip contentStyle={{ backgroundColor: '#0d0d12', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
        </AreaChart>
      </ResponsiveContainer>
    ),
    image: streamingImage,
    color: 'neon-blue'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-8 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-mono text-white/30 uppercase tracking-[0.5em] mb-4">— CASE STUDIES —</p>
          <h2 className="section-title mb-0">Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="dashboard-card p-6 flex flex-col gap-6 group relative overflow-hidden"
            >
              {/* Data Pulse Effect */}
              <motion.div 
                className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Visualization Container - Optimized for full dashboard visibility */}
              <div className="w-full h-[320px] bg-black/40 rounded-xl p-2 relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-t-lg border-b border-white/5 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      project.color === 'neon-blue' ? 'bg-neon-blue' : 'bg-neon-purple'
                    }`} />
                    <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">
                      {project.video ? 'System.Live_Stream' : 'System.Data_View'}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
                  </div>
                </div>
                
                <div className="h-[265px] w-full bg-black/20 overflow-hidden rounded-b-lg flex items-center justify-center">
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full p-4">
                      {project.chart}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{project.title.toLowerCase().replace(/ /g, '-')}.dashboard</span>
                    <span className="text-[10px] font-mono text-white/20">Mar 25</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-[#D1F7FF] group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <p className="text-xl font-display font-bold text-[#D1F7FF]">{m.value}</p>
                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40 font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex gap-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" className="flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white transition-colors">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a href={project.links.linkedin} target="_blank" className="flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white transition-colors">
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
