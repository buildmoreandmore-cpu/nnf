
import React from 'react';

interface PricingProps {
  onOpenDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="pricing" className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-editorial text-4xl md:text-6xl italic mb-6">Invest in the Future</h2>
          <p className="text-zinc-500 font-light text-xs uppercase tracking-[0.3em]">Scalable solutions for every agency size.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass p-10 md:p-16 rounded-[3rem] border-white/10 hover:border-accent/30 transition-colors">
            <h3 className="font-editorial text-3xl italic mb-4">Mother Agency</h3>
            <p className="text-zinc-500 text-sm mb-10 font-light">Perfect for growing agencies in secondary markets.</p>
            <div className="text-5xl font-editorial mb-10">$850 <span className="text-lg text-zinc-500 font-light not-italic">/month</span></div>
            <ul className="space-y-4 mb-12">
              {['Daily Profile Scanning', '500 Scored Leads/Mo', 'Basic CRM Features', 'Email Support'].map(t => (
                <li key={t} className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                  <span className="text-accent">●</span> {t}
                </li>
              ))}
            </ul>
            <button 
              onClick={onOpenDemo}
              className="w-full py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Request Access
            </button>
          </div>

          <div className="bg-white text-black p-10 md:p-16 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-accent text-white px-8 py-2 text-[10px] font-bold uppercase tracking-widest transform translate-x-4 translate-y-4 rotate-45 shadow-lg">
              Most Popular
            </div>
            <h3 className="font-editorial text-3xl italic mb-4">International</h3>
            <p className="text-zinc-800/70 text-sm mb-10 font-light">The standard for world-class scouting divisions.</p>
            <div className="text-5xl font-editorial mb-10">$2,400 <span className="text-lg text-zinc-800/50 font-light not-italic">/month</span></div>
            <ul className="space-y-4 mb-12">
              {['Real-time Scanning', 'Unlimited Leads', 'Full Pipeline CRM', 'Physical Attribute Extraction', 'Priority Support'].map(t => (
                <li key={t} className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
                  <span className="text-accent">●</span> {t}
                </li>
              ))}
            </ul>
            <button 
              onClick={onOpenDemo}
              className="w-full py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-2xl"
            >
              Start Discovering
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-600 text-xs font-light uppercase tracking-widest">
            Need a custom enterprise solution? <a href="#" className="text-white hover:underline">Contact our concierge team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
