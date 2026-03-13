import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, BarChart2, Home, ChevronRight } from 'lucide-react';

const Header = ({ onTabChange, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'impact', label: 'Our Impact', icon: BarChart2 },
    { id: 'projects', label: 'Pending Projects', icon: Heart, badge: true },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-md py-2' 
            : 'bg-white/10 backdrop-blur-md border-b border-white/10 py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={() => setIsOpen(true)}
            className={`p-2 rounded-full transition-colors ${
              scrolled ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/20 text-white'
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div 
            className="cursor-pointer text-center group"
            onClick={() => onTabChange('home')}
          >
            <h1 className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SHALOM
            </h1>
            <span className={`text-[9px] font-black tracking-[0.4em] uppercase block transition-colors ${
              scrolled ? 'text-primary-600' : 'text-primary-400'
            }`}>
              Uganda
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button 
              onClick={() => onTabChange('impact')}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/20 text-white'
              }`}
            >
              <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => onTabChange('projects')}
              className={`p-2 rounded-full transition-colors relative ${
                scrolled ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/20 text-white'
              }`}
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[210]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[220] transition-transform duration-500 ease-[0.16, 1, 0.3, 1] transform shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 border-b flex items-center justify-between">
          <div>
            <span className="font-black text-2xl tracking-tighter block leading-none">SHALOM</span>
            <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.3em] mt-1 block">Uganda</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all active:scale-90">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-6 py-5 rounded-[1.5rem] transition-all ${
                activeTab === item.id 
                  ? 'bg-primary-900 text-white shadow-xl shadow-primary-900/20' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-5">
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-primary-400' : 'text-gray-400'}`} />
                <span className="font-black uppercase tracking-widest text-[11px]">{item.label}</span>
              </div>
              {item.badge && activeTab !== item.id && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === item.id ? 'translate-x-1' : 'opacity-20'}`} />
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-8 border-t bg-gray-50/50">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mb-6">Our Legacy</p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                 <Home className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-[11px] font-black uppercase text-gray-400">Wakiso, Uganda</p>
                  <p className="text-sm font-bold text-gray-900">Education Hub</p>
               </div>
             </div>
             <p className="text-[10px] text-gray-400 mt-8 uppercase tracking-[0.2em] font-bold">© 2025 Shalom Initiative</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
