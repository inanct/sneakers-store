// DataContext.js
import React, { createContext, useContext, useState } from 'react';
import products from '../src/data/data';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(products); // Burada veri durumunu tanımladığınızı düşünüyorum
  const [cart, setCart] = useState([]);

 
 

  return (
    <DataContext.Provider value={{ data, setData, cart , setCart}}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };

