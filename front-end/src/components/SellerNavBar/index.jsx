import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import './style.css';

export default function SellerNavBar() {
  const { userData, setUserData } = useContext(Context);
  const navigate = useNavigate();

  const resetLocal = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    setUserData(false);
    navigate('/login');
  };

  // main-group-13-feat-seller-orders

  return (
    <nav>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/seller/orders') }
      >
        Pedidos

      </button>

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
