import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Properties = () => {
  const { properties } = useData();

  return (
    <div className="w-full">
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl font-serif mb-4 text-white"
          >
            Available Properties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Discover our curated collection of luxury real estate opportunities across Lagos.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by location, price, or property type..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition-all cursor-pointer">
                <option>Price Range</option>
                <option>Under ₦100M</option>
                <option>₦100M - ₦500M</option>
                <option>Above ₦500M</option>
              </select>
              <select className="px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition-all cursor-pointer">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Duplex</option>
                <option>Penthouse</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-light min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((prop, i) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {prop.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary font-bold shadow-md">
                      {prop.price}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <MapPin size={16} className="mr-1 text-secondary" />
                    {prop.location}
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-6 group-hover:text-secondary transition-colors">{prop.title}</h3>
                  
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                    <div className="flex flex-col items-center">
                      <Bed size={20} className="text-secondary mb-1" />
                      <span className="text-sm font-bold text-primary">{prop.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-100">
                      <Bath size={20} className="text-secondary mb-1" />
                      <span className="text-sm font-bold text-primary">{prop.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Square size={20} className="text-secondary mb-1" />
                      <span className="text-sm font-bold text-primary">{prop.area}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/contact?property=${prop.id}`} 
                    className="w-full btn-outline mt-8 py-3 text-sm flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
