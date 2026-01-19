
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-editorial text-3xl font-bold tracking-tighter mb-6">NEXT NEW <span className="text-accent italic">FACE</span></div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-light">
            The next generation of talent discovery, built for the modern fashion industry. Powered by advanced computer vision and predictive intelligence.
          </p>
        </div>
        
        <div>
          <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Platform</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Process</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Technology</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Case Studies</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">About Us</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Contact</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-[10px] font-light uppercase tracking-widest">© 2025 Next New Face Inc. All Rights Reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
          <a href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
