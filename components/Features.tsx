
import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Multi-Platform Scouting",
      desc: "Unified pipeline for discovery across Instagram, TikTok, and emerging platforms.",
      icon: "🌐"
    },
    {
      title: "Deep Authenticity Score",
      desc: "Analyze engagement rates and bot activity to ensure talent has real influence.",
      icon: "🛡️"
    },
    {
      title: "Attribute Extraction",
      desc: "Automatically estimate height, build, and skin tones from multiple images.",
      icon: "📏"
    },
    {
      title: "CRM Integration",
      desc: "Manage your scouting funnel from first contact to signed contract.",
      icon: "📊"
    },
    {
      title: "One-Click Outreach",
      desc: "Personalized DM and email templates designed to convert.",
      icon: "✉️"
    },
    {
      title: "Historical Context",
      desc: "Compare new faces against your agency's past 10 years of successful signings.",
      icon: "🕰️"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Technology</span>
            <h2 className="font-editorial text-4xl md:text-6xl italic">Intelligence at Scale</h2>
          </div>
          <p className="max-w-md text-zinc-500 font-light italic leading-relaxed">
            We don't just find people. We find the specific people who will build your agency's next decade of success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:bg-white/[0.05] transition-colors border-white/5 group">
              <div className="text-3xl mb-6 group-hover:scale-125 transition-transform duration-500 block w-fit">{f.icon}</div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
