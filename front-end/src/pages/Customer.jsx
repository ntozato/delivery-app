import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Context from '../context/Context';
import api from '../api/index';
import CatalogProducts from '../components/CatalogProducts';
import './Customer.css';

function Customer() {
  const { userEmail, userData, setUserData } = useContext(Context);
  const navegate = useNavigate();

  const getUserData = async (email) => {
    try {
      const { data: user } = await api.getDataUser(email);

      const { token } = JSON.parse(localStorage.getItem('user'));
      user.token = token;
      localStorage.setItem('user', JSON.stringify(user));

      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userData) {
      getUserData(userEmail);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="customer">
      <NavBar />
      <CatalogProducts />
      <button
        type="button"
        onClick={ () => navegate('/customer/checkout') }
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho
      </button>
    </div>
  );
}

export default Customer;

/*
zebirita@email.com
$#zebirita#$
*/
