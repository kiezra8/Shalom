import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Users, BookOpen } from 'lucide-react';

const slides = [
  {
    title: "Holistic Primary Education",
    subtitle: "Nurturing young minds through a curriculum that balances academic excellence with character development.",
    icon: GraduationCap,
    image: "/Shalompics/IMG-20251211-WA0000.jpg",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10"
  },
  {
    title: "Skills for Independence",
    subtitle: "Going beyond books to teach hands-on creative and motor skills from an early age.",
    icon: BookOpen,
    image: "/Shalompics/IMG-20251211-WA0002.jpg",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10"
  },
  {
    title: "Community Roots",
    subtitle: "A school built for the community, by the community—fostering deep ties and shared growth.",
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-white">
      {/* Immersive Image Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* SHEIN-style Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto text-white">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                 <div className={`p-2 rounded-lg ${slides[currentSlide].bgAccent} backdrop-blur-md border border-white/10`}>
                    {React.createElement(slides[currentSlide].icon, { className: `w-5 h-5 ${slides[currentSlide].accent}` })}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-80 border-l border-white/20 pl-4">
                    SHALOM ACADEMY
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className="block last:text-gray-400">
                        {word} 
                    </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-100 font-medium mb-10 leading-relaxed max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={onCtaClick}
                  className="group relative w-full sm:w-auto px-12 py-5 bg-white text-gray-900 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:bg-primary-600 hover:text-white active:scale-95"
                >
                  <span className="relative z-10">Discover More</span>
                </button>
                
                {/* SHEIN-style Dots */}
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setCurrentSlide(i)}
                          className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'}`} 
                        />
                    ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
         <div className="rotate-90 origin-right text-[10px] font-black uppercase tracking-[1em] text-white opacity-20">
            ELIVATE • EMPOWER • EDUCATE
         </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white opacity-40" />
      </motion.div>
    </section>
  );
};

export default Hero;
