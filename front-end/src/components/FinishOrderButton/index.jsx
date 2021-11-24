import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Context from '../../context/Context';
import api from '../../api';
import './style.css';

const FinishOrderButton = () => {
  const {
    totalPrice,
    detailsAddress: { address, number, sellerId },
    orders,
    userData: { id } } = useContext(Context);

  const saleData = {
    user_id: id,
    seller_id: Number(sellerId),
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: number,
    status: 'Pendente',
    sale_date: new Date(),
  };

  const { token } = JSON.parse(localStorage.getItem('user')) || '';

  const unfilteredProducts = Object.values(orders);
  const productsArray = unfilteredProducts.filter((product) => product.qtd > 0);

  const requestObject = { saleData, productsArray };

  const navigate = useNavigate();

  const handleFinishOrder = async () => {
    try {
      const { data } = await api.createSale(requestObject, token);
      navigate(`/customer/orders/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
      } }
    >
      <Button
        className="mt-4 mx-5 col-5"
        variant="dark"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleFinishOrder }
        type="button"
      >
        Finalizar pedido

      </Button>
    </Container>);
};

export default FinishOrderButton;
