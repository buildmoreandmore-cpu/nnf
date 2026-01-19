
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ScoutDemoProps {
  onClose: () => void;
}

export const ScoutDemo: React.FC<ScoutDemoProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0); // 0: input, 1: scanning, 2: results

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setStep(1);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        You are Next New Face, a high-fashion AI discovery agent. 
        The user wants to find talent with this description: "${query}".
        
        Write a brief, sophisticated report of what you found on social media (mock results).
        Format the response in 3 brief sections:
        1. STRATEGIC OVERVIEW: Briefly describe the market landscape for this look.
        2. TOP PROSPECTS: List 2 mock names and their handles (e.g., @user_name) and why they have "the look".
        3. DISCOVERY METRIC: Give a "Potential Score" out of 100.
        
        Keep the tone professional, editorial, and tech-forward. 
        Use markdown for styling. 
        Maximum 200 words.
      `;

      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(res.text || 'Unable to analyze currently. Please try again.');
      setStep(2);
    } catch (error) {
      console.error(error);
      setResponse("Our neural network is processing a high volume of fashion data. Please try again in a moment.");
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl h-full bg-zinc-950 border-l border-white/10 shadow-2xl flex flex-col animate-slide-left">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div>
            <h2 className="font-editorial text-2xl italic">Discovery Terminal</h2>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Experimental AI Search</p>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {step === 0 && (
            <div className="space-y-8">
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Enter your current scouting criteria. Our AI will simulate a global scan across 250M+ social profiles.
              </p>
              
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Search Parameters</label>
                  <textarea 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. 16-19 year old girl, 5'10+, strong jawline, based in Berlin or Copenhagen, minimal social presence..."
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-zinc-700"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-accent text-white rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                >
                  Initiate Global Scan
                </button>
              </form>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-2xl">
                  <div className="text-zinc-600 text-[10px] uppercase font-bold mb-1">Status</div>
                  <div className="text-green-500 text-xs font-mono uppercase">System Active</div>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <div className="text-zinc-600 text-[10px] uppercase font-bold mb-1">Latency</div>
                  <div className="text-white text-xs font-mono uppercase">12ms</div>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="w-16 h-16 border-4 border-zinc-800 border-t-accent rounded-full animate-spin"></div>
              <p className="text-accent text-xs font-mono uppercase tracking-[0.4em] animate-pulse">Scanning Social Fabric...</p>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest max-w-[200px]">Analyzing bone structure and engagement patterns</p>
            </div>
          )}

          {step === 2 && response && (
            <div className="space-y-8 animate-fade-in">
              <div className="glass p-6 rounded-3xl border-accent/20">
                <div className="prose prose-invert prose-sm">
                  {response.split('\n').map((line, i) => (
                    <p key={i} className="text-zinc-300 text-sm mb-4 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setStep(0)}
                className="w-full py-4 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                New Search
              </button>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-white/5 bg-black/20">
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest text-center">
            Secured by Next New Face Neural Network v4.2.0
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
