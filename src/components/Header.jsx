import React, { useState, useEffect } from 'react';
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
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          </button>

          <div 
            className="cursor-pointer text-center"
            onClick={() => onTabChange('home')}
          >
            <h1 className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SHALOM
            </h1>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase block transition-colors ${
              scrolled ? 'text-primary-600' : 'text-primary-200'
            }`}>
              Uganda
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => onTabChange('impact')}
              className={`p-2 hover:bg-gray-100/20 rounded-full transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <BarChart2 className="w-6 h-6" />
            </button>
            <button 
              onClick={() => onTabChange('projects')}
              className={`p-2 hover:bg-gray-100/20 rounded-full transition-colors relative ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[70] transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <span className="font-black text-xl tracking-wider">SHALOM</span>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider text-sm">{item.label}</span>
              </div>
              {item.badge && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
              <ChevronRight className="w-4 h-4 opacity-30" />
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-4">Contact Us</p>
          <div className="space-y-3">
             <a href="tel:+256700000000" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-primary-600">
               <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                 <Home className="w-4 h-4" />
               </div>
               +256 700 000 000
             </a>
             <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em]">© 2025 Shalom Initiative Uganda</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
