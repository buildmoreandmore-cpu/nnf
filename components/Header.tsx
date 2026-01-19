
import React from 'react';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass mx-auto mt-4 max-w-7xl flex items-center justify-between px-6 py-4 rounded-full">
        <div className="flex items-center gap-2">
          <span className="font-editorial text-2xl font-bold tracking-tighter">NEXT NEW <span className="text-accent italic">FACE</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
          <a href="#features" className="hover:text-white transition-colors">Technology</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        <button 
          onClick={onOpenDemo}
          className="bg-white text-black text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-zinc-200 transition-colors"
        >
          Get Early Access
        </button>
      </div>
    </header>
  );
};
