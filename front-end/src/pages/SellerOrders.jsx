import React, { useState, useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import NavBar from '../components/NavBar';
import SellerOrderCard from '../components/SellerOrderCard';
import api from '../api/index';
import './SellerOrders.css';

function SellerOrders() {
  const { userData } = useContext(Context);

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data: sales } = await api.getSalesByUser(userData.id, userData.role);
      setOrders(sales);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="SellerOrders">
      <NavBar />
      <main className="CatalogOrdes">
        {
          orders.map((order) => (
            <SellerOrderCard key={ order.id } order={ order } />
          ))
        }
      </main>
    </div>
  );
}

export default SellerOrders;
