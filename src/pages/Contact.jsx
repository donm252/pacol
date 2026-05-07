import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon in Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact = () => {
  const position = [6.4485, 3.4735]; // Approximate coordinates for Lekki Phase 1

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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We are here to answer your questions and help you secure your dream luxury apartment.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-5/12 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-serif text-primary mb-8 border-b border-slate-100 pb-4">Visit Our Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-5 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Headquarters</h4>
                      <p className="text-slate-600 leading-relaxed">9b Emma Abimbola Cole Street,<br/>Lekki Phase 1, Lagos State, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-5 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Working Hours</h4>
                      <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-serif text-primary mb-8 border-b border-slate-100 pb-4">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-5 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Phone Numbers</h4>
                      <p className="text-slate-600">0908 012 3123<br/>0802 501 7193</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mr-5 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Address</h4>
                      <p className="text-slate-600">info@pacolproperties.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-7/12"
            >
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-3xl font-serif text-primary mb-8">Send a Message</h3>
                
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                      <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all bg-slate-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                      <input type="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all bg-slate-50" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all bg-slate-50" placeholder="+234 800 000 0000" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Your Message</label>
                    <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all bg-slate-50 resize-none" placeholder="How can we help you? Are you interested in a payment plan?"></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full flex items-center justify-center">
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active Map Section */}
      <section className="h-[500px] w-full relative z-0">
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="font-serif">
                <strong className="text-primary block mb-1">Pacol Properties</strong>
                9b Emma Abimbola Cole Street,<br/> Lekki Phase 1
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default Contact;
