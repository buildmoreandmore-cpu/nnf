
import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-editorial text-4xl md:text-6xl mb-8 italic">
            Stop Scrolling. <br />
            <span className="not-italic text-zinc-500">Start Scouting.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
            The traditional way of scouting is broken. Thousands of man-hours are wasted manually scrolling through hashtags, hoping to find a "diamond in the rough." 
          </p>
          <div className="space-y-4">
            {[
              "Missed talent because of time zone differences",
              "Relying on luck and manual discovery",
              "Inefficient outreach to already signed models",
              "Inconsistent data on physical attributes"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-zinc-500">
                <span className="text-red-900/50">✕</span>
                <span className="text-sm font-light uppercase tracking-widest">{point}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl group-hover:bg-accent/40 transition-colors"></div>
          <h3 className="text-2xl font-editorial italic mb-6">The Next New Face Advantage</h3>
          <p className="text-zinc-400 mb-8 font-light">
            We use computer vision and predictive analytics to identify individuals with model-grade characteristics across Instagram and TikTok before they enter the industry.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center mt-1">
                <span className="text-[10px]">✓</span>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Predictive Potential Score</h4>
                <p className="text-zinc-500 text-xs">AI analysis of bone structure, symmetry, and marketability.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center mt-1">
                <span className="text-[10px]">✓</span>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Unsigned Filtering</h4>
                <p className="text-zinc-500 text-xs">Proprietary logic detects if a talent is already represented by competitors.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center mt-1">
                <span className="text-[10px]">✓</span>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Global 24/7 Scanning</h4>
                <p className="text-zinc-500 text-xs">Our scouts never sleep, covering every timezone and niche community.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
