import { motion } from 'framer-motion';
import { Building2, Shield, BatteryCharging, Droplets, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/b.png')" }}
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              PACOL PROPERTIES
            </h1>
            <p className="text-xl md:text-2xl text-secondary uppercase tracking-[0.2em] mb-8 font-light">
              Premium Living Experience in Lekki
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-12 font-light">
              Exquisitely designed 2-bedroom apartments with premium finishes and world-class amenities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Schedule a Tour
              </Link>
              <Link to="/virtual-tour" className="btn-outline border-white text-white hover:border-secondary w-full sm:w-auto">
                Virtual Tour
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6">
              <div className="text-3xl font-serif text-secondary mb-2">2</div>
              <div className="text-sm uppercase tracking-wider text-slate-200">Bedrooms</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-serif text-secondary mb-2">2026</div>
              <div className="text-sm uppercase tracking-wider text-slate-200">Delivery Year</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-serif text-secondary mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider text-slate-200">Security & Power</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-serif text-secondary mb-2">C of O</div>
              <div className="text-sm uppercase tracking-wider text-slate-200">Title Document</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-primary mb-6">Premium Amenities</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">Experience luxury living with our thoughtfully designed features that cater to your modern lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Building2 />, title: 'Modern Architecture', desc: 'Elegant designs with premium POP ceilings' },
              { icon: <Shield />, title: 'CCTV Security', desc: '24/7 surveillance and gated access' },
              { icon: <BatteryCharging />, title: '24/7 Power', desc: 'Uninterrupted power supply' },
              { icon: <Droplets />, title: 'Treated Water', desc: 'Constant supply of clean water' },
              { icon: <MapPin />, title: 'Prime Location', desc: 'Heart of Lekki Phase 1' }
            ].map((amenity, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 group"
              >
                <div className="w-16 h-16 bg-primary/5 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{amenity.title}</h3>
                <p className="text-slate-600">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section with Asymmetric Layout */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-secondary/10 -translate-x-6 translate-y-6 rounded-2xl"></div>
              <img src="/wa.jpeg" alt="Luxury Interior" className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-serif text-primary mb-6">Exquisite Design & Premium Finishes</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                CUOMO Luxury Apartments offer meticulously designed living spaces with attention to every detail. From stamped floors to built-in wardrobes, every element exudes elegance.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Luxury finishing throughout each unit',
                  'Premium quality materials and fittings',
                  'Built-in wardrobes in all bedrooms',
                  'Alluring lighting design enhancing ambiance',
                  'Water heaters in all bathrooms'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-4 text-secondary shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="flex items-center text-primary font-bold hover:text-secondary transition-colors">
                <Download className="mr-2" /> Download Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-32"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-white mb-6">Flexible Payment Plan</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-slate-300">Own your dream apartment with our convenient payment options tailored for your comfort.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -10 }} className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary mb-4">20% Down Payment</h3>
              <p className="text-slate-300 mb-8">Secure your apartment with an initial deposit and spread the remaining balance comfortably.</p>
              <ul className="space-y-4 mb-10 text-white">
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> 20% initial deposit</li>
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> Balance spread over 24 months</li>
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> No hidden charges</li>
              </ul>
              <Link to="/contact" className="btn-primary w-full block text-center">Reserve Now</Link>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary mb-4">Installment Plan</h3>
              <p className="text-slate-300 mb-8">Flexible payment structure with manageable installments until project completion.</p>
              <ul className="space-y-4 mb-10 text-white">
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> 30% initial deposit</li>
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> Monthly installments over 18 months</li>
                <li className="flex items-center"><Shield className="w-5 h-5 mr-3 text-secondary"/> Price lock guarantee</li>
              </ul>
              <Link to="/contact" className="btn-primary w-full block text-center">Reserve Now</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
