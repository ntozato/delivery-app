import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Context from '../context/Context';
import CatalogProducts from '../components/CatalogProducts';
import './Customer.css';

function Customer() {
  const { setUserData, totalPrice } = useContext(Context);
  const navegate = useNavigate();

  const reloadUserData = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) reloadUserData(user);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="customer">
      <NavBar />
      <CatalogProducts />
      <button
        disabled={ totalPrice === '0.00' }
        type="button"
        onClick={ () => navegate('/customer/checkout') }
        data-testid="customer_products__button-cart"

      >
        Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          { totalPrice.toString().replace('.', ',') }
        </p>
      </button>
    </div>
  );
}

export default Customer;

/*
zebirita@email.com
$#zebirita#$
*/
