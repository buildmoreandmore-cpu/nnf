
import React from 'react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Desaturation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920" 
          alt="Fashion portrait"
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full backdrop-blur-sm">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-white/70">
            Precision Talent Discovery Platform
          </span>
        </div>
        
        <h1 className="font-editorial text-5xl md:text-8xl lg:text-9xl mb-8 leading-[1] tracking-tight text-white italic">
          Find the Next New Face <span className="block not-italic text-white/90">Before Anyone Else</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-light">
          Next New Face scans millions of profiles to find unsigned talent with model potential — so your agency can reach them first.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]"
          >
            Start Discovering
          </button>
          <button className="w-full sm:w-auto glass text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
            See How it Works
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-10">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/${i + 20}/100/100?grayscale`} 
                className="w-10 h-10 rounded-full border-2 border-black" 
                alt="Discovered model"
              />
            ))}
          </div>
          <p className="text-zinc-500 text-sm font-light">
            <span className="text-white font-medium">500+</span> models discovered this month
          </p>
        </div>
      </div>
    </section>
  );
};
