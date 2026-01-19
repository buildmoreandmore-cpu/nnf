
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Look",
      desc: "Define your requirements: height, age, location, and 'look' type (editorial, commercial, high fashion).",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: "02",
      title: "AI Analysis",
      desc: "Next New Face scans millions of profiles hourly, scoring candidates based on your agency's historical signing success.",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: "03",
      title: "Sign Talent",
      desc: "Review scored portfolios, check authenticity metrics, and reach out directly with one-click templates.",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-editorial text-4xl md:text-6xl mb-6 italic">The Discovery Engine</h2>
          <p className="text-zinc-500 font-light max-w-xl mx-auto uppercase tracking-widest text-xs">Transforming intuition into a scalable data-driven pipeline.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="relative overflow-hidden aspect-[3/4] rounded-2xl mb-8">
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 font-editorial text-4xl text-white/50">{step.number}</div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
