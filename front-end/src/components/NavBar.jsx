import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import './NavBar.css';

export default function NavBar() {
  const { userData, setUserData } = useContext(Context);
  const navegate = useNavigate();

  const resetLocal = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    setUserData(false);
    navegate('/login');
  };

  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navegate('/customer/products') }
      >
        Produtos
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navegate('/customer/orders') }
      >
        Meus Pedidos

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
