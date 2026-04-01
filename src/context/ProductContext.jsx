import React, { createContext, useState, useContext } from 'react';
import { products as initialProducts } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  // NOVO: Estado para guardar a categoria atual
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      categoriaSelecionada, 
      setCategoriaSelecionada 
    }}>
      {children}
    </ProductContext.Provider>
  );
};