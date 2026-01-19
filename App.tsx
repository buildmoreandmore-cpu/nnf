
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonial } from './components/Testimonial';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ScoutDemo } from './components/ScoutDemo';

const App: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Header onOpenDemo={() => setShowDemo(true)} />
      
      <main>
        <Hero onOpenDemo={() => setShowDemo(true)} />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Testimonial />
        <Pricing onOpenDemo={() => setShowDemo(true)} />
      </main>

      <Footer />

      {/* Interactive AI Scout Demo Sidebar/Modal */}
      {showDemo && <ScoutDemo onClose={() => setShowDemo(false)} />}
    </div>
  );
};

export default App;
