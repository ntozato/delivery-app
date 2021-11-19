import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import './NavBar.css';

export default function NavBar({ firstButton }) {
  const { userData, setUserData } = useContext(Context);
  const navigate = useNavigate();

  const resetLocal = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    setUserData(false);
    navigate('/login');
  };

  console.log(userData);

  // main-group-13-feat-seller-orders

  return (

    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        { firstButton }
      </button>
      {
        userData.role === 'customer'
        && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/orders') }
          >
            Meus Pedidos

          </button>
        )

      }

      <p data-testid="customer_products__element-navbar-user-full-name">
        { userData.name }
      </p>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ resetLocal }
      >
        Sair
      </button>
    </nav>
  );
}

NavBar.propTypes = {
  firstButton: PropTypes.string.isRequired,
};
