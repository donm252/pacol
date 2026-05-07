import { motion } from 'framer-motion';
import { Target, Eye, Award, Gem } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-4 text-white">About Pacol Properties</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted partner in luxury real estate development in Nigeria.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3"></div>
              <img src="/b.png" alt="Company Overview" className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">Who We Are</h2>
              <h3 className="text-4xl font-serif text-primary mb-6">PACOL PROPERTIES LIMITED</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                We are a premier real estate development company based in Lagos, Nigeria. We specialize in creating high-end, luxury residential and commercial properties that redefine modern living.
              </p>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                Our flagship project, CUOMO Luxury Apartments, embodies our commitment to quality, aesthetic brilliance, and uncompromising structural integrity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mr-4 shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Our Mission</h4>
                    <p className="text-sm text-slate-500">Delivering world-class standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mr-4 shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Our Vision</h4>
                    <p className="text-sm text-slate-500">To be the apex of luxury living.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mr-4 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Integrity</h4>
                    <p className="text-sm text-slate-500">Transparency in all dealings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mr-4 shrink-0">
                    <Gem size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Quality</h4>
                    <p className="text-sm text-slate-500">Premium materials only.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-20 bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif text-primary mb-12">Our Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Luxury Residential', 'Property Development', 'Real Estate Investment', 'Facility Management', 'Commercial Spaces'].map((tag, i) => (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm hover:shadow-md hover:border-secondary transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
