import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

const Progress = () => {
  const { progress } = useData();

  const getStatusInfo = (status) => {
    switch (status) {
      case 'completed': return { icon: <CheckCircle2 size={20} />, label: 'Completed', color: 'text-green-500' };
      case 'in-progress': return { icon: <Clock size={20} />, label: 'In Progress', color: 'text-secondary' };
      default: return { icon: <Circle size={20} />, label: 'Planned', color: 'text-slate-400' };
    }
  };

  return (
    <div className="w-full">
      <section className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/b.png')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-4 text-white">Construction Progress</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Witness the journey of CUOMO LUXURY APARTMENTS from groundbreaking to completion
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-light overflow-hidden">
        <div className="container-custom max-w-5xl">
          <div className="relative border-l-4 border-secondary/30 ml-6 md:mx-auto md:border-l-0">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-secondary/30 -translate-x-1/2"></div>
            
            {progress.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={item.id} 
                className={`relative flex flex-col md:flex-row items-center mb-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className={`absolute left-[-34px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${item.status === 'completed' ? 'bg-green-500' : item.status === 'in-progress' ? 'bg-secondary' : 'bg-slate-300'}`}></div>
                
                <div className={`w-full pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 group">
                    <div className={`flex items-center space-x-2 mb-2 font-bold tracking-wider uppercase text-xs ${getStatusInfo(item.status).color}`}>
                      {getStatusInfo(item.status).icon}
                      <span>{item.date} • {getStatusInfo(item.status).label}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/5 skew-y-3 transform origin-bottom-left"></div>
            <div className="relative z-10">
              <div className="text-5xl font-serif text-secondary mb-2">35%</div>
              <div className="uppercase tracking-widest text-sm text-slate-300">Construction Complete</div>
            </div>
            <div className="relative z-10">
              <div className="text-5xl font-serif text-secondary mb-2">18</div>
              <div className="uppercase tracking-widest text-sm text-slate-300">Months Progress</div>
            </div>
            <div className="relative z-10">
              <div className="text-5xl font-serif text-secondary mb-2">2026</div>
              <div className="uppercase tracking-widest text-sm text-slate-300">Delivery Year</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
