// Build Trigger: 2026-03-13T16:30
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, Target, Phone, MessageCircle, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import PendingProjects from './components/PendingProjects';
import Leadership from './components/Leadership';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const phoneNumber = "+25677873936";
  
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <X size={20} />
        </button>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
            <Heart size={32} />
          </div>
          <h3 className="text-2xl font-black text-gray-900 uppercase italic">Partner With Us</h3>
          <p className="text-gray-500 text-sm mt-2">Connect directly with our leadership to support our mission.</p>
        </div>

        <div className="space-y-4">
          <a 
            href={`https://wa.me/${phoneNumber.replace('+', '')}`}
            className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-green-500/20"
          >
            <MessageCircle size={18} /> WhatsApp Message
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-3 w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-black/20"
          >
            <Phone size={18} /> Direct Call
          </a>
        </div>
        
        <p className="text-[10px] text-gray-400 text-center uppercase font-bold tracking-widest mt-8">
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
            <span className="text-4xl md:text-6xl font-black tracking-tighter mb-2">SHALOM</span>
            <div className="w-24 h-1 bg-primary-400 rounded-full" />
            <span className="text-xs font-black tracking-[0.4em] uppercase mt-4 text-primary-400">Uganda</span>
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
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 z-50 md:hidden pb-4 px-6 flex justify-between items-center h-20">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary-600' : 'text-gray-400'}`}
        >
          <Home size={22} weight={activeTab === 'home' ? 'fill' : 'regular'} />
          <span className="text-[9px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('impact')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'impact' ? 'text-primary-600' : 'text-gray-400'}`}
        >
          <Heart size={22} />
          <span className="text-[9px] font-black uppercase tracking-widest">Impact</span>
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'projects' ? 'text-primary-600' : 'text-gray-400'}`}
        >
          <Target size={22} />
          <span className="text-[9px] font-black uppercase tracking-widest">Pending</span>
        </button>
        <button 
          onClick={openContact}
          className="flex flex-col items-center gap-1 text-red-500"
        >
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white -mt-10 shadow-lg shadow-red-500/30 border-4 border-white">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">Support</span>
        </button>
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Small Clean Sub-footer */}
      <footer className="py-12 bg-gray-50 text-center border-t border-gray-100 pb-32 md:pb-12">
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-4">Shalom Initiative Uganda</p>
          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest tracking-widest">© 2025 ALL RIGHTS RESERVED • EDUCATE. EMPOWER. ILLUMINATE.</p>
      </footer>
    </div>
  );
};

export default App;
