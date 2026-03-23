import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Send, MessageSquare, Shield, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="dashboard-card p-8">
              <h2 className="text-3xl font-display font-bold mb-6 text-[#D1F7FF]">System Inquiry</h2>
              <p className="text-white/40 mb-8 leading-relaxed">
                Initiate a connection request for collaborations, technical inquiries, or professional opportunities.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: 'Primary Email', value: 'Shivani.bhoj10@gmail.com', href: 'mailto:Shivani.bhoj10@gmail.com' },
                  { icon: <Linkedin size={18} />, label: 'LinkedIn Profile', value: 'shivani-bhoj-510707298', href: 'https://www.linkedin.com/in/shivani-bhoj-510707298' },
                  { icon: <Github size={18} />, label: 'GitHub Repository', value: 'shivanibhoj', href: 'https://github.com/shivanibhoj' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neon-blue group-hover:neon-glow-blue transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate max-w-[200px]">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="dashboard-card p-6 flex items-center gap-4 border-emerald-500/10 bg-emerald-500/5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-xs font-display font-bold text-white">Secure Channel</p>
                <p className="text-[10px] text-white/30 uppercase">End-to-end encrypted</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="dashboard-card p-8 md:p-12 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 z-50 bg-dark-bg/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Transmission Successful</h3>
                  <p className="text-white/40 font-mono text-sm tracking-widest">MESSAGE_ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-xs font-mono text-neon-blue uppercase tracking-[0.3em] hover:text-white transition-colors"
                  >
                    [ Send Another ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3 mb-10">
              <MessageSquare className="text-neon-blue" size={24} />
              <h3 className="text-2xl font-display font-bold text-[#D1F7FF]">New Message</h3>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Sender Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-blue transition-all text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-blue transition-all text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Message Payload</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Describe your inquiry or project details..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-blue transition-all text-sm resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-6">
                <p className="text-[10px] font-mono text-white/20 max-w-[200px]">
                  By sending, you agree to the processing of your data for communication purposes.
                </p>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="px-10 py-4 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center gap-3 hover:neon-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit'} <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
