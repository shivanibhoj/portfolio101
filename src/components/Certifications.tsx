import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'Android App Development', issuer: 'LPU', date: 'Jul 2025', url: '/WhatsApp Image 2026-03-22 at 23.03.11.jpeg' },
  { name: 'Computer Networking', issuer: 'COURSERA', date: 'Nov 2024', url: '/Coursera JTCSYKAFN4FF.pdf' },
  { name: 'Cloud Computing', issuer: 'NPTEL', date: 'Sep 2025', url: '/WhatsApp Image 2026-03-22 at 19.34.06.jpeg' },
  { name: 'Data Structure and Algorithm', issuer: 'LPU', date: 'Aug 2025', url: '#' },
];

export const Certifications = () => {
  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#D1F7FF]">Professional Certs</h2>
          <p className="text-white/40 max-w-2xl mx-auto">Validating my skills through industry-recognized certifications.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 group hover:border-neon-purple/50 transition-all block overflow-hidden relative"
            >
              {/* Verification Scan Effect */}
              <motion.div 
                className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ 
                  y: ['-100%', '100%']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors relative z-10">{cert.name}</h3>
              <p className="text-white/40 text-sm mb-4 relative z-10">{cert.issuer}</p>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-white/20 uppercase tracking-widest">
                  <CheckCircle className="w-3 h-3" /> Issued {cert.date}
                </div>
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest hover:underline"
                >
                  View Cert →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
