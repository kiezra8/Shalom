// Build Trigger: 2026-03-13T16:15
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import PendingProjects from './components/PendingProjects';
import { Heart } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-primary-900 z-[200] flex flex-col items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-6">
            <span className="text-4xl md:text-6xl font-black tracking-tighter mb-2">SHALOM</span>
            <div className="w-24 h-1 bg-primary-400 rounded-full" />
            <span className="text-xs font-black tracking-[0.4em] uppercase mt-4 text-primary-400">Uganda</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.2em] opacity-60"
          >
            Educate • Empower • Illuminate
          </motion.p>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 border-4 border-white/10 rounded-[4rem]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 border-4 border-white/5 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onCtaClick={() => setActiveTab('projects')} />
              <ImpactSection />
              <PendingProjects />
            </motion.div>
          )}

          {activeTab === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-20"
            >
              <ImpactSection />
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-20"
            >
              <PendingProjects />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black tracking-tight mb-6">SHALOM <span className="text-primary-500">INITIATIVE</span></h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Dedicated to providing quality education, nutrition, and digital empowerment to every child in rural Uganda. Join our journey of transformation.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-primary-500">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Our Vision</button></li>
                <li><button onClick={() => setActiveTab('impact')} className="hover:text-white transition-colors">Impact Stories</button></li>
                <li><button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors">Support Projects</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-primary-500">Connect</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="tel:+256700000000" className="hover:text-white transition-colors">+256 700 000 000</a></li>
                <li><a href="mailto:info@shalom.org" className="hover:text-white transition-colors">info@shalom.org</a></li>
                <li><span className="block">Wakiso, Uganda</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              © 2025 SHALOM INITIATIVE UGANDA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] block">Handcrafted for impact</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
