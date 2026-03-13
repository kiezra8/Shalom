// Build Trigger: 2026-03-13T16:48
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, Target, Phone, MessageCircle, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import PendingProjects from './components/PendingProjects';
import Leadership from './components/Leadership';
import FounderStory from './components/FounderStory';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const phoneNumber = "+25677873936";
  
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-[3rem] p-10 max-w-sm w-full shadow-2xl overflow-hidden border border-gray-100"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <X size={20} />
        </button>
        
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary-100 rounded-[2rem] flex items-center justify-center text-primary-600 mx-auto mb-6">
            <Heart size={40} fill="currentColor" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Partner With Us</h3>
          <p className="text-gray-500 text-sm mt-3 font-medium">Connect directly to legacy donor support.</p>
        </div>

        <div className="space-y-4">
          <a 
            href={`https://wa.me/${phoneNumber.replace('+', '')}`}
            className="flex items-center justify-center gap-3 w-full py-6 bg-[#25D366] text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-green-500/20"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-3 w-full py-6 bg-gray-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-black/20"
          >
            <Phone size={20} /> Call Direct
          </a>
        </div>
        
        <p className="text-[10px] text-gray-400 text-center uppercase font-bold tracking-[0.3em] mt-10">
          SHALOM INITIATIVE • +256 778 73936
        </p>
      </motion.div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openContact = () => setIsContactOpen(true);

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
            <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2 italic">SHALOM</span>
            <div className="w-32 h-1.5 bg-primary-400 rounded-full" />
            <span className="text-xs font-black tracking-[0.5em] uppercase mt-4 text-primary-400">Uganda</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
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
              <Hero onCtaClick={openContact} />
              <ImpactSection openContact={openContact} />
              <Leadership />
              <PendingProjects openContact={openContact} />
              <FounderStory />
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
              <ImpactSection openContact={openContact} />
              <FounderStory />
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
              <PendingProjects openContact={openContact} />
              <FounderStory />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 z-50 md:hidden pb-6 px-8 flex justify-between items-center h-24 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'home' ? 'text-primary-900 scale-110' : 'text-gray-400'}`}
        >
          <Home size={24} weight={activeTab === 'home' ? 'fill' : 'regular'} />
          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('impact')}
          className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'impact' ? 'text-primary-900 scale-110' : 'text-gray-400'}`}
        >
          <Heart size={24} />
          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Impact</span>
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'projects' ? 'text-primary-900 scale-110' : 'text-gray-400'}`}
        >
          <Target size={24} />
          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Pending</span>
        </button>
        <button 
          onClick={openContact}
          className="flex flex-col items-center gap-1.5 text-red-500"
        >
          <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white -mt-12 shadow-2xl shadow-red-500/30 border-4 border-white transform active:scale-90 transition-transform">
            <Heart size={28} fill="currentColor" />
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] mt-1">Support</span>
        </button>
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <footer className="py-16 bg-white text-center border-t border-gray-50 pb-36 md:pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-6">SHALOM <span className="text-primary-600">UGANDA</span></h2>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.5em] mb-8">Educate • Empower • Illuminate</p>
            <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12 opacity-30" />
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.1em] opacity-60">© 2025 ALL RIGHTS RESERVED • Handcrafted for the Legacy of Pr. Tibarokoka Clement</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
