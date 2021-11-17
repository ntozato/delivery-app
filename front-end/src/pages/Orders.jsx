import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import Context from './context/Context';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    const localOrders = JSON.parse(localStorage.getItem('orders'));
    setOrders(localOrders);
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Orders">
      <NavBar />
      <h1>Meu Pedidos</h1>
      <main className="CatalogOrdes">
        {
          orders.map((order) => (
            <OrderCard key={ order.id } order={ order } />
          ))
        }
      </main>
    </div>
  );
}

export default Orders;
