import React, { useContext } from 'react';
import Context from '../context/Context';

export default function NavBar() {
  const { userData } = useContext(Context);
  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos

      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos

      </button>

      <p data-testid="customer_products__element-navbar-user-full-name">
        { userData.name }

      </p>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </button>
    </nav>
  );
}
