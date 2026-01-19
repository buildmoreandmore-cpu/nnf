
import React from 'react';

export const SocialProof: React.FC = () => {
  const cities = ['NYC', 'PARIS', 'MILAN', 'LONDON', 'LA', 'TOKYO'];
  
  return (
    <div className="py-12 border-y border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-center text-zinc-600 mb-8">
          Trusted by top agencies in world capitals
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {cities.map(city => (
            <div key={city} className="flex flex-col items-center">
              <span className="font-editorial text-2xl md:text-3xl font-bold tracking-tighter text-white">{city}</span>
              <div className="h-[2px] w-full bg-accent mt-1 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
