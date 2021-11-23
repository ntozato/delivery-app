import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Context from '../../context/Context';
import CatalogProducts from '../../components/CatalogProducts';
import './style.css';

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
      <div className="d-grid gap-2">
        <Button
          variant="dark"
          size="lg"
          disabled={ totalPrice === '0.00' }
          type="button"
          onClick={ () => navegate('/customer/checkout') }
          data-testid="customer_products__button-cart"

        >
          Ver Carrinho:
          <p data-testid="customer_products__checkout-bottom-value">
            { `R$ ${totalPrice.toString().replace('.', ',')}` }
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Customer;

/*
zebirita@email.com
$#zebirita#$
*/
