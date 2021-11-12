import React from 'react';

export default function NavBar() {
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

      <p data-testid="customer_products__element-navbar-user-full-name">Nome</p>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </button>
    </nav>
  );
}
