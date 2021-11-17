import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import api from '../api';

const FinishOrderButton = () => {
  const {
    totalPrice,
    detailsAddress: { address, number, sellerId },
    orders,
    userData: { id } } = useContext(Context);

  const saleData = { user_id: id,
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: number,
    status: 'Pending',
    sale_date: new Date() };

  const productsArray = orders;

  const requestObject = { saleData, productsArray };

  const navigate = useNavigate();

  const handleFinishOrder = async () => {
    const { data } = await api.createSale(requestObject);
    navigate(`/customer/orders/${data}`);
  };

  return (<button onClick={ handleFinishOrder } type="button">Finalizar pedido</button>);
};

export default FinishOrderButton;
