import React, { useContext, useEffect, useState } from 'react';
import api from '../../api/index';
import Context from '../../context/Context';
import ProdutsCard from '../ProductsCard';
import './style.css';

export default function CatalogProducts() {
  const { setOrders } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const { data: allProducts } = await api.getAllProduts();

      const tempQuant = {};
      allProducts.forEach(({ id, price, name }) => {
        tempQuant[id] = { id, name, qtd: 0, price };
      });
      localStorage.setItem('carrinho', JSON.stringify(tempQuant));

      setOrders(tempQuant);
      setProducts(allProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (

    <div className="catalog">
      { isLoading ? <p>Loading....</p>
        : (
          <div className="catalog-div">
            { products.map((product) => (<ProdutsCard
              key={ product.id }
              product={ product }
            />)) }
          </div>) }
    </div>

  );
}
