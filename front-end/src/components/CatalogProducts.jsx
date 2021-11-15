import React, { useContext, useEffect, useState } from 'react';
import api from '../api/index';
import Context from '../context/Context';
import ProdutsCard from './ProdutsCard';

export default function CatalogProducts() {
  const { setQuantityProducs } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const { data: allProducts } = await api.getAllProduts();

      const tempQuant = {};
      allProducts.forEach(({ id }) => {
        tempQuant[id] = 0;
      });

      setQuantityProducs(tempQuant);
      setProducts(allProducts);
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
          <div style={ { display: 'flex', flexWrap: 'wrap' } }>
            { products.map((product) => (<ProdutsCard
              key={ product.id }
              product={ product }
            />)) }
          </div>) }
    </div>

  );
}
