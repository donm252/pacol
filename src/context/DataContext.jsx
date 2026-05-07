import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  
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

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('pacol_gallery');
    return saved ? JSON.parse(saved) : [
      { id: 1, src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Architecture', desc: 'Premium exterior finishes', category: 'finished', type: 'image' },
      { id: 2, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Elegant Living Room', desc: 'Spacious and well-lit spaces', category: 'finished', type: 'image' },
      { id: 3, src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Fitted Kitchen', desc: 'Top-tier appliances', category: 'finished', type: 'image' },
      { id: 4, src: '/IMG1.JPG', title: 'Site Preparation', desc: 'Initial groundwork', category: 'construction', type: 'image' },
      { id: 5, src: '/IMG2.JPG', title: 'Foundation', desc: 'Solid structural base', category: 'construction', type: 'image' },
      { id: 6, src: '/IMG3.jpeg', title: 'Framework', desc: 'Raising the levels', category: 'construction', type: 'image' },
      { id: 7, src: '/1.jpeg', title: 'Level 1 Progress', desc: 'Columns and framing', category: 'construction', type: 'image' },
      { id: 8, src: '/2.jpeg', title: 'Level 2 Progress', desc: 'Slab casting', category: 'construction', type: 'image' },
      { id: 9, src: '/3.jpeg', title: 'Blockwork', desc: 'Partitioning units', category: 'construction', type: 'image' },
      { id: 10, src: '/4.jpeg', title: 'Interior Framing', desc: 'Detailing phases', category: 'construction', type: 'image' },
      { id: 11, src: '/5.jpeg', title: 'Roofing Phase', desc: 'Structural enclosure', category: 'construction', type: 'image' },
      { id: 12, src: '/6.jpeg', title: 'Finishing Touches', desc: 'Exterior refinement', category: 'construction', type: 'image' },
    ];
  });

  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('pacol_properties');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "CUOMO Luxury Apartments",
        location: "Lekki Phase 1, Lagos",
        price: "Contact for Price",
        image: "/b.png",
        beds: 2,
        baths: 2,
        area: "120sqm",
        tag: "For Sale"
      },
      {
        id: 2,
        title: "The Vertex Penthouse",
        location: "Victoria Island, Lagos",
        price: "₦450,000,000",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 4,
        area: "350sqm",
        tag: "Off Plan"
      }
    ];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('pacol_progress');
    return saved ? JSON.parse(saved) : [
      { id: 1, date: 'January 2025', title: 'Groundbreaking Ceremony', desc: "The official start of the CUOMO LUXURY APARTMENTS project. Site preparation and excavation work began.", status: 'completed' },
      { id: 2, date: 'April 2024', title: 'Foundation Work Completed', desc: "Concrete pouring and foundation work finished. The building's base is now solid and ready for vertical construction.", status: 'completed' },
      { id: 3, date: 'June 2025', title: 'Structural Framework', desc: "Steel framework completed. The building's structure is now visible with multiple floors taking shape.", status: 'completed' },
      { id: 4, date: 'Coming Soon', title: 'Exterior Walls & Roofing', desc: "Exterior walls completed and roofing installed. The building is now weather-tight and interior work begins.", status: 'planned' },
      { id: 5, date: 'Coming Soon', title: 'Interior Rough-Ins', desc: "Plumbing, electrical, and HVAC systems installed. Walls are framed and ready for finishing.", status: 'planned' },
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('pacol_gallery', JSON.stringify(gallery));
    } catch (e) {
      console.error('Storage quota exceeded. Please use image links or connect Firebase.', e);
    }
  }, [gallery]);

  useEffect(() => {
    try {
      localStorage.setItem('pacol_properties', JSON.stringify(properties));
    } catch (e) {
      console.error('Storage quota exceeded.', e);
    }
  }, [properties]);

  useEffect(() => {
    try {
      localStorage.setItem('pacol_progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Storage quota exceeded.', e);
    }
  }, [progress]);

  const addGalleryImage = (image) => {
    setGallery(prev => [...prev, { ...image, id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}` }]);
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
      progress, addProgressItem, deleteProgressItem, updateProgressItem
    }}>
      {children}
    </DataContext.Provider>
  );
};
