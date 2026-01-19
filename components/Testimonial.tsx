
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-navy px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-accent text-5xl font-editorial mb-8 block leading-none">“</span>
        <blockquote className="font-editorial text-3xl md:text-5xl italic leading-tight text-white mb-10">
          Next New Face found three of our biggest new faces in the first two weeks. We would have never discovered a farm girl from North Dakota without this tool. It's the industry's best kept secret.
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent">
            <img 
              src="https://picsum.photos/seed/fashionbooker/100/100?grayscale" 
              alt="Booker Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <cite className="not-italic">
            <span className="block text-white font-bold uppercase tracking-widest text-xs">Marcello Rossi</span>
            <span className="block text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Head of Scouting, Elite Models New Faces</span>
          </cite>
        </div>
      </div>
    </section>
  );
};
