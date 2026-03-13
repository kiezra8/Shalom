import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: "Founder Name",
    role: "Visionary & Founder",
    image: "/Shalompics/IMG-20251211-WA0000.jpg",
    bio: "Dedicated to transforming lives through education and community empowerment."
  },
  {
    name: "Headmaster Name",
    role: "Head of School",
    image: "/Shalompics/IMG-20251211-WA0002.jpg",
    bio: "Ensuring academic excellence and character development for every student at Shalom."
  }
];

const Leadership = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-black text-[10px] uppercase tracking-[0.4em]">The Hearts Behind Shalom</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 uppercase italic tracking-tighter">Our Leadership</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden premium-shadow group border border-gray-100 p-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase italic mb-1">{leader.name}</h3>
                  <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-gray-500 leading-relaxed italic border-l-2 border-gray-200 pl-4">"{leader.bio}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
