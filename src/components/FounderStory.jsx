import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, MapPin, Stethoscope, Cross } from 'lucide-react';

const FounderStory = () => {
  return (
    <section className="py-24 bg-primary-900 overflow-hidden relative">
      {/* Decorative Background Items */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10 group">
                <img 
                  src="/daddytibs.png" 
                  alt="Pr. Tibarokoka Clement" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                   <h3 className="text-3xl font-black italic uppercase tracking-tighter">Pr. Tibarokoka Clement</h3>
                   <p className="text-primary-400 font-bold text-xs uppercase tracking-[0.3em] mt-2">Visionary & Founder</p>
                </div>
              </div>
              
              {/* Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400">Current Status</p>
                    <p className="text-sm font-black text-gray-900">Enduring with Faith</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="text-primary-400 font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">The Legacy Lives On</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none uppercase italic tracking-tighter">
                A Vision <br /> 
                <span className="text-primary-400">Beyond Limits.</span>
              </h2>

              <div className="space-y-8">
                <div className="relative">
                  <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white/5" />
                  <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic border-l-4 border-primary-500 pl-8">
                    Pr. Tibarokoka Clement is a man of remarkable layers—a dedicated Pastor and a Veterinary Doctor by profession. He walked through Northern and Western Uganda, planting seeds of faith and building multiple churches, always with one driving dream: Shalom Nursery and Primary School.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10">
                    <Cross className="w-8 h-8 text-primary-400 mb-4" />
                    <h4 className="font-black text-xs uppercase tracking-widest mb-2">Spiritual Roots</h4>
                    <p className="text-xs text-gray-400 leading-relaxed uppercase font-bold">Pioneered multiple churches across Uganda, fostering spiritual growth and community.</p>
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10">
                    <Stethoscope className="w-8 h-8 text-primary-400 mb-4" />
                    <h4 className="font-black text-xs uppercase tracking-widest mb-2">Proficiency</h4>
                    <p className="text-xs text-gray-400 leading-relaxed uppercase font-bold">A Veterinary Doctor who used his skills to heal and serve the rural population.</p>
                  </div>
                </div>

                <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 shadow-inner mt-12">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center animate-pulse">
                         <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                      <h4 className="text-lg font-black uppercase italic tracking-tight">His Current Message</h4>
                   </div>
                   <p className="text-gray-200 text-lg leading-relaxed font-medium">
                     "Though my body is currently bedridden by chronic illness, my soul remains firmly committed to the children of Shalom. My greatest wish is for this project—this beacon of light for our community—to proceed with more strength than ever before."
                   </p>
                </div>
                
                <div className="pt-10 flex flex-wrap gap-4">
                   <div className="flex items-center gap-2 px-5 py-2 bg-primary-800 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-400">
                      <MapPin size={12} /> Northern Uganda Mission
                   </div>
                   <div className="flex items-center gap-2 px-5 py-2 bg-primary-800 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-400">
                      <MapPin size={12} /> Western Uganda Churches
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
