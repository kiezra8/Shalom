import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, ArrowUpRight } from 'lucide-react';
import { pendingProjects } from '../data/projects';

const PendingProjects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4 py-32">
        <div className="text-center max-w-2xl mx-auto mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-black text-[10px] uppercase tracking-[0.4em] rounded-full mb-6 border border-red-200"
          >
            Immediate Opportunities
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">OUR PENDING <br /><span className="text-red-500">MISSIONS.</span></h2>
          <p className="text-gray-500 text-xl font-medium">
            These vital initiatives are currently waiting for full funding. Your active partnership moves the needle from "Pending" to "Completed."
          </p>
        </div>

        {/* Stacked full-width cards for vertical prominence */}
        <div className="space-y-24">
          {pendingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[4rem] overflow-hidden border border-gray-100 premium-shadow flex flex-col min-h-[70vh]"
            >
              <div className="relative h-96 md:h-[60vh] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-10 left-10">
                  <span className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl ${
                    project.status === 'In Progress' ? 'bg-amber-500 text-white' : 
                    project.status === 'Near Completion' ? 'bg-emerald-500 text-white' : 
                    'bg-indigo-600 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-4xl md:text-6xl font-black uppercase mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-gray-200 text-lg max-w-xl opacity-90">{project.description}</p>
                </div>
              </div>
              
              <div className="p-12 md:p-20 flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                  <div className="space-y-12">
                     <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-black uppercase tracking-widest text-gray-400">Funding Milestones</span>
                            <span className="text-xl font-black text-primary-600">{project.progress}% Complete</span>
                        </div>
                        <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-10 py-10 border-y border-gray-100">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-primary-600">
                                <Target size={32} />
                            </div>
                            <div>
                                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Total Needed</span>
                                <span className="text-3xl font-black text-gray-900">{project.needed}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-red-500">
                                <Clock size={32} />
                            </div>
                            <div>
                                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Criticality</span>
                                <span className="text-3xl font-black text-gray-900">Urgently Required</span>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <button className="w-full flex items-center justify-center gap-4 py-8 bg-gray-900 hover:bg-primary-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-primary-600/30">
                        Fully Sponsor This Mission <ArrowUpRight className="w-6 h-6" />
                    </button>
                    <button className="w-full flex items-center justify-center gap-4 py-8 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all">
                        Request Project Brief
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PendingProjects;
