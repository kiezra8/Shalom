import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Heart, Users, Landmark, BookOpen, Play } from 'lucide-react';
import { impactProjects } from '../data/projects';

const ImpactSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="impact" className="bg-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Empowering the Future
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            Measurable Change, <br />
            <span className="text-primary-600">Infinite Potential.</span>
          </motion.h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our projects are designed to create sustainable, long-term impact by addressing the root causes of poverty.
          </p>
        </div>

        {/* Impact List - Full width items for vertical scroll prominence */}
        <div className="space-y-12 mb-24">
          {impactProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden premium-shadow transition-all duration-500 hover:ring-2 hover:ring-primary-500/20 border border-gray-100 flex flex-col md:flex-row min-h-[60vh]">
                <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="px-3 py-1 bg-primary-50 rounded-lg text-primary-600 text-[10px] font-black uppercase tracking-widest border border-primary-100">
                      PROJECT {index + 1}
                    </span>
                    <Heart className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-primary-600 transition-colors uppercase italic tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10 overflow-hidden text-ellipsis">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-widest group/btn">
                      Explore Impact <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Feature Video Impact - MOVED TO LAST ITEM */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black rounded-[2.5rem] premium-shadow group border border-gray-900"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="/Shalompics/VID-20251224-WA0030.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="relative z-10 text-center px-4 max-w-4xl">
               <span className="text-primary-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Archive Mission</span>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">See Our Journey <br /> in Motion.</h2>
               <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">Witness the daily transformation happening on the ground in rural Uganda through our visual documentary.</p>
               <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white font-black uppercase text-[10px] tracking-widest">
                  <Play className="text-white w-4 h-4 fill-white" /> Live Footage
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-gray-100 hover:bg-black hover:text-white text-gray-900 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  className="w-full h-full object-cover" 
                  alt={selectedProject.title}
                />
              </div>
              
              <div className="w-full md:w-1/2 p-10 md:p-20 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-white">
                      <BookOpen size={28} />
                   </div>
                   <div>
                      <span className="text-gray-400 font-black text-xs uppercase tracking-[0.3em] block mb-1">Impact Detail</span>
                      <h4 className="font-bold text-black text-sm uppercase tracking-wide">SHALOM INITIATIVE</h4>
                   </div>
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight italic uppercase tracking-tighter">{selectedProject.title}</h2>
                
                <div className="space-y-10">
                  <p className="text-gray-500 text-xl leading-relaxed italic border-l-4 border-black pl-6">
                    "{selectedProject.description}"
                  </p>
                  
                  <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-inner">
                    <h4 className="font-black text-xs uppercase tracking-[0.2em] text-black mb-6 flex items-center gap-2">
                       <Landmark size={14} /> Mission Philosophy
                    </h4>
                    <p className="text-gray-900 text-lg leading-relaxed font-medium">
                      {selectedProject.details}
                    </p>
                  </div>

                  <button className="w-full py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all transform active:scale-95 shadow-xl shadow-black/20">
                    Partner With This Impact
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactSection;
