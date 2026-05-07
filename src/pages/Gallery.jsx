import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useData } from '../context/DataContext';

const Gallery = () => {
  const { gallery } = useData();
  const [activeTab, setActiveTab] = useState('finished');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImages = activeTab === 'video' 
    ? gallery.filter(img => img.type === 'video')
    : gallery.filter(img => img.category === activeTab);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-4 text-white">Property Gallery</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore the exquisite beauty and ongoing development of CUOMO Luxury Apartments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-light min-h-screen">
        <div className="container-custom">
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('finished')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${activeTab === 'finished' ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/30' : 'border-slate-300 text-slate-500 hover:border-secondary hover:text-secondary'}`}
            >
              Finished Building
            </button>
            <button 
              onClick={() => setActiveTab('construction')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${activeTab === 'construction' ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/30' : 'border-slate-300 text-slate-500 hover:border-secondary hover:text-secondary'}`}
            >
              Construction Process
            </button>
            <button 
              onClick={() => setActiveTab('video')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${activeTab === 'video' ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/30' : 'border-slate-300 text-slate-500 hover:border-secondary hover:text-secondary'}`}
            >
              Video Gallery
            </button>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeImages.map((img, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer h-80"
                onClick={() => openLightbox(i)}
              >
                {img.type === 'video' ? (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                    <Play className="text-white z-20" size={48} />
                  </div>
                ) : (
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-30">
                  <h3 className="text-white text-xl font-bold font-serif">{img.title}</h3>
                  <p className="text-slate-300 text-sm">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]">
              <X size={40} />
            </button>
            
            <button onClick={() => setCurrentIndex((currentIndex - 1 + activeImages.length) % activeImages.length)} className="absolute left-8 text-white/50 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-sm transition-all hover:bg-white/20 z-[110]">
              <ChevronLeft size={32} />
            </button>

            <div className="max-h-[85vh] max-w-[90vw] flex items-center justify-center relative">
              {activeImages[currentIndex].type === 'video' ? (
                <video 
                  src={activeImages[currentIndex].src} 
                  controls 
                  autoPlay 
                  className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
                />
              ) : (
                <img src={activeImages[currentIndex].src} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" />
              )}
              
              <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white">
                <h3 className="text-2xl font-serif">{activeImages[currentIndex].title}</h3>
              </div>
            </div>

            <button onClick={() => setCurrentIndex((currentIndex + 1) % activeImages.length)} className="absolute right-8 text-white/50 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-sm transition-all hover:bg-white/20 z-[110]">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
