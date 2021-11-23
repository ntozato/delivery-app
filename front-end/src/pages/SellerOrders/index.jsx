import React, { useState, useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import Context from '../../context/Context';
import SellerOrderCard from '../../components/SellerOrderCard';
import api from '../../api/index';
import socketClient from '../../helpers/socketClient';
import './style.css';
import NavBar from '../../components/NavBar';

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
    socketClient.on('updateStatus', () => {
      getOrders();
    });
    return () => {
      socketClient.removeListener('updateStatu');
      socketClient.removeAllListeners('updateStatus');
    };
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
