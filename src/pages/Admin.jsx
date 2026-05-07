import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Building, Plus, Trash2, LogOut, Upload, Settings, X, Clock, CheckCircle2, Circle, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const navigate = useNavigate();
  const { 
    logout,
    gallery, deleteGalleryImage, updateGalleryImage,
    properties, deleteProperty, updateProperty,
    progress, deleteProgressItem, updateProgressItem 
  } = useData();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const openAddModal = () => {
    setEditItem(null);
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setShowModal(true);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="text-green-500" size={18} />;
      case 'in-progress': return <Clock className="text-secondary" size={18} />;
      default: return <Circle className="text-slate-300" size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden lg:block fixed h-full pt-10">
        <div className="mb-10 px-4">
          <img src="/p.png" alt="Pacol" className="h-8 mb-2" />
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Admin Console</p>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'gallery' ? 'bg-secondary text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <ImageIcon size={20} />
            <span className="font-medium">Gallery</span>
          </button>
          <button 
            onClick={() => setActiveTab('properties')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'properties' ? 'bg-secondary text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Building size={20} />
            <span className="font-medium">Properties</span>
          </button>
          <button 
            onClick={() => setActiveTab('progress')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'progress' ? 'bg-secondary text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <Clock size={20} />
            <span className="font-medium">Progress</span>
          </button>
          <div className="pt-10">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-64 p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-serif text-primary capitalize">{activeTab} Management</h1>
              <p className="text-slate-500">Manage your website's {activeTab} content</p>
            </div>
            <button 
              onClick={openAddModal}
              className="btn-primary flex items-center py-3 px-6 text-sm"
            >
              <Plus size={18} className="mr-2" /> Add New {activeTab}
            </button>
          </header>

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map(img => (
                <div key={img.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                  <div className="relative h-48">
                    {img.type === 'video' ? (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <Clock size={40} className="text-white/20" />
                      </div>
                    ) : (
                      <img src={img.src} alt="" className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <button 
                        onClick={() => openEditModal(img)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-slate-100 transition-all"
                      >
                        <Pencil size={18} />
                      </button>
                      <button 
                        onClick={() => deleteGalleryImage(img.id)}
                        className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-primary text-sm truncate">{img.title}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{img.category} • {img.type}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Property</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Location</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {properties.map(prop => (
                    <tr key={prop.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img src={prop.image} className="w-10 h-10 rounded-lg object-cover mr-3" alt="" />
                          <span className="font-bold text-primary">{prop.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{prop.location}</td>
                      <td className="px-6 py-4 text-right flex justify-end space-x-4">
                        <button onClick={() => openEditModal(prop)} className="text-primary hover:text-secondary"><Pencil size={18} /></button>
                        <button onClick={() => deleteProperty(prop.id)} className="text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-4">
              {progress.map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center group">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{getStatusIcon(item.status)}</div>
                    <div>
                      <h3 className="font-bold text-primary">{item.title}</h3>
                      <p className="text-sm text-slate-400 mb-1">{item.date}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button onClick={() => openEditModal(item)} className="p-2 text-primary hover:bg-slate-100 rounded-full transition-all"><Pencil size={18} /></button>
                    <button onClick={() => deleteProgressItem(item.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-full transition-all"><Trash2 size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-primary">{editItem ? 'Edit' : 'Add New'} {activeTab}</h2>
                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-primary"><X size={24} /></button>
              </div>
              
              {activeTab === 'gallery' && <AddGalleryForm onClose={() => setShowModal(false)} editItem={editItem} />}
              {activeTab === 'properties' && <AddPropertyForm onClose={() => setShowModal(false)} editItem={editItem} />}
              {activeTab === 'progress' && <AddProgressForm onClose={() => setShowModal(false)} editItem={editItem} />}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AddGalleryForm = ({ onClose, editItem }) => {
  const { addGalleryImage, updateGalleryImage } = useData();
  const [files, setFiles] = useState(editItem ? [{ src: editItem.src, type: editItem.type }] : []);
  const [title, setTitle] = useState(editItem?.title || '');
  const [category, setCategory] = useState(editItem?.category || 'finished');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setUploading(true);
    const promises = selectedFiles.map(file => new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve({ src: reader.result, type: file.type.startsWith('video/') ? 'video' : 'image' });
      reader.readAsDataURL(file);
    }));
    Promise.all(promises).then(res => { setFiles(res); setUploading(false); });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateGalleryImage(editItem.id, { title, category, src: files[0].src, type: files[0].type });
    } else {
      files.forEach((f, i) => addGalleryImage({ ...f, title: files.length > 1 ? `${title} ${i+1}` : title, category, desc: '' }));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!editItem && <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} className="w-full p-2 border border-dashed rounded-xl" />}
      {editItem && <div className="text-xs text-slate-400 mb-2 italic">Image cannot be changed in edit mode yet. Delete and re-add to change image.</div>}
      <input type="text" placeholder="Title" required value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 bg-slate-50 rounded-xl" />
      <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-3 bg-slate-50 rounded-xl">
        <option value="finished">Finished</option>
        <option value="construction">Construction</option>
      </select>
      <button type="submit" disabled={uploading} className="w-full btn-primary py-3">{editItem ? 'Update Item' : 'Save Items'}</button>
    </form>
  );
};

const AddPropertyForm = ({ onClose, editItem }) => {
  const { addProperty, updateProperty } = useData();
  const [formData, setFormData] = useState(editItem || { title: '', location: '', price: '', image: '', beds: 2, baths: 2, area: '100sqm', tag: 'For Sale' });

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => setFormData({ ...formData, image: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateProperty(editItem.id, formData);
    } else {
      addProperty(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="file" onChange={handleFile} className="w-full p-2 border border-dashed rounded-xl" />
      <input type="text" placeholder="Title" required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl" />
      <input type="text" placeholder="Location" required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl" />
      <button type="submit" className="w-full btn-primary py-3">{editItem ? 'Update Property' : 'Add Property'}</button>
    </form>
  );
};

const AddProgressForm = ({ onClose, editItem }) => {
  const { addProgressItem, updateProgressItem } = useData();
  const [formData, setFormData] = useState(editItem || { title: '', date: '', desc: '', status: 'planned' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateProgressItem(editItem.id, formData);
    } else {
      addProgressItem(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Milestone Title" required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl" />
      <input type="text" placeholder="Date (e.g. June 2025)" required value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl" />
      <textarea placeholder="Description" required value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl h-24" />
      <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full p-3 bg-slate-50 rounded-xl">
        <option value="completed">Completed</option>
        <option value="in-progress">In Progress</option>
        <option value="planned">Planned</option>
      </select>
      <button type="submit" className="w-full btn-primary py-3">{editItem ? 'Update Milestone' : 'Add Milestone'}</button>
    </form>
  );
};

export default Admin;
