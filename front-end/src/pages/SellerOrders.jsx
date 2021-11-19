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
    // const localOrders = JSON.parse(localStorage.getItem('orders'));
    try {
      console.log('UserData', userData);
      const { data: sales } = await api.getSalesByUser(userData.id, userData.role);
      // console.log(sales);
      setOrders(sales);
    } catch (error) {
      console.log(error);
    }
  };
  // const getUserData = async () => {
  //   try {
  //     const { data: user } = await api.getDataUser(userEmail);
  //     const { token } = JSON.parse(localStorage.getItem('user'));
  //     user.token = token;
  //     localStorage.setItem('user', JSON.stringify(user));

  //     setUserData(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getUserData();
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
