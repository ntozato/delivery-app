import React, { useState, useEffect, useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import SellerNavBar from '../components/SellerNavBar';
import OrderCard from '../components/OrderCard';
import api from '../api/index';
import './Orders.css';

function Orders() {
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
    <div className="Orders">
      <SellerNavBar />
      <h1 className="title">Meu Pedidos</h1>
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
