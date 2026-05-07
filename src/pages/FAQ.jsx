import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the delivery date for CUOMO Luxury Apartments?",
      a: "The scheduled delivery date for CUOMO Luxury Apartments is February 2026. We are currently on track with our construction timeline."
    },
    {
      q: "What title document comes with the property?",
      a: "The property comes with a Certificate of Occupancy (C of O), ensuring your investment is 100% secure and legally backed."
    },
    {
      q: "Are there flexible payment plans available?",
      a: "Yes, we offer flexible payment plans. You can secure an apartment with a 20% or 30% initial deposit and spread the remaining balance over 18 to 24 months depending on the plan you choose."
    },
    {
      q: "Will the apartments come fully finished?",
      a: "Yes, all apartments are delivered fully finished. This includes modern POP ceilings, fitted kitchens with appliances, premium sanitary wares, built-in wardrobes, stamped floors, and alluring lighting."
    },
    {
      q: "What amenities are included in the estate?",
      a: "The estate features 24-hour power supply, CCTV surveillance, treated water supply, a fitness gym, ample parking space, and professional facility management."
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-4 text-white">Frequently Asked Questions</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about buying an apartment at CUOMO Luxury Apartments.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-light min-h-screen">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg text-primary pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 text-secondary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-slate-600 border-t border-slate-50 pt-4 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a href="/contact" className="btn-outline">Contact Us Directly</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
