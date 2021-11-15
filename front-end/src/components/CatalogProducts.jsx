import React, { useEffect, useState } from 'react';
import api from '../api/index';
import ProdutsCard from './ProdutsCard';

export default function CatalogProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const allProducts = await api.getAllProduts();
      console.log(allProducts.data);
      setProducts(allProducts.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      { isLoading ? <p>Loading....</p>
        : (
          <div>
            { products.map((product) => (<ProdutsCard
              key={ product.id }
              product={ product }
            />)) }
          </div>) }
    </div>

  );
}
