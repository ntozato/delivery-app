import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinishOrderButton = () => {
  const navigate = useNavigate();

  const handleFinishOrder = () => {
    navigate('/customer/orders/:id');
  };
  return (<button onClick={ handleFinishOrder } type="button">Finalizar pedido</button>);
};

export default FinishOrderButton;
