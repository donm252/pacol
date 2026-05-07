import { motion } from 'framer-motion';
import { Sofa, Utensils, Bed } from 'lucide-react';

const VirtualTour = () => {
  return (
    <div className="w-full">
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-4 text-white">Virtual Walkthrough</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience the elegance and layout of our apartments from the comfort of your home.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-primary mb-4">360° Apartment Tour</h2>
            <p className="text-slate-600">Use your mouse or touch screen to look around the apartment.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto bg-slate-50 p-4 md:p-8 rounded-3xl shadow-2xl border border-slate-100"
          >
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-slate-200">
              {/* Replace src with actual Matterport or YouTube embed URL */}
              <iframe 
                src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                title="Virtual Tour Walkthrough" 
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Sofa size={36} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Spacious Living</h3>
              <p className="text-slate-600">Preview the generously sized living areas designed for comfort and hosting.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Utensils size={36} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fitted Kitchens</h3>
              <p className="text-slate-600">See the premium finishing, top-tier appliances, and cabinetry up close.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Bed size={36} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Luxury Bedrooms</h3>
              <p className="text-slate-600">Explore the layout of the en-suite bedrooms and built-in wardrobes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;
