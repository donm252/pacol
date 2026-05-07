import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('pacol_gallery');
    const isOldVersion = saved && !saved.includes('img_1866');
    
    if (isOldVersion) {
      localStorage.removeItem('pacol_gallery');
      return getDefaultGallery();
    }
    return saved ? JSON.parse(saved) : getDefaultGallery();
  });

  function getDefaultGallery() {
    const imageIds = [
      '1810', '1811', '1812', '1813', '1814', '1815', '1816', '1817', '1818', '1819',
      '1820', '1821', '1822', '1823', '1824', '1827', '1828', '1829', '1830', '1831',
      '1832', '1833', '1839', '1841', '1842', '1843', '1861', '1862', '1864', '1865', '1866'
    ];
    
    const newGallery = imageIds.map((id, index) => ({
      id: index + 100,
      src: `/gallery/img_${id}.jpg`,
      title: `CUOMO Luxury Interior ${index + 1}`,
      category: 'finished',
      type: 'image',
      desc: 'Premium finishes at CUOMO Luxury Apartments.'
    }));

    // Add back the construction ones if needed, but the user asked to remove demo images.
    // I'll leave it as just the finished ones for now.
    return newGallery;
  }

  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('pacol_properties');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "CUOMO Luxury Apartments",
        location: "9b Emma Abimbola Cole, Lekki Phase 1, Lagos",
        price: "Contact for Price",
        image: "/b.png",
        beds: 2,
        baths: 2,
        area: "120sqm",
        tag: "For Sale"
      }
    ];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('pacol_progress');
    return saved ? JSON.parse(saved) : [
      { id: 1, date: 'January 2025', title: 'Groundbreaking Ceremony', desc: "The official start of the CUOMO LUXURY APARTMENTS project.", status: 'completed' },
      { id: 2, date: 'April 2024', title: 'Foundation Work Completed', desc: "Concrete pouring and foundation work finished.", status: 'completed' },
      { id: 3, date: 'June 2025', title: 'Structural Framework', desc: "Steel framework completed.", status: 'completed' },
      { id: 4, date: 'Coming Soon', title: 'Exterior Walls & Roofing', desc: "Exterior walls completed and roofing installed.", status: 'planned' },
    ];
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('pacol_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('pacol_properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('pacol_progress', JSON.stringify(progress));
  }, [progress]);

  const login = (user, pass) => {
    if (user === 'admin' && pass === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  const addGalleryImage = (image) => {
    setGallery(prev => [...prev, { ...image, id: Date.now() }]);
  };

  const deleteGalleryImage = (id) => {
    setGallery(prev => prev.filter(img => img.id !== id));
  };

  const updateGalleryImage = (id, updatedData) => {
    setGallery(prev => prev.map(img => img.id === id ? { ...img, ...updatedData } : img));
  };

  const addProperty = (property) => {
    setProperties(prev => [...prev, { ...property, id: Date.now() }]);
  };

  const deleteProperty = (id) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  const updateProperty = (id, updatedData) => {
    setProperties(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const addProgressItem = (item) => {
    setProgress(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const deleteProgressItem = (id) => {
    setProgress(prev => prev.filter(p => p.id !== id));
  };

  const updateProgressItem = (id, updatedData) => {
    setProgress(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  return (
    <DataContext.Provider value={{ 
      isAuthenticated, login, logout,
      gallery, addGalleryImage, deleteGalleryImage, updateGalleryImage,
      properties, addProperty, deleteProperty, updateProperty,
      progress, addProgressItem, deleteProgressItem, updateProgressItem,
      loading
    }}>
      {children}
    </DataContext.Provider>
  );
};
