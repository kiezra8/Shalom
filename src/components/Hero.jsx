import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ChevronDown } from 'lucide-react';

const slides = [
  {
    title: "Primary Excellence",
    subtitle: "Nurturing minds through balanced academic and character development.",
    icon: GraduationCap,
    image: "/Shalompics/IMG-20251211-WA0000.jpg",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10"
  },
  {
    title: "Creative Future",
    subtitle: "Hands-on skills foster independence from the earliest stages.",
    icon: BookOpen,
    image: "/Shalompics/IMG-20251211-WA0002.jpg",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10"
  },
  {
    title: "One Community",
    subtitle: "A school built for growth through deep-rooted local partnership.",
    icon: Users,
    image: "/Shalompics/IMG-20251211-WA0001.jpg",
    accent: "text-amber-500",
    bgAccent: "bg-amber-500/10"
  }
];

const Hero = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3200); // Faster slide interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-black pt-[80px] md:pt-[100px]">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:justify-center px-6 md:px-20 max-w-7xl mx-auto text-white">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                 <div className={`p-1.5 rounded-lg ${slides[currentSlide].bgAccent} backdrop-blur-md`}>
                    {React.createElement(slides[currentSlide].icon, { className: `w-4 h-4 ${slides[currentSlide].accent}` })}
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-80">SHALOM MISSION</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black mb-4 leading-none tracking-tighter uppercase italic">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className="block last:text-gray-300">
                        {word} 
                    </span>
                ))}
              </h1>
              
              <p className="text-sm md:text-base text-gray-100 font-medium mb-8 leading-relaxed max-w-sm">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={onCtaClick}
                  className="px-8 py-3.5 bg-white text-gray-900 rounded-full font-black uppercase tracking-widest text-[9px] hover:bg-primary-600 hover:text-white transition-all active:scale-95"
                >
                  Join Us
                </button>
                <div className="flex gap-1.5">
                    {slides.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'}`} 
                        />
                    ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-white opacity-40" />
      </motion.div>
    </section>
  );
};

export default Hero;
