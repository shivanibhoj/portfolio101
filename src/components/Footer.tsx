import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">Shivani Bhoj</h2>
            <p className="text-white/30 text-sm">Building the future with data and intelligence.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/shivanibhoj" target="_blank" className="text-white/40 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shivani-bhoj-510707298" target="_blank" className="text-white/40 hover:text-neon-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:Shivani.bhoj10@gmail.com" className="text-white/40 hover:text-neon-purple transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Shivani Bhoj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
